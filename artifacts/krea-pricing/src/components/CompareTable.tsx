"use client";

import { useState } from "react";
import CheckIcon from "./CheckIcon";

// Flat table rows matching the reference screenshot exactly
const ALL_ROWS = [
  { name: "Access to image models",      free: "Limited", basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to video models",      free: "Limited", basic: "Limited", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to LoRA Training",     free: "Limited", basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to real-time models",  free: "Limited", basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to 3D models",         free: "Limited", basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to lipsync models",    free: "Limited", basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Image concurrency",           free: "1",       basic: "4",     pro: "8",     max: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
  { name: "Video concurrency",           free: "cross",   basic: "2",     pro: "4",     max: "Unlimited", business: "Unlimited", enterprise: "Unlimited" },
  { name: "Max images per LoRA",         free: "50",      basic: "50",    pro: "50",    max: "2000",    business: "2000",    enterprise: "Custom" },
  { name: "Access to Krea Nodes",        free: "cross",   basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to App Builder",       free: "cross",   basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Access to Nodes Agent", new: true, free: "cross", basic: "cross", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Early access to new features", free: "cross",  basic: "cross", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Commercial license",          free: "cross",   basic: "check", pro: "check", max: "check", business: "check", enterprise: "check" },
  { name: "Business Terms of Service",   free: "cross",   basic: "cross", pro: "cross", max: "cross", business: "check", enterprise: "check" },
  { name: "Indemnification",             free: "cross",   basic: "cross", pro: "cross", max: "cross", business: "cross", enterprise: "check" },
];

const SIDEBAR = {
  features: [
    { label: "Features & License", icon: "features" },
    { label: "Usage & Compute Units", icon: "usage" },
    { label: "Teams & Admin", icon: "teams" },
  ],
  models: [
    { label: "Image Generation", icon: "image" },
    { label: "Video Generation", icon: "video" },
    { label: "Other", icon: "other" },
  ],
};

function SidebarIcon({ type }: { type: string }) {
  const cls = "w-3.5 h-3.5 shrink-0 text-[#555]";
  if (type === "features") return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  );
  if (type === "usage") return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M7 4v3l2 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
  if (type === "teams") return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M1 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="10" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M12 10c0-1.1-.9-2-2-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
  if (type === "image") return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="2" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="4.5" cy="5.5" r="1" stroke="currentColor" strokeWidth="1"/>
      <path d="M1 10l3-3 2 2 3-4 4 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  if (type === "video") return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <rect x="1" y="3" width="9" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M10 5.5l3-2v7l-3-2V5.5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
  return (
    <svg className={cls} viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M7 5v4M5 7h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

function Cross() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 3l6 6M9 3l-6 6" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CellValue({ value }: { value: string }) {
  if (value === "check") return <CheckIcon />;
  if (value === "cross") return <Cross />;
  return <span className="text-[#777] text-[12px]">{value}</span>;
}

export default function CompareTable() {
  const [activeNav, setActiveNav] = useState("Features & License");

  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-white text-[26px] font-bold mb-1.5">Compare Plans in Detail</h2>
        <p className="text-[#555] text-[13px] max-w-lg mx-auto">
          Navigate between feature categories to see detailed comparisons across different areas of our platform.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full lg:w-52 shrink-0">
          <p className="text-[#444] text-[10px] uppercase tracking-widest mb-2 font-semibold">Features</p>
          <ul className="space-y-px mb-5">
            {SIDEBAR.features.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[12px] text-left transition-colors ${
                    activeNav === item.label
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[#555] hover:text-[#888]"
                  }`}
                >
                  <SidebarIcon type={item.icon} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <p className="text-[#444] text-[10px] uppercase tracking-widest mb-2 font-semibold">Models</p>
          <ul className="space-y-px">
            {SIDEBAR.models.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => setActiveNav(item.label)}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[12px] text-left transition-colors ${
                    activeNav === item.label
                      ? "bg-[#1a1a1a] text-white"
                      : "text-[#555] hover:text-[#888]"
                  }`}
                >
                  <SidebarIcon type={item.icon} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[640px]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  <th className="text-left py-3 px-3 text-[#444] text-[10px] uppercase tracking-wider font-semibold w-[36%]">
                    Features
                  </th>

                  {/* FREE column with CURRENT badge */}
                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#444] relative">
                    <div className="flex flex-col items-center gap-1">
                      <span className="bg-[#4f6ef7] text-white text-[8px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-bold leading-none">
                        Current
                      </span>
                      <span>Free</span>
                    </div>
                  </th>

                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#444]">Basic</th>
                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#444]">Pro</th>
                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#444]">Max</th>
                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#444]">Business</th>
                  <th className="py-3 px-3 text-[10px] uppercase tracking-wider font-semibold text-[#444]">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {ALL_ROWS.map((row, idx) => (
                  <tr
                    key={row.name}
                    className={`border-b border-[#0f0f0f] ${idx % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#0c0c0c]"}`}
                  >
                    <td className="py-2.5 px-3 text-[#888] text-[12px]">
                      {row.name}
                      {row.new && (
                        <span className="ml-2 bg-[#0d1f33] text-[#4f9ef7] text-[9px] px-1.5 py-0.5 rounded font-semibold tracking-wide uppercase align-middle">
                          NEW
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.free} /></div></td>
                    <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.basic} /></div></td>
                    <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.pro} /></div></td>
                    <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.max} /></div></td>
                    <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.business} /></div></td>
                    <td className="py-2.5 px-3 text-center"><div className="flex justify-center"><CellValue value={row.enterprise} /></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
