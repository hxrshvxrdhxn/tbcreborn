export type ProjectTypeId =
  | "business-website"
  | "internal-tool"
  | "portal"
  | "crm-erp"
  | "mobile-app"
  | "ai-app"
  | "startup-mvp";

export type UserTypesId = "1" | "2-3" | "4+";

export type IntegrationId =
  | "tally-erp"
  | "payment-gateway"
  | "whatsapp"
  | "crm"
  | "other-api";

export type ExtraId =
  | "offline-mobile"
  | "multilingual"
  | "reports-dashboards"
  | "private-ai";

export type SpeedId = "standard" | "faster";

export interface ProjectTypeOption {
  id: ProjectTypeId;
  label: string;
  baseLow: number; // in lakh INR
  baseHigh: number;
  baseWeeksMin: number;
  baseWeeksMax: number;
  costGuideSlug?: string;
}

export interface UserTypesOption {
  id: UserTypesId;
  label: string;
  multiplier: number;
  weeksFactor: number;
}

export interface IntegrationOption {
  id: IntegrationId;
  label: string;
  addLow: number;
  addHigh: number;
}

export interface ExtraOption {
  id: ExtraId;
  label: string;
  multiplier?: number;
  addLow?: number;
  addHigh?: number;
  onlyFor?: ProjectTypeId;
}

export interface SpeedOption {
  id: SpeedId;
  label: string;
  description: string;
  multiplier: number;
  weeksFactor: number;
}

export const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: "business-website",
    label: "Business website",
    baseLow: 1,
    baseHigh: 4,
    baseWeeksMin: 4,
    baseWeeksMax: 6,
    costGuideSlug: "ecommerce-website",
  },
  {
    id: "internal-tool",
    label: "Internal tool or workflow system",
    baseLow: 5,
    baseHigh: 12,
    baseWeeksMin: 8,
    baseWeeksMax: 12,
  },
  {
    id: "portal",
    label: "Customer or dealer portal",
    baseLow: 5,
    baseHigh: 12,
    baseWeeksMin: 8,
    baseWeeksMax: 12,
    costGuideSlug: "customer-portal",
  },
  {
    id: "crm-erp",
    label: "CRM or ERP module",
    baseLow: 5,
    baseHigh: 12,
    baseWeeksMin: 8,
    baseWeeksMax: 12,
    costGuideSlug: "crm-software",
  },
  {
    id: "mobile-app",
    label: "Mobile app (Android and iOS)",
    baseLow: 6,
    baseHigh: 15,
    baseWeeksMin: 10,
    baseWeeksMax: 14,
  },
  {
    id: "ai-app",
    label: "AI application (chatbot, document AI)",
    baseLow: 4,
    baseHigh: 10,
    baseWeeksMin: 6,
    baseWeeksMax: 10,
    costGuideSlug: "ai-chatbot",
  },
  {
    id: "startup-mvp",
    label: "MVP for a startup",
    baseLow: 5,
    baseHigh: 12,
    baseWeeksMin: 8,
    baseWeeksMax: 12,
  },
];

export const USER_TYPES_OPTIONS: UserTypesOption[] = [
  { id: "1", label: "1", multiplier: 1.0, weeksFactor: 1.0 },
  { id: "2-3", label: "2–3", multiplier: 1.25, weeksFactor: 1.2 },
  { id: "4+", label: "4 or more", multiplier: 1.5, weeksFactor: 1.4 },
];

export const INTEGRATION_OPTIONS: IntegrationOption[] = [
  { id: "tally-erp", label: "Tally or ERP", addLow: 1.5, addHigh: 3 },
  { id: "payment-gateway", label: "Payment gateway", addLow: 0.5, addHigh: 1 },
  { id: "whatsapp", label: "WhatsApp", addLow: 0.5, addHigh: 1.5 },
  { id: "crm", label: "CRM", addLow: 1, addHigh: 2 },
  { id: "other-api", label: "Other API", addLow: 1, addHigh: 2.5 },
];

export const EXTRA_OPTIONS: ExtraOption[] = [
  { id: "offline-mobile", label: "Offline mobile use", multiplier: 1.15 },
  { id: "multilingual", label: "Hindi or multilingual", multiplier: 1.1 },
  { id: "reports-dashboards", label: "Reports and dashboards", addLow: 1, addHigh: 3 },
  {
    id: "private-ai",
    label: "Private or on-premise AI hosting",
    addLow: 4,
    addHigh: 10,
    onlyFor: "ai-app",
  },
];

export const SPEED_OPTIONS: SpeedOption[] = [
  { id: "standard", label: "Standard", description: "Regular pace", multiplier: 1.0, weeksFactor: 1.0 },
  {
    id: "faster",
    label: "Faster, larger team",
    description: "Expanded team",
    multiplier: 1.2,
    weeksFactor: 0.75,
  },
];

export interface EstimateInput {
  projectType: ProjectTypeId;
  userTypes: UserTypesId;
  integrations: IntegrationId[];
  extras: ExtraId[];
  speed: SpeedId;
}

export interface EstimateResult {
  low: number; // in lakh INR, rounded down to nearest 0.5
  high: number; // in lakh INR, rounded up to nearest 0.5
  rawLow: number;
  rawHigh: number;
  rangeFormatted: string; // e.g. "₹5–12 lakh"
  weeksMin: number; // rounded whole weeks
  weeksMax: number;
  timelineFormatted: string; // e.g. "Typical timeline: 8–12 weeks"
  matchingCostGuideSlug?: string;
  projectTypeLabel: string;
}

export function formatLakh(val: number): string {
  return Number.isInteger(val) ? val.toString() : val.toFixed(1);
}

export function calculateEstimate(input: EstimateInput): EstimateResult {
  const project =
    PROJECT_TYPES.find((p) => p.id === input.projectType) || PROJECT_TYPES[0];
  const userType =
    USER_TYPES_OPTIONS.find((u) => u.id === input.userTypes) ||
    USER_TYPES_OPTIONS[0];
  const speed =
    SPEED_OPTIONS.find((s) => s.id === input.speed) || SPEED_OPTIONS[0];

  // Base costs
  let addLow = 0;
  let addHigh = 0;

  // Integrations additions
  for (const intId of input.integrations) {
    const opt = INTEGRATION_OPTIONS.find((i) => i.id === intId);
    if (opt) {
      addLow += opt.addLow;
      addHigh += opt.addHigh;
    }
  }

  // Extras additions & multipliers
  let extrasMultiplier = 1.0;
  for (const extId of input.extras) {
    const opt = EXTRA_OPTIONS.find((e) => e.id === extId);
    if (!opt) continue;

    // Filter conditional extras (e.g. private-ai only for ai-app)
    if (opt.onlyFor && opt.onlyFor !== project.id) {
      continue;
    }

    if (opt.addLow !== undefined) addLow += opt.addLow;
    if (opt.addHigh !== undefined) addHigh += opt.addHigh;
    if (opt.multiplier !== undefined) extrasMultiplier *= opt.multiplier;
  }

  // Multipliers product
  const totalMultiplier = userType.multiplier * speed.multiplier * extrasMultiplier;

  const rawLow = (project.baseLow + addLow) * totalMultiplier;
  const rawHigh = (project.baseHigh + addHigh) * totalMultiplier;

  // Round low down and high up to nearest 0.5 lakh
  const low = Math.floor(rawLow * 2) / 2;
  const high = Math.ceil(rawHigh * 2) / 2;

  // Weeks calculation:
  // base weeks × userType.weeksFactor, +2 weeks if >= 2 integrations, then × speed.weeksFactor; round to whole weeks
  const integrationExtraWeeks = input.integrations.length >= 2 ? 2 : 0;
  const rawWeeksMin =
    (project.baseWeeksMin * userType.weeksFactor + integrationExtraWeeks) *
    speed.weeksFactor;
  const rawWeeksMax =
    (project.baseWeeksMax * userType.weeksFactor + integrationExtraWeeks) *
    speed.weeksFactor;

  const weeksMin = Math.max(1, Math.round(rawWeeksMin));
  const weeksMax = Math.max(weeksMin, Math.round(rawWeeksMax));

  const rangeFormatted = `₹${formatLakh(low)}–${formatLakh(high)} lakh`;
  const timelineFormatted = `Typical timeline: ${weeksMin}–${weeksMax} weeks`;

  return {
    low,
    high,
    rawLow,
    rawHigh,
    rangeFormatted,
    weeksMin,
    weeksMax,
    timelineFormatted,
    matchingCostGuideSlug: project.costGuideSlug,
    projectTypeLabel: project.label,
  };
}
