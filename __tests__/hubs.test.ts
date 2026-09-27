/** @jest-environment jsdom */
import fs from "fs";
import path from "path";
import React from "react";
import { render } from "@testing-library/react";
import HubEntryTemplate from "@/components/hubs/HubEntryTemplate";
import { HubEntry } from "@/lib/hubs";

export interface ValidationError {
  hub: string;
  slug: string;
  field?: string;
  message: string;
}

export function validateHubEntry(
  entry: any,
  hub: string,
  allHubEntriesMap: Record<string, string[]> = {},
  strictRelatedCheck: boolean = false
): ValidationError[] {
  const errors: ValidationError[] = [];
  const slug = entry?.slug || "unknown";

  const requiredFields = [
    "slug",
    "title",
    "seoTitle",
    "seoDescription",
    "summary",
    "dataPoints",
    "body",
    "faqs",
    "related",
    "service",
    "publishedAt",
    "indexable",
  ];

  if (hub === "integrations") {
    requiredFields.push("toolA", "toolB");
  } else if (hub === "cost") {
    requiredFields.push("category", "costBands");
  } else if (hub === "compare") {
    requiredFields.push("category", "optionA", "optionB", "verdict");
  } else if (hub === "solutions") {
    requiredFields.push("industry", "industrySlug");
  } else if (hub === "ai-use-cases") {
    requiredFields.push("category", "accuracy", "timeToPilot");
  }

  // 1. Lacks a field
  for (const field of requiredFields) {
    if (entry[field] === undefined || entry[field] === null || entry[field] === "") {
      errors.push({
        hub,
        slug,
        field,
        message: `Missing required field: ${field}`,
      });
    }
  }

  // Cost bands specific validation
  if (hub === "cost" && Array.isArray(entry.costBands)) {
    if (entry.costBands.length === 0) {
      errors.push({
        hub,
        slug,
        field: "costBands",
        message: "Expected at least 1 costBand in costBands",
      });
    }
    for (let i = 0; i < entry.costBands.length; i++) {
      const band = entry.costBands[i];
      for (const k of ["tier", "range", "timeline", "includes"]) {
        if (!band || !band[k]) {
          errors.push({
            hub,
            slug,
            field: `costBands[${i}].${k}`,
            message: `Missing costBand property: ${k}`,
          });
        }
      }
    }
  }

  // 2. DataPoints count >= 3
  if (!Array.isArray(entry.dataPoints) || entry.dataPoints.length < 3) {
    errors.push({
      hub,
      slug,
      field: "dataPoints",
      message: `Expected at least 3 dataPoints, got ${Array.isArray(entry.dataPoints) ? entry.dataPoints.length : 0}`,
    });
  }

  // 3. FAQs count >= 2
  if (!Array.isArray(entry.faqs) || entry.faqs.length < 2) {
    errors.push({
      hub,
      slug,
      field: "faqs",
      message: `Expected at least 2 faqs, got ${Array.isArray(entry.faqs) ? entry.faqs.length : 0}`,
    });
  }

  // 4. seoDescription length <= 160
  if (typeof entry.seoDescription === "string" && entry.seoDescription.length > 160) {
    errors.push({
      hub,
      slug,
      field: "seoDescription",
      message: `seoDescription exceeds 160 characters (length: ${entry.seoDescription.length})`,
    });
  }

  // 5. Contains "Mectech", "MPE", or "!" anywhere
  const stringified = JSON.stringify(entry);
  if (stringified.includes("!")) {
    errors.push({
      hub,
      slug,
      message: `Entry contains forbidden character: '!'`,
    });
  }
  if (/\b(Mectech|MPE)\b/i.test(stringified)) {
    errors.push({
      hub,
      slug,
      message: `Entry contains forbidden brand term: 'Mectech' or 'MPE'`,
    });
  }

  // 6. Related slugs check: must not be in a different hub
  if (Array.isArray(entry.related)) {
    const thisHubSlugs = allHubEntriesMap[hub] || [];
    const otherHubSlugs: { hub: string; slug: string }[] = [];
    for (const [otherHub, slugs] of Object.entries(allHubEntriesMap)) {
      if (otherHub !== hub) {
        for (const s of slugs) {
          otherHubSlugs.push({ hub: otherHub, slug: s });
        }
      }
    }

    for (const relSlug of entry.related) {
      // Check if it belongs to another hub
      const foundInOther = otherHubSlugs.find((o) => o.slug === relSlug);
      if (foundInOther) {
        errors.push({
          hub,
          slug,
          field: "related",
          message: `Related slug '${relSlug}' belongs to another hub '${foundInOther.hub}', not present in the same hub '${hub}'`,
        });
      }

      if (strictRelatedCheck && !thisHubSlugs.includes(relSlug)) {
        errors.push({
          hub,
          slug,
          field: "related",
          message: `Related slug '${relSlug}' is not present in the same hub '${hub}'`,
        });
      }
    }
  }

  return errors;
}

function getJsonFilesRecursive(dir: string): { file: string; fullPath: string }[] {
  const results: { file: string; fullPath: string }[] = [];
  if (!fs.existsSync(dir)) return results;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      results.push(...getJsonFilesRecursive(full));
    } else if (item.isFile() && item.name.endsWith(".json")) {
      results.push({ file: item.name, fullPath: full });
    }
  }
  return results;
}

describe("Hubs Quality Gate — Files on Disk", () => {
  const hubsDir = path.join(process.cwd(), "content", "hubs");

  it("validates that all content hub JSON files satisfy the quality gate rules across all hubs", () => {
    expect(fs.existsSync(hubsDir)).toBe(true);

    const hubDirs = fs
      .readdirSync(hubsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    expect(hubDirs).toContain("glossary");
    expect(hubDirs).toContain("integrations");
    expect(hubDirs).toContain("cost");
    expect(hubDirs).toContain("compare");
    expect(hubDirs).toContain("solutions");
    expect(hubDirs).toContain("ai-use-cases");

    const allHubEntriesMap: Record<string, string[]> = {};
    const entriesByHub: Record<string, { file: string; data: any }[]> = {};

    for (const hub of hubDirs) {
      const dirPath = path.join(hubsDir, hub);
      const jsonFiles = getJsonFilesRecursive(dirPath);
      allHubEntriesMap[hub] = [];
      entriesByHub[hub] = [];

      for (const { file, fullPath } of jsonFiles) {
        const data = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
        entriesByHub[hub].push({ file, data });
        allHubEntriesMap[hub].push(data.slug);
      }
    }

    const allErrors: ValidationError[] = [];

    for (const hub of hubDirs) {
      const seenSlugs = new Set<string>();

      for (const { file, data } of entriesByHub[hub]) {
        // Duplicate slug check
        if (seenSlugs.has(data.slug)) {
          allErrors.push({
            hub,
            slug: data.slug,
            message: `Duplicate slug detected: ${data.slug} in ${file}`,
          });
        }
        seenSlugs.add(data.slug);

        const errors = validateHubEntry(data, hub, allHubEntriesMap, false);
        allErrors.push(...errors);
      }
    }

    expect(allErrors).toEqual([]);
  });
});

describe("Hubs Quality Gate — Rule Failure Validations", () => {
  const validBaseEntry = {
    slug: "sample-term",
    title: "Sample Term",
    seoTitle: "Sample Term Guide",
    seoDescription: "A concise description under 160 characters for SEO testing purposes.",
    summary: "This is a plain-English summary answering the question directly.",
    dataPoints: [
      { label: "Point 1", value: "Value 1" },
      { label: "Point 2", value: "Value 2" },
      { label: "Point 3", value: "Value 3" },
    ],
    body: "## Body header\n\nBody content goes here.",
    faqs: [
      { q: "Question 1?", a: "Answer 1." },
      { q: "Question 2?", a: "Answer 2." },
    ],
    related: ["term-b", "term-c"],
    service: "/services/business-automation",
    publishedAt: "2026-09-29T03:30:00.000Z",
    indexable: true,
  };

  it("fails if any required field is missing", () => {
    const invalidEntry = { ...validBaseEntry, title: "" };
    const errors = validateHubEntry(invalidEntry, "glossary");
    expect(errors.some((e) => e.field === "title")).toBe(true);
  });

  it("fails if an integration entry lacks toolA or toolB", () => {
    const invalidIntegration = { ...validBaseEntry };
    const errors = validateHubEntry(invalidIntegration, "integrations");
    expect(errors.some((e) => e.field === "toolA")).toBe(true);
    expect(errors.some((e) => e.field === "toolB")).toBe(true);
  });

  it("fails if a cost entry lacks category or costBands", () => {
    const invalidCost = { ...validBaseEntry };
    const errors = validateHubEntry(invalidCost, "cost");
    expect(errors.some((e) => e.field === "category")).toBe(true);
    expect(errors.some((e) => e.field === "costBands")).toBe(true);
  });

  it("fails if a compare entry lacks optionA, optionB, or verdict", () => {
    const invalidCompare = { ...validBaseEntry, category: "ERP" };
    const errors = validateHubEntry(invalidCompare, "compare");
    expect(errors.some((e) => e.field === "optionA")).toBe(true);
    expect(errors.some((e) => e.field === "optionB")).toBe(true);
    expect(errors.some((e) => e.field === "verdict")).toBe(true);
  });

  it("fails if a solution entry lacks industry or industrySlug", () => {
    const invalidSolution = { ...validBaseEntry };
    const errors = validateHubEntry(invalidSolution, "solutions");
    expect(errors.some((e) => e.field === "industry")).toBe(true);
    expect(errors.some((e) => e.field === "industrySlug")).toBe(true);
  });

  it("fails if an ai-use-cases entry lacks accuracy or timeToPilot", () => {
    const invalidAI = { ...validBaseEntry, category: "NLP" };
    const errors = validateHubEntry(invalidAI, "ai-use-cases");
    expect(errors.some((e) => e.field === "accuracy")).toBe(true);
    expect(errors.some((e) => e.field === "timeToPilot")).toBe(true);
  });

  it("fails if an entry has fewer than 3 dataPoints", () => {
    const invalidEntry = {
      ...validBaseEntry,
      dataPoints: [
        { label: "Point 1", value: "Value 1" },
        { label: "Point 2", value: "Value 2" },
      ],
    };
    const errors = validateHubEntry(invalidEntry, "glossary");
    expect(errors.some((e) => e.field === "dataPoints")).toBe(true);
  });

  it("fails if an entry has fewer than 2 faqs", () => {
    const invalidEntry = {
      ...validBaseEntry,
      faqs: [{ q: "Single FAQ?", a: "Only one answer." }],
    };
    const errors = validateHubEntry(invalidEntry, "glossary");
    expect(errors.some((e) => e.field === "faqs")).toBe(true);
  });

  it("fails if seoDescription exceeds 160 characters", () => {
    const invalidEntry = {
      ...validBaseEntry,
      seoDescription: "A".repeat(161),
    };
    const errors = validateHubEntry(invalidEntry, "glossary");
    expect(errors.some((e) => e.field === "seoDescription")).toBe(true);
  });

  it("fails if entry contains forbidden brand terms Mectech or MPE", () => {
    const invalidEntry1 = { ...validBaseEntry, summary: "Former client at Mectech engineers." };
    expect(validateHubEntry(invalidEntry1, "glossary").some((e) => e.message.includes("forbidden brand term"))).toBe(true);

    const invalidEntry2 = { ...validBaseEntry, body: "Standard MPE systems." };
    expect(validateHubEntry(invalidEntry2, "glossary").some((e) => e.message.includes("forbidden brand term"))).toBe(true);
  });

  it("fails if entry contains an exclamation mark !", () => {
    const invalidEntry = { ...validBaseEntry, title: "Super Tool!" };
    expect(validateHubEntry(invalidEntry, "glossary").some((e) => e.message.includes("forbidden character: '!'"))).toBe(true);
  });

  it("fails if a related slug is not present in the same hub", () => {
    const allHubsMap = {
      glossary: ["sample-term", "term-b"],
      integrations: ["tally-shopify", "tally-razorpay"],
    };

    // Case 1: Cross-hub slug in related
    const entryWithCrossHub = {
      ...validBaseEntry,
      related: ["tally-shopify"], // from integrations
    };
    const crossHubErrors = validateHubEntry(entryWithCrossHub, "glossary", allHubsMap, false);
    expect(crossHubErrors.some((e) => e.field === "related" && e.message.includes("not present in the same hub"))).toBe(true);

    // Case 2: Missing slug in strict check
    const entryWithMissing = {
      ...validBaseEntry,
      related: ["non-existent-slug"],
    };
    const missingErrors = validateHubEntry(entryWithMissing, "glossary", allHubsMap, true);
    expect(missingErrors.some((e) => e.field === "related" && e.message.includes("not present in the same hub"))).toBe(true);
  });

  it("renders HubEntryTemplate with costBands and verdict without errors", () => {
    const fixtureEntry: HubEntry = {
      ...validBaseEntry,
      slug: "crm-cost",
      title: "CRM Development Cost",
      category: "Software",
      verdict: "Custom build pays off for 50+ users.",
      costBands: [
        {
          tier: "Starter",
          range: "₹3–6 lakh",
          timeline: "4–6 weeks",
          includes: "Core lead management and pipelines",
        },
      ],
    };

    const { getByText, getAllByText } = render(
      React.createElement(HubEntryTemplate, {
        hub: "cost",
        hubTitle: "Cost Guides",
        entry: fixtureEntry,
        bodyHtml: "<p>Cost breakdown body</p>",
        visibleRelated: [{ slug: "fixture-related", title: "Fixture Related" }],
      })
    );

    expect(getAllByText("CRM Development Cost").length).toBeGreaterThanOrEqual(1);
    expect(getByText("Key Facts")).toBeInTheDocument();
    expect(getByText("Cost Bands")).toBeInTheDocument();
    expect(getByText("Starter")).toBeInTheDocument();
    expect(getByText("₹3–6 lakh")).toBeInTheDocument();
    expect(getByText("Our verdict")).toBeInTheDocument();
    expect(getByText("Custom build pays off for 50+ users.")).toBeInTheDocument();
    expect(getByText("Question 1?")).toBeInTheDocument();
    expect(getByText("Fixture Related")).toBeInTheDocument();
    expect(getByText("Book a 30-minute scoping call")).toBeInTheDocument();
  });
});
