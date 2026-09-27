import fs from "fs";
import path from "path";
import { calculateEstimate } from "@/lib/estimate";

describe("Software Cost Calculator - Pure Estimator", () => {
  it("Combination 1: Baseline business website with single user and standard speed", () => {
    const result = calculateEstimate({
      projectType: "business-website",
      userTypes: "1",
      integrations: [],
      extras: [],
      speed: "standard",
    });

    expect(result.low).toBe(1);
    expect(result.high).toBe(4);
    expect(result.rangeFormatted).toBe("₹1–4 lakh");
    expect(result.weeksMin).toBe(4);
    expect(result.weeksMax).toBe(6);
    expect(result.timelineFormatted).toBe("Typical timeline: 4–6 weeks");
    expect(result.matchingCostGuideSlug).toBe("ecommerce-website");
  });

  it("Combination 2: CRM/ERP with 2-3 user roles, 2 integrations and reports, testing 0.5 rounding", () => {
    const result = calculateEstimate({
      projectType: "crm-erp",
      userTypes: "2-3", // multiplier 1.25, weeksFactor 1.2
      integrations: ["tally-erp", "whatsapp"], // addLow: 2, addHigh: 4.5, count 2 -> +2 weeks
      extras: ["reports-dashboards"], // addLow: 1, addHigh: 3
      speed: "standard",
    });

    // rawLow = (5 + 3) * 1.25 = 10 -> rounded down = 10
    // rawHigh = (12 + 7.5) * 1.25 = 24.375 -> rounded up to nearest 0.5 = 24.5
    expect(result.low).toBe(10);
    expect(result.high).toBe(24.5);
    expect(result.rangeFormatted).toBe("₹10–24.5 lakh");

    // weeksMin = round((8 * 1.2 + 2) * 1) = round(11.6) = 12
    // weeksMax = round((12 * 1.2 + 2) * 1) = round(16.4) = 16
    expect(result.weeksMin).toBe(12);
    expect(result.weeksMax).toBe(16);
    expect(result.timelineFormatted).toBe("Typical timeline: 12–16 weeks");
    expect(result.matchingCostGuideSlug).toBe("crm-software");
  });

  it("Combination 3: AI application with 4+ user roles, private AI hosting and faster delivery", () => {
    const result = calculateEstimate({
      projectType: "ai-app",
      userTypes: "4+", // multiplier 1.5, weeksFactor 1.4
      integrations: [],
      extras: ["private-ai"], // addLow: 4, addHigh: 10
      speed: "faster", // multiplier 1.2, weeksFactor 0.75
    });

    // totalMultiplier = 1.5 * 1.2 = 1.8
    // rawLow = (4 + 4) * 1.8 = 14.4 -> rounded down to nearest 0.5 = 14.0
    // rawHigh = (10 + 10) * 1.8 = 36.0 -> 36.0
    expect(result.low).toBe(14);
    expect(result.high).toBe(36);
    expect(result.rangeFormatted).toBe("₹14–36 lakh");

    // weeksMin = round((6 * 1.4 + 0) * 0.75) = round(6.3) = 6
    // weeksMax = round((10 * 1.4 + 0) * 0.75) = round(10.5) = 11
    expect(result.weeksMin).toBe(6);
    expect(result.weeksMax).toBe(11);
    expect(result.timelineFormatted).toBe("Typical timeline: 6–11 weeks");
    expect(result.matchingCostGuideSlug).toBe("ai-chatbot");
  });

  it("Ignores AI-specific extras when applied to a non-AI project", () => {
    const baseline = calculateEstimate({
      projectType: "portal",
      userTypes: "1",
      integrations: [],
      extras: [],
      speed: "standard",
    });

    const withIgnoredExtra = calculateEstimate({
      projectType: "portal",
      userTypes: "1",
      integrations: [],
      extras: ["private-ai"],
      speed: "standard",
    });

    expect(withIgnoredExtra.low).toBe(baseline.low);
    expect(withIgnoredExtra.high).toBe(baseline.high);
    expect(withIgnoredExtra.weeksMin).toBe(baseline.weeksMin);
    expect(withIgnoredExtra.weeksMax).toBe(baseline.weeksMax);
  });

  describe("Brand compliance: No exclamation marks in new code or copy", () => {
    const filesToCheck = [
      path.join(process.cwd(), "lib", "estimate.ts"),
      path.join(process.cwd(), "components", "CostCalculator.tsx"),
      path.join(process.cwd(), "app", "software-cost-calculator", "page.tsx"),
    ];

    filesToCheck.forEach((filePath) => {
      it(`File ${path.basename(filePath)} should not contain exclamation marks in user-facing strings`, () => {
        const content = fs.readFileSync(filePath, "utf-8");
        // Remove code comments or typescript non-null assertions like `!` or `!==` or `!=`
        // We check string literals specifically
        const stringLiteralRegex = /(["'`])((?:\\.|(?!\1)[^\\])*)\1/g;
        let match;
        const violations: string[] = [];

        while ((match = stringLiteralRegex.exec(content)) !== null) {
          const str = match[2];
          // Ignore comments or regex patterns
          if (str.includes("!") && !str.includes("!=") && !str.includes("!important")) {
            violations.push(str);
          }
        }

        expect(violations).toEqual([]);
      });
    });
  });
});
