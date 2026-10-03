"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { track } from "@/lib/track";
import {
  PROJECT_TYPES,
  USER_TYPES_OPTIONS,
  INTEGRATION_OPTIONS,
  EXTRA_OPTIONS,
  SPEED_OPTIONS,
  ProjectTypeId,
  UserTypesId,
  IntegrationId,
  ExtraId,
  SpeedId,
  calculateEstimate,
} from "@/lib/estimate";

interface CostCalculatorProps {
  visibleCostGuideSlugs?: string[];
}

export default function CostCalculator({
  visibleCostGuideSlugs = [],
}: CostCalculatorProps) {
  const [projectType, setProjectType] = useState<ProjectTypeId>("business-website");
  const [userTypes, setUserTypes] = useState<UserTypesId>("1");
  const [integrations, setIntegrations] = useState<IntegrationId[]>([]);
  const [extras, setExtras] = useState<ExtraId[]>([]);
  const [speed, setSpeed] = useState<SpeedId>("standard");

  const hasTrackedUsage = useRef(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const estimate = calculateEstimate({
    projectType,
    userTypes,
    integrations,
    extras,
    speed,
  });

  // Track calculator usage once per page view after first interaction
  const triggerDebouncedTrack = (typeLabel: string, rangeFormatted: string) => {
    if (hasTrackedUsage.current) return;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if (!hasTrackedUsage.current) {
        track("calculator_used", {
          type: typeLabel,
          range: rangeFormatted,
        });
        hasTrackedUsage.current = true;
      }
    }, 800);
  };

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const handleProjectTypeChange = (id: ProjectTypeId) => {
    setProjectType(id);
    const nextEstimate = calculateEstimate({
      projectType: id,
      userTypes,
      integrations,
      extras,
      speed,
    });
    triggerDebouncedTrack(nextEstimate.projectTypeLabel, nextEstimate.rangeFormatted);
  };

  const handleUserTypesChange = (id: UserTypesId) => {
    setUserTypes(id);
    const nextEstimate = calculateEstimate({
      projectType,
      userTypes: id,
      integrations,
      extras,
      speed,
    });
    triggerDebouncedTrack(nextEstimate.projectTypeLabel, nextEstimate.rangeFormatted);
  };

  const toggleIntegration = (id: IntegrationId) => {
    const next = integrations.includes(id)
      ? integrations.filter((item) => item !== id)
      : [...integrations, id];
    setIntegrations(next);
    const nextEstimate = calculateEstimate({
      projectType,
      userTypes,
      integrations: next,
      extras,
      speed,
    });
    triggerDebouncedTrack(nextEstimate.projectTypeLabel, nextEstimate.rangeFormatted);
  };

  const toggleExtra = (id: ExtraId) => {
    const next = extras.includes(id)
      ? extras.filter((item) => item !== id)
      : [...extras, id];
    setExtras(next);
    const nextEstimate = calculateEstimate({
      projectType,
      userTypes,
      integrations,
      extras: next,
      speed,
    });
    triggerDebouncedTrack(nextEstimate.projectTypeLabel, nextEstimate.rangeFormatted);
  };

  const handleSpeedChange = (id: SpeedId) => {
    setSpeed(id);
    const nextEstimate = calculateEstimate({
      projectType,
      userTypes,
      integrations,
      extras,
      speed: id,
    });
    triggerDebouncedTrack(nextEstimate.projectTypeLabel, nextEstimate.rangeFormatted);
  };

  const handleCtaClick = () => {
    track("book_consultation_click", { location: "calculator" });
  };

  // Determine if a matching cost guide is visible
  const isCostGuideVisible =
    estimate.matchingCostGuideSlug &&
    visibleCostGuideSlugs.includes(estimate.matchingCostGuideSlug);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* ── LEFT COLUMN: 5 QUESTION CARDS ── */}
      <div className="lg:col-span-7 space-y-6">
        {/* Card 1: Project Type */}
        <section className="bg-white border border-light-grey rounded-lg p-6 sm:p-7 shadow-sm">
          <div className="mb-4">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-royal">
              Question 1 of 5
            </span>
            <h2 className="font-display font-bold text-[20px] text-ink mt-1">
              What are you building?
            </h2>
            <p className="font-sans text-[14px] text-mid-grey mt-1">
              Select the option that best reflects the core scope of your project.
            </p>
          </div>

          <div className="space-y-2.5">
            {PROJECT_TYPES.map((type) => {
              const isSelected = projectType === type.id;
              return (
                <label
                  key={type.id}
                  className={`flex items-center gap-3.5 p-3.5 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "border-royal bg-royal/[0.04] text-ink font-medium shadow-xs"
                      : "border-light-grey bg-white text-ink/80 hover:border-royal/50 hover:bg-ivory/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type.id}
                    checked={isSelected}
                    onChange={() => handleProjectTypeChange(type.id)}
                    className="w-4 h-4 text-royal border-light-grey focus:ring-royal"
                  />
                  <span className="font-sans text-[15px]">{type.label}</span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Card 2: User Types */}
        <section className="bg-white border border-light-grey rounded-lg p-6 sm:p-7 shadow-sm">
          <div className="mb-4">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-royal">
              Question 2 of 5
            </span>
            <h2 className="font-display font-bold text-[20px] text-ink mt-1">
              How many types of users?
            </h2>
            <p className="font-sans text-[14px] text-mid-grey mt-1">
              Different roles require distinct permission levels, dashboards, and workflows (e.g. admins, staff, customers).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {USER_TYPES_OPTIONS.map((opt) => {
              const isSelected = userTypes === opt.id;
              return (
                <label
                  key={opt.id}
                  className={`flex flex-col items-center justify-center text-center p-4 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "border-royal bg-royal/[0.04] text-royal font-semibold shadow-xs"
                      : "border-light-grey bg-white text-ink/80 hover:border-royal/50 hover:bg-ivory/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="userTypes"
                    value={opt.id}
                    checked={isSelected}
                    onChange={() => handleUserTypesChange(opt.id)}
                    className="sr-only"
                  />
                  <span className="font-display text-[18px] mb-1">{opt.label}</span>
                  <span className="font-sans text-[12px] text-mid-grey">
                    {opt.id === "1"
                      ? "Single user role"
                      : opt.id === "2-3"
                      ? "2–3 roles & permissions"
                      : "Multi-tier role hierarchy"}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Card 3: Integrations */}
        <section className="bg-white border border-light-grey rounded-lg p-6 sm:p-7 shadow-sm">
          <div className="mb-4">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-royal">
              Question 3 of 5
            </span>
            <h2 className="font-display font-bold text-[20px] text-ink mt-1">
              Which integrations?
            </h2>
            <p className="font-sans text-[14px] text-mid-grey mt-1">
              Connecting external systems adds development and testing time. Select all that apply.
            </p>
          </div>

          <div className="space-y-2.5">
            {INTEGRATION_OPTIONS.map((opt) => {
              const isChecked = integrations.includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={`flex items-center justify-between p-3.5 rounded-lg border cursor-pointer transition-all ${
                    isChecked
                      ? "border-royal bg-royal/[0.04] text-ink font-medium shadow-xs"
                      : "border-light-grey bg-white text-ink/80 hover:border-royal/50 hover:bg-ivory/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleIntegration(opt.id)}
                      className="w-4 h-4 rounded text-royal border-light-grey focus:ring-royal"
                    />
                    <span className="font-sans text-[15px]">{opt.label}</span>
                  </div>
                  <span className="font-sans text-[13px] text-mid-grey">
                    +₹{opt.addLow}–{opt.addHigh} lakh
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Card 4: Extras */}
        <section className="bg-white border border-light-grey rounded-lg p-6 sm:p-7 shadow-sm">
          <div className="mb-4">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-royal">
              Question 4 of 5
            </span>
            <h2 className="font-display font-bold text-[20px] text-ink mt-1">
              Extras
            </h2>
            <p className="font-sans text-[14px] text-mid-grey mt-1">
              Additional architectural capabilities, language localisation, or specialised hosting.
            </p>
          </div>

          <div className="space-y-2.5">
            {EXTRA_OPTIONS.map((opt) => {
              // Only display private AI if project type is AI app
              if (opt.onlyFor && opt.onlyFor !== projectType) {
                return null;
              }
              const isChecked = extras.includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={`flex items-center justify-between p-3.5 rounded-lg border cursor-pointer transition-all ${
                    isChecked
                      ? "border-royal bg-royal/[0.04] text-ink font-medium shadow-xs"
                      : "border-light-grey bg-white text-ink/80 hover:border-royal/50 hover:bg-ivory/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleExtra(opt.id)}
                      className="w-4 h-4 rounded text-royal border-light-grey focus:ring-royal"
                    />
                    <span className="font-sans text-[15px]">{opt.label}</span>
                  </div>
                  <span className="font-sans text-[13px] text-mid-grey">
                    {opt.addLow !== undefined
                      ? `+₹${opt.addLow}–${opt.addHigh} lakh`
                      : opt.multiplier !== undefined
                      ? `+${Math.round((opt.multiplier - 1) * 100)}%`
                      : ""}
                  </span>
                </label>
              );
            })}
          </div>
        </section>

        {/* Card 5: Speed */}
        <section className="bg-white border border-light-grey rounded-lg p-6 sm:p-7 shadow-sm">
          <div className="mb-4">
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-royal">
              Question 5 of 5
            </span>
            <h2 className="font-display font-bold text-[20px] text-ink mt-1">
              How soon do you need it?
            </h2>
            <p className="font-sans text-[14px] text-mid-grey mt-1">
              Select your delivery preference. Faster delivery allocates dedicated parallel engineering resources.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SPEED_OPTIONS.map((opt) => {
              const isSelected = speed === opt.id;
              return (
                <label
                  key={opt.id}
                  className={`flex flex-col p-4 rounded-lg border cursor-pointer transition-all ${
                    isSelected
                      ? "border-royal bg-royal/[0.04] shadow-xs"
                      : "border-light-grey bg-white hover:border-royal/50 hover:bg-ivory/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <input
                      type="radio"
                      name="speed"
                      value={opt.id}
                      checked={isSelected}
                      onChange={() => handleSpeedChange(opt.id)}
                      className="w-4 h-4 text-royal border-light-grey focus:ring-royal"
                    />
                    <span className="font-sans font-semibold text-[15px] text-ink">
                      {opt.label}
                    </span>
                  </div>
                  <span className="font-sans text-[13px] text-mid-grey pl-7">
                    {opt.id === "standard"
                      ? "Balanced pace with standard engineering cycles"
                      : "Parallel streams, reduced delivery timeline"}
                  </span>
                </label>
              );
            })}
          </div>
        </section>
      </div>

      {/* ── RIGHT COLUMN: STICKY RESULT PANEL ── */}
      <div className="lg:col-span-5 lg:sticky lg:top-24">
        <aside className="bg-white border border-light-grey rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
          <div>
            <span className="font-sans text-[12px] font-semibold uppercase tracking-wider text-royal">
              Estimated Investment
            </span>
            <div className="mt-2">
              <span className="font-sans text-[13px] text-mid-grey uppercase tracking-wide block">
                Indicative range
              </span>
              <div className="font-display font-bold text-[32px] sm:text-[36px] text-ink tracking-tight mt-0.5">
                {estimate.rangeFormatted}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-light-grey/60 flex items-center justify-between">
              <div>
                <span className="font-sans text-[13px] text-mid-grey uppercase tracking-wide block">
                  Typical timeline
                </span>
                <span className="font-display font-semibold text-[20px] text-ink">
                  {estimate.weeksMin}–{estimate.weeksMax} weeks
                </span>
              </div>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-royal/10 text-royal font-sans text-[12px] font-medium">
                {estimate.projectTypeLabel}
              </span>
            </div>
          </div>

          <p className="font-sans text-[13px] text-mid-grey leading-relaxed border-t border-light-grey/60 pt-4">
            Includes design, development, testing and launch. Hosting and third-party fees are separate.
          </p>

          {/* Matching cost guide link if visible */}
          {isCostGuideVisible && (
            <div className="p-3.5 rounded-lg bg-ivory border border-light-grey/80 text-[13px] font-sans">
              <span className="text-ink/80 block mb-1">
                Looking for a detailed breakdown?
              </span>
              <Link
                href={`/cost/${estimate.matchingCostGuideSlug}`}
                className="text-royal font-medium hover:underline inline-flex items-center gap-1"
              >
                Read our {estimate.projectTypeLabel.toLowerCase()} cost guide →
              </Link>
            </div>
          )}

          {/* Primary CTA */}
          <div className="pt-2">
            <Link
              href="/book-consultation?from=calculator"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center text-center px-6 py-3.5 bg-royal text-white font-sans font-semibold text-[15px] rounded hover:bg-royal/90 transition-colors shadow-sm"
            >
              Book a 30-minute scoping call
            </Link>
            <p className="font-sans text-[12px] text-mid-grey text-center mt-2.5">
              Free conversation. No commitment, honest scope guidance.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
