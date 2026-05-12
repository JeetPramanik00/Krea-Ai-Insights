"use client";

import { useState, Fragment } from "react";
import CheckIcon from "./CheckIcon";

const TABLE_DATA = [
  {
    group: "Features & License",
    features: [
      { name: "Access to image models", free: "Limited", basic: "Limited", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Access to LoRA Training", free: "Limited", basic: "dash", pro: "Limited", max: "check", business: "check", enterprise: "check" },
      { name: "Access to 3D models", free: "Limited", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Access to lipsync models", free: "Limited", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Commercial license", free: "dash", basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Early access to new features", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Business Terms of Service", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "check", enterprise: "check" },
    ],
  },
  {
    group: "Usage & Compute Units",
    features: [
      { name: "Compute units / mo", free: "200", basic: "5,000", pro: "20,000", max: "80,000", business: "80,000/seat", enterprise: "Custom" },
      { name: "Compute unit rollover", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Image concurrency", free: "1", basic: "4", pro: "8", max: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Video concurrency", free: "dash", basic: "2", pro: "4", max: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Max images per LoRA", free: "50", basic: "50", pro: "50", max: "2,000", business: "10,000", enterprise: "Custom" },
      { name: "Access to Krea Nodes", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Access to App Builder", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Video generation", free: "Limited", basic: "Limited", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Upscale resolution", free: "2K", basic: "4K", pro: "8K", max: "22K", business: "22K", enterprise: "22K" },
    ],
  },
  {
    group: "Teams & Admin",
    features: [
      { name: "Team seats", free: "1", basic: "1", pro: "1", max: "1", business: "Up to 50", enterprise: "Custom" },
      { name: "Custom user roles", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "check", enterprise: "check" },
      { name: "Per-member spend limits", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "Analytics API", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "Audit logs", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "SAML SSO", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "Slack connect", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "Priority support with SLA", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
    ],
  },
];

const FEATURES_GROUPS = ["Features & License", "Usage & Compute Units", "Teams & Admin"];
const MODEL_GROUPS = ["Image Generation", "Video Generation", "Other"];

function CellValue({ value }: { value: string }) {
  if (value === "check") return <CheckIcon />;
  if (value === "dash") return <span className="text-[#333]">—</span>;
  return <span className="text-[#888] text-[12px]">{value}</span>;
}

export default function CompareTable() {
  const [activeFilter, setActiveFilter] = useState<string>("Features & License");
  const [activeModelFilter, setActiveModelFilter] = useState<string>("");

  const visibleGroup = activeFilter || activeModelFilter;
  const displayedData = visibleGroup
    ? TABLE_DATA.filter((g) => g.group === visibleGroup)
    : TABLE_DATA;

  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-white text-2xl font-bold mb-1.5">Compare Plans in Detail</h2>
        <p className="text-[#555] text-[13px]">
          Recognize between features comparing across different plans for your use case.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-44 shrink-0">
          <div className="sticky top-8">
            <p className="text-[#444] text-[10px] uppercase tracking-widest mb-2 font-semibold">Features</p>
            <ul className="space-y-0.5 mb-5">
              {FEATURES_GROUPS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => { setActiveFilter(item); setActiveModelFilter(""); }}
                    className={`text-[12px] py-1 transition-colors text-left w-full flex items-center gap-2 ${
                      activeFilter === item ? "text-white" : "text-[#555] hover:text-[#888]"
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full shrink-0 ${activeFilter === item ? "bg-[#4f6ef7]" : "bg-[#333]"}`} />
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <p className="text-[#444] text-[10px] uppercase tracking-widest mb-2 font-semibold">Models</p>
            <ul className="space-y-0.5">
              {MODEL_GROUPS.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => { setActiveModelFilter(item); setActiveFilter(""); }}
                    className={`text-[12px] py-1 transition-colors text-left w-full flex items-center gap-2 ${
                      activeModelFilter === item ? "text-white" : "text-[#555] hover:text-[#888]"
                    }`}
                  >
                    <span className={`w-1 h-1 rounded-full shrink-0 ${activeModelFilter === item ? "bg-[#4f6ef7]" : "bg-[#333]"}`} />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[620px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left py-3 px-3 text-[#555] text-[10px] uppercase tracking-wider font-medium w-1/4">Feature</th>
                  <th className="py-3 px-3 text-[#555] text-[10px] uppercase tracking-wider font-medium">Free</th>
                  <th className="py-3 px-3 text-[#555] text-[10px] uppercase tracking-wider font-medium">Basic</th>
                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-medium text-white bg-[#4f6ef7] rounded-t-md">Pro</th>
                  <th className="py-3 px-3 text-[#555] text-[10px] uppercase tracking-wider font-medium">Max</th>
                  <th className="py-3 px-3 text-[#555] text-[10px] uppercase tracking-wider font-medium">Business</th>
                  <th className="py-3 px-3 text-[#555] text-[10px] uppercase tracking-wider font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {displayedData.map((group) => (
                  <Fragment key={group.group}>
                    <tr>
                      <td colSpan={7} className="text-[#444] text-[10px] uppercase tracking-widest py-3 px-3 pt-6 font-semibold bg-[#0a0a0a]">
                        {group.group}
                      </td>
                    </tr>
                    {group.features.map((row, rowIdx) => (
                      <tr
                        key={row.name}
                        className={`border-b border-[#111] ${rowIdx % 2 === 0 ? "bg-[#0e0e0e]" : "bg-[#0a0a0a]"}`}
                      >
                        <td className="py-2.5 px-3 text-[#777] text-[12px]">{row.name}</td>
                        <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.free} /></div></td>
                        <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.basic} /></div></td>
                        <td className="py-2.5 px-3 text-center bg-[#4f6ef7]/8"><div className="flex justify-center"><CellValue value={row.pro} /></div></td>
                        <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.max} /></div></td>
                        <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.business} /></div></td>
                        <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.enterprise} /></div></td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
