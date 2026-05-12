"use client";

import { useState } from "react";
import CheckIcon from "./CheckIcon";
import Badge from "./Badge";

interface TeamPlansProps {
  billingPeriod: "Monthly" | "Yearly";
}

const SEATS = ["1", "5", "10", "MX", "25", "50", "100", "1K"];

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
          <h3 className="text-xl font-bold text-white">Business</h3>
          <p className="text-[#666666] text-sm mt-1 mb-6">
            Collaborative workspace for growing teams
          </p>
          
          <div className="mb-4 flex flex-wrap gap-2">
            {SEATS.map(seat => (
              <button
                key={seat}
                onClick={() => setSelectedSeat(seat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedSeat === seat
                    ? "bg-[#222222] text-white"
                    : "text-[#666666] hover:text-white"
                }`}
              >
                {seat}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-white">${isYearly ? "160" : "200"}</span>
            <span className="text-[#666666] text-sm">/mo</span>
          </div>

          <button data-testid="btn-get-business" className="border border-[#333333] text-white hover:border-white rounded-lg w-full py-2.5 transition-colors font-medium">
            To Business →
          </button>
          <p className="text-[#666666] text-sm text-center mt-2">
            80,000 compute units per seat
          </p>

          <div className="border-t border-[#222222] my-6"></div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-3 text-white text-sm font-medium">
              <CheckIcon />
              <span>Everything in Pro plan</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Business Terms of Service</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Up to 50 team seats</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Share private Node Apps with your team</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Train LoRAs with up to 10,000 images</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Unlimited relaxed generations</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Custom user roles and permissions</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Fine-grained controls for model access</span>
            </li>
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-6 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white">Enterprise</h3>
          <p className="text-[#666666] text-sm mt-1 mb-6">
            Priority and enterprise support, access to Krea's advanced services
          </p>
          
          <div className="mb-6 flex-1">
            <span className="text-4xl font-bold text-white">Custom pricing</span>
          </div>

          <button data-testid="btn-contact-sales" className="border border-[#333333] text-white hover:border-white rounded-lg w-full py-2.5 transition-colors font-medium">
            Contact Sales →
          </button>

          <div className="border-t border-[#222222] my-6"></div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-3 text-white text-sm font-medium">
              <CheckIcon />
              <span>Everything in Business plan</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Custom Terms of Service</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Priority support with SLA</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Analytics API</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Per-member spend limits</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Slack connect</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Custom compute packages</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Unlimited relaxed generations</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Audit logs <Badge>New</Badge></span>
            </li>
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-6 text-left transition-colors">
            See all features →
          </button>
        </div>
      </div>
    </section>
  );
}
