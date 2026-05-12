"use client";

interface HeroProps {
  billingPeriod: "Monthly" | "Yearly";
  setBillingPeriod: (period: "Monthly" | "Yearly") => void;
}

export default function Hero({ billingPeriod, setBillingPeriod }: HeroProps) {
  return (
    <section className="relative w-full min-h-[280px] overflow-hidden border-b border-[#1f1f1f]">
      <div
        className="absolute inset-y-0 right-0 w-[65%] bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-8 py-12 flex items-start justify-between gap-8">
        <div className="max-w-[520px]">
          <p className="text-[#555555] text-[11px] font-semibold tracking-widest uppercase mb-3">
            Why choose Krea
          </p>
          <p className="text-[#888888] text-sm leading-relaxed">
            Krea is the world's best creative AI studio. With industry leading generation
            speeds, over 150 models including Nano Banana, Topaz, Magnific, Swarmlore, and
            a community of over 10 million users. Krea is the best platform to create with AI.
          </p>
        </div>

        <div className="flex flex-col items-end gap-3 shrink-0">
          <span className="bg-[#4f6ef7]/10 text-[#4f6ef7] text-xs px-3 py-1 rounded-full font-medium border border-[#4f6ef7]/20 whitespace-nowrap">
            Save 20% on yearly plans
          </span>
          <div className="flex bg-[#1a1a1a] border border-[#222222] rounded-full p-1">
            <button
              onClick={() => setBillingPeriod("Monthly")}
              data-testid="toggle-monthly"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "Monthly"
                  ? "bg-white text-black"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("Yearly")}
              data-testid="toggle-yearly"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "Yearly"
                  ? "bg-white text-black"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
