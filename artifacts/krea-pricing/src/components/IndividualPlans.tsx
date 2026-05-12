"use client";

import CheckIcon from "./CheckIcon";

interface IndividualPlansProps {
  billingPeriod: "Monthly" | "Yearly";
  setBillingPeriod: (period: "Monthly" | "Yearly") => void;
}

const YEARLY_BILLED: Record<string, number> = {
  basic: 74,
  pro: 294,
  max: 882,
};

function PriceDisplay({
  plan,
  monthly,
  yearly,
  isYearly,
}: {
  plan: string;
  monthly: number;
  yearly: number;
  isYearly: boolean;
}) {
  if (isYearly) {
    return (
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-[#555] text-[18px] line-through leading-none">${monthly}</span>
          <span className="text-white text-[32px] font-bold leading-none">${yearly}</span>
          <span className="text-[#555] text-[13px]">/mo</span>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <span className="text-[#555] text-[12px]">${YEARLY_BILLED[plan]} billed yearly</span>
          <span className="bg-[#4f6ef7] text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
            saving 30%
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-baseline gap-1 mb-4">
      <span className="text-white text-[32px] font-bold leading-none">${monthly}</span>
      <span className="text-[#555] text-[13px]">/mo</span>
    </div>
  );
}

function InheritedFeature({ label }: { label: string }) {
  return (
    <li className="flex items-center gap-2 text-[#444] text-[12px] mb-1">
      <span className="text-[#333] text-sm shrink-0">↺</span>
      <span>{label}</span>
    </li>
  );
}

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[#888] text-[12px]">
      <CheckIcon />
      <span>{children}</span>
    </li>
  );
}

export default function IndividualPlans({ billingPeriod, setBillingPeriod }: IndividualPlansProps) {
  const isYearly = billingPeriod === "Yearly";

  return (
    <section>
      {/* Toggle row — top right */}
      <div className="flex justify-end mb-6">
        <div className="flex items-center gap-3">
          <span className={`text-[13px] font-medium transition-colors ${!isYearly ? "text-white" : "text-[#555]"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingPeriod(isYearly ? "Monthly" : "Yearly")}
            aria-label="Toggle billing period"
            className="relative w-10 h-5 rounded-full bg-[#333] transition-colors shrink-0"
          >
            <div
              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                isYearly ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
          <span className={`text-[13px] font-medium transition-colors ${isYearly ? "text-white" : "text-[#555]"}`}>
            Yearly
          </span>
          <span className="bg-[#4f6ef7] text-white text-[11px] px-2.5 py-1 rounded-full font-medium whitespace-nowrap">
            Save 30% on yearly plans
          </span>
        </div>
      </div>

      {/* 4-column grid: title | basic | pro | max */}
      <div className="grid grid-cols-[200px_1fr_1fr_1fr] gap-4 items-start">

        {/* Section title — left column */}
        <div className="pt-6 pr-2">
          <h2 className="text-white text-[28px] font-bold leading-tight">
            For Individual<br />Creators
          </h2>
        </div>

        {/* Basic Card */}
        <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col">
          <h3 className="text-[16px] font-semibold text-white mb-1">Basic</h3>
          <p className="text-[#555] text-[12px] mb-4 leading-snug">
            Access our most popular features for daily generations.
          </p>

          <PriceDisplay plan="basic" monthly={9} yearly={6} isYearly={isYearly} />

          <button
            data-testid="btn-get-basic"
            className="w-full bg-white hover:bg-[#e8e8e8] text-black py-2.5 rounded-xl font-medium text-[13px] transition-colors mb-2"
          >
            Get Basic →
          </button>
          <div className="text-center mb-4">
            <p className="text-white text-[13px] font-medium">5,000 compute units</p>
            <p className="text-[#444] text-[11px]">per month</p>
          </div>

          <div className="border-t border-[#1a1a1a] mb-4" />

          <ul className="space-y-2 flex-1">
            <Feature>Commercial license</Feature>
            <Feature>Full access to Image, 3D, and Lipsync models</Feature>
            <Feature>LoRA fine-tuning with up to 50 images</Feature>
            <Feature>Upscale &amp; enhance to 4K</Feature>
            <Feature>Access to selected video models</Feature>
          </ul>

          <button className="text-[#333] hover:text-[#666] text-[12px] mt-4 text-left transition-colors flex items-center gap-1">
            <span className="text-[#2a2a2a]">↓</span> See all features...
          </button>
        </div>

        {/* Pro Card */}
        <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col">
          {/* Most popular badge — inside card */}
          <div className="mb-2">
            <span className="inline-flex items-center gap-1 bg-[#4f6ef7] text-white text-[11px] px-2.5 py-0.5 rounded-full font-medium">
              <span className="text-[9px]">⬆</span> Most popular
            </span>
          </div>

          <h3 className="text-[16px] font-semibold text-white mb-1">Pro</h3>
          <p className="text-[#555] text-[12px] mb-4 leading-snug">
            Full access to the world's best models &amp; all our industry-leading tools.
          </p>

          <PriceDisplay plan="pro" monthly={35} yearly={25} isYearly={isYearly} />

          <button
            data-testid="btn-get-pro"
            className="w-full bg-white hover:bg-[#e8e8e8] text-black py-2.5 rounded-xl font-medium text-[13px] transition-colors mb-2"
          >
            Get Pro →
          </button>
          <div className="text-center mb-4">
            <p className="text-white text-[13px] font-medium">20,000 compute units</p>
            <p className="text-[#444] text-[11px]">per month</p>
          </div>

          <div className="border-t border-[#1a1a1a] mb-4" />

          <ul className="space-y-2 flex-1">
            <InheritedFeature label="Everything in Basic plus" />
            <Feature>Access to all video models</Feature>
            <Feature>Workflow automation with Nodes and Apps</Feature>
            <Feature>
              AI-powered Nodes Agent{" "}
              <span className="ml-1 bg-[#1a2a4a] text-[#4f9ef7] text-[9px] px-1.5 py-0.5 rounded font-semibold tracking-wide uppercase align-middle">
                NEW
              </span>
            </Feature>
            <Feature>Bulk discounts on compute unit packs</Feature>
            <Feature>Upscale &amp; enhance to 8K</Feature>
          </ul>

          <button className="text-[#333] hover:text-[#666] text-[12px] mt-4 text-left transition-colors flex items-center gap-1">
            <span className="text-[#2a2a2a]">↓</span> See all features...
          </button>
        </div>

        {/* Max Card */}
        <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col">
          <h3 className="text-[16px] font-semibold text-white mb-1">Max</h3>
          <p className="text-[#555] text-[12px] mb-4 leading-snug">
            Maximum power for serious creators with unlimited concurrency, relaxed generations, and premium upscaling.
          </p>

          <PriceDisplay plan="max" monthly={105} yearly={74} isYearly={isYearly} />

          <button
            data-testid="btn-get-max"
            className="w-full bg-white hover:bg-[#e8e8e8] text-black py-2.5 rounded-xl font-medium text-[13px] transition-colors mb-2"
          >
            Get Max →
          </button>
          <div className="text-center mb-3">
            <p className="text-white text-[13px] font-medium">60,000 compute units</p>
          </div>

          {/* Compute units slider track */}
          <div className="mb-4">
            <div className="relative h-1.5 bg-[#1a1a1a] rounded-full mb-1">
              <div className="absolute left-0 top-0 h-full w-[45%] bg-white rounded-full" />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full border-2 border-[#0a0a0a] shadow"
                style={{ left: "calc(45% - 7px)" }}
              />
            </div>
            <div className="flex justify-between text-[#444] text-[10px] px-0.5">
              <span>40k</span>
              <span className="text-white font-medium">60k</span>
              <span>80k</span>
              <span>100k</span>
            </div>
          </div>

          <div className="border-t border-[#1a1a1a] mb-4" />

          <ul className="space-y-2 flex-1">
            <InheritedFeature label="Everything in Pro plus" />
            <Feature>Unlimited Lora fine-tunings with 2,000 files</Feature>
            <Feature>Unlimited Concurrency</Feature>
            <Feature>Unlimited relaxed generations</Feature>
            <Feature>Upscale &amp; enhance to 22K</Feature>
          </ul>

          <button className="text-[#333] hover:text-[#666] text-[12px] mt-4 text-left transition-colors flex items-center gap-1">
            <span className="text-[#2a2a2a]">↓</span> See all features...
          </button>
        </div>
      </div>
    </section>
  );
}
