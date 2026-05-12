import React, { useState } from "react";
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
    ]
  },
  {
    group: "Usage & Compute Units",
    features: [
      { name: "Image concurrency", free: "1", basic: "4", pro: "8", max: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Video concurrency", free: "dash", basic: "2", pro: "4", max: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
      { name: "Max images per LoRA", free: "50", basic: "50", pro: "50", max: "2000", business: "2000", enterprise: "Custom" },
      { name: "Compute units/mo", free: "200", basic: "5,000", pro: "20,000", max: "80,000", business: "80,000/seat", enterprise: "Custom" },
      { name: "Compute unit rollover", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
    ]
  },
  {
    group: "Tools & Features",
    features: [
      { name: "Access to Krea Nodes", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Access to App Builder", free: "dash", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Video generation", free: "Limited", basic: "Limited", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "3D model generation", free: "Limited", basic: "dash", pro: "check", max: "check", business: "check", enterprise: "check" },
      { name: "Upscale resolution", free: "2K", basic: "4K", pro: "8K", max: "22K", business: "22K", enterprise: "22K" },
    ]
  },
  {
    group: "Teams & Admin",
    features: [
      { name: "Team seats", free: "1", basic: "1", pro: "1", max: "1", business: "Up to 50", enterprise: "Custom" },
      { name: "Custom user roles", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "check", enterprise: "check" },
      { name: "Analytics API", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "Audit logs", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "SAML SSO", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "Slack connect", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
      { name: "SLA support", free: "dash", basic: "dash", pro: "dash", max: "dash", business: "dash", enterprise: "check" },
    ]
  }
];

function CellValue({ value }: { value: string }) {
  if (value === "check") return <CheckIcon />;
  if (value === "dash") return <span className="text-[#444444]">—</span>;
  return <span className="text-[#cccccc] text-sm">{value}</span>;
}

export default function CompareTable() {
  const [activeFilter, setActiveFilter] = useState("Features & License");
  const [activeModelFilter, setActiveModelFilter] = useState("");

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-white text-3xl font-bold mb-2">Compare Plans in Detail</h2>
        <p className="text-[#888888] text-sm">
          Recognize between features comparing across different plans for your use case.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar Filter */}
        <div className="w-full lg:w-48 shrink-0">
          <div className="sticky top-8">
            <h4 className="text-[#666666] text-xs uppercase tracking-widest mb-2 font-medium">Features</h4>
            <ul className="space-y-1 mb-6">
              {["Features & License", "Usage & Compute Units", "Teams & Admin"].map(item => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setActiveFilter(item);
                      setActiveModelFilter("");
                    }}
                    className={`text-sm py-1 transition-colors text-left w-full ${
                      activeFilter === item ? "text-white font-medium" : "text-[#666666] hover:text-[#cccccc]"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <h4 className="text-[#666666] text-xs uppercase tracking-widest mb-2 mt-4 font-medium">Models</h4>
            <ul className="space-y-1">
              {["Image Generation", "Video Generation", "Other"].map(item => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setActiveModelFilter(item);
                      setActiveFilter("");
                    }}
                    className={`text-sm py-1 transition-colors text-left w-full ${
                      activeModelFilter === item ? "text-white font-medium" : "text-[#666666] hover:text-[#cccccc]"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Table */}
        <div className="flex-1 overflow-x-auto pb-4">
          <div className="min-w-[700px]">
            <table className="w-full border-collapse">
              <thead className="sticky top-0 bg-[#0a0a0a] z-10">
                <tr>
                  <th className="text-left py-4 px-4 font-medium text-[#888888] text-xs uppercase tracking-wider w-1/4">Feature</th>
                  <th className="py-4 px-4 font-medium text-[#888888] text-xs uppercase tracking-wider">Free</th>
                  <th className="py-4 px-4 font-medium text-[#888888] text-xs uppercase tracking-wider">Basic</th>
                  <th className="py-4 px-4 font-medium text-white text-xs uppercase tracking-wider bg-[#4f6ef7] rounded-t-lg">Pro</th>
                  <th className="py-4 px-4 font-medium text-[#888888] text-xs uppercase tracking-wider">Max</th>
                  <th className="py-4 px-4 font-medium text-[#888888] text-xs uppercase tracking-wider">Business</th>
                  <th className="py-4 px-4 font-medium text-[#888888] text-xs uppercase tracking-wider">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {TABLE_DATA.map((group, groupIdx) => (
                  <React.Fragment key={group.group}>
                    <tr>
                      <td colSpan={7} className="text-[#666666] text-xs uppercase tracking-widest py-3 px-4 bg-[#0a0a0a] font-medium mt-4 pt-8">
                        {group.group}
                      </td>
                    </tr>
                    {group.features.map((row, rowIdx) => (
                      <tr key={row.name} className={`${rowIdx % 2 === 0 ? "bg-[#111111]" : "bg-[#0f0f0f]"}`}>
                        <td className="py-3 px-4 text-[#cccccc] text-sm border-r border-[#1f1f1f]">{row.name}</td>
                        <td className="py-3 px-4 text-center border-r border-[#1f1f1f]"><div className="flex justify-center"><CellValue value={row.free} /></div></td>
                        <td className="py-3 px-4 text-center border-r border-[#1f1f1f]"><div className="flex justify-center"><CellValue value={row.basic} /></div></td>
                        <td className="py-3 px-4 text-center border-r border-[#1f1f1f] bg-[#4f6ef7]/10"><div className="flex justify-center"><CellValue value={row.pro} /></div></td>
                        <td className="py-3 px-4 text-center border-r border-[#1f1f1f]"><div className="flex justify-center"><CellValue value={row.max} /></div></td>
                        <td className="py-3 px-4 text-center border-r border-[#1f1f1f]"><div className="flex justify-center"><CellValue value={row.business} /></div></td>
                        <td className="py-3 px-4 text-center"><div className="flex justify-center"><CellValue value={row.enterprise} /></div></td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
