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

describe("Hubs Quality Gate — Files on Disk", () => {
  const hubsDir = path.join(process.cwd(), "content", "hubs");

  it("validates that all content hub JSON files satisfy the quality gate rules", () => {
    expect(fs.existsSync(hubsDir)).toBe(true);

    const hubDirs = fs
      .readdirSync(hubsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);

    expect(hubDirs).toContain("glossary");
    expect(hubDirs).toContain("integrations");

    const allHubEntriesMap: Record<string, string[]> = {};
    const entriesByHub: Record<string, { file: string; data: any }[]> = {};

    for (const hub of hubDirs) {
      const dirPath = path.join(hubsDir, hub);
      const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".json"));
      allHubEntriesMap[hub] = [];
      entriesByHub[hub] = [];

      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
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

  it("renders HubEntryTemplate with a fixture without errors", () => {
    const fixtureEntry: HubEntry = {
      ...validBaseEntry,
      slug: "fixture-term",
      title: "Fixture Term",
      toolA: undefined,
      toolB: undefined,
    };

    const { getByText, getAllByText } = render(
      React.createElement(HubEntryTemplate, {
        hub: "glossary",
        hubTitle: "Glossary",
        entry: fixtureEntry,
        bodyHtml: "<p>Test body HTML</p>",
        visibleRelated: [{ slug: "fixture-related", title: "Fixture Related" }],
      })
    );

    expect(getAllByText("Fixture Term").length).toBeGreaterThanOrEqual(1);
    expect(getByText("Key Facts")).toBeInTheDocument();
    expect(getByText("Point 1")).toBeInTheDocument();
    expect(getByText("Question 1?")).toBeInTheDocument();
    expect(getByText("Fixture Related")).toBeInTheDocument();
    expect(getByText("Book a 30-minute scoping call")).toBeInTheDocument();
  });
});
