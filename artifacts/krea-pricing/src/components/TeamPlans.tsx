"use client";

import { useState } from "react";
import CheckIcon from "./CheckIcon";

interface TeamPlansProps {
  billingPeriod: "Monthly" | "Yearly";
}

const SEATS = ["1", "5", "10", "MX", "25", "50", "100", "1K"];

function PriceDisplay({
  monthly,
  yearly,
  isYearly,
}: {
  monthly: number;
  yearly: number;
  isYearly: boolean;
}) {
  if (isYearly) {
    return (
      <div className="flex flex-col mb-6">
        <span className="text-[#555555] text-2xl line-through">${monthly}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-white text-5xl font-bold">${yearly}</span>
          <span className="text-[#888888] text-sm">/mo</span>
        </div>
        <span className="text-xs bg-[#22c55e]/20 text-[#22c55e] px-2 py-0.5 rounded-full w-fit mt-1.5">
          saving 20%
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-white text-5xl font-bold">${monthly}</span>
      <span className="text-[#888888] text-sm">/mo</span>
    </div>
  );
}

export default function TeamPlans({ billingPeriod }: TeamPlansProps) {
  const [selectedSeat, setSelectedSeat] = useState("1");
  const isYearly = billingPeriod === "Yearly";

  return (
    <section>
      <h2 className="text-white text-xl font-medium mb-1">For Teams and Enterprises</h2>
      <p className="text-[#888888] text-sm mb-8">
        Workplace management, collaboration, and enterprise customizations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-[18px] font-semibold text-white">Business</h3>
          <p className="text-[#666666] text-[12px] mt-1 mb-3">
            Collaborative workspace for growing teams
          </p>

          <div className="flex flex-wrap gap-1 mb-4">
            {SEATS.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSeat(s)}
                className={`px-2 py-1 text-xs rounded border transition-colors ${
                  selectedSeat === s
                    ? "border-[#4f6ef7] text-white bg-[#4f6ef7]/10"
                    : "border-[#222] text-[#666666] hover:border-[#444]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <PriceDisplay monthly={200} yearly={160} isYearly={isYearly} />

          <button
            data-testid="btn-get-business"
            className="border border-[#333] hover:border-[#555] text-white py-2.5 rounded-lg w-full font-medium transition-colors"
          >
            To Business →
          </button>
          <p className="text-[#666666] text-[13px] text-center mt-2">80,000 compute units per seat</p>

          <div className="border-t border-[#222222] my-5" />

          <ul className="space-y-2.5 flex-1">
            {[
              "Everything in Pro plan",
              "Business Terms of Service",
              "Up to 50 team seats",
              "Share private Node Apps with your team",
              "Train LoRAs with up to 10,000 images",
              "Unlimited relaxed generations",
              "Custom user roles and permissions",
              "Fine-grained controls for model access",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#cccccc] text-[13px]">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-5 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-[18px] font-semibold text-white">Enterprise</h3>
          <p className="text-[#666666] text-[12px] mt-1 mb-6">
            Priority and enterprise support, access to Krea's advanced services
          </p>

          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-white text-4xl font-bold">Custom pricing</span>
          </div>

          <button
            data-testid="btn-contact-sales"
            className="border border-[#333] hover:border-[#555] text-white py-2.5 rounded-lg w-full font-medium transition-colors"
          >
            Contact Sales →
          </button>

          <div className="border-t border-[#222222] my-5" />

          <ul className="space-y-2.5 flex-1">
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Everything in Business plan</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Custom Terms of Service</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Priority support with SLA</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Analytics API</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Per-member spend limits</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Slack connect</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Custom compute packages</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Unlimited relaxed generations</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>
                Audit logs
                <span className="ml-2 bg-[#4f6ef7] text-white text-[10px] px-1.5 py-0.5 rounded-full align-middle">
                  new
                </span>
              </span>
            </li>
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-5 text-left transition-colors">
            See all features →
          </button>
        </div>
      </div>
    </section>
  );
}
