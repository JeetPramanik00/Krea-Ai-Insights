"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import IndividualPlans from "@/components/IndividualPlans";
import TeamPlans from "@/components/TeamPlans";
import ComputePacks from "@/components/ComputePacks";
import CompareTable from "@/components/CompareTable";
import FAQAccordion from "@/components/FAQAccordion";
import BottomCTA from "@/components/BottomCTA";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"Monthly" | "Yearly">("Monthly");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-[#4f6ef7] selection:text-white">
      <Hero />

      <div className="max-w-[1200px] mx-auto px-8 py-10 space-y-16">
        <IndividualPlans billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
        <TeamPlans billingPeriod={billingPeriod} />
        <ComputePacks />
        <CompareTable />
        <FAQAccordion />
        <BottomCTA />
      </div>
    </div>
  );
}
