"use client";

interface HeroProps {
  billingPeriod: "Monthly" | "Yearly";
  setBillingPeriod: (period: "Monthly" | "Yearly") => void;
}

export default function Hero({ billingPeriod, setBillingPeriod }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#1f1f1f]">
      <div
        className="absolute inset-y-0 right-0 w-[60%] bg-cover bg-right-top bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-8 pt-10 pb-10 flex items-start justify-between gap-8">
        <div className="max-w-[480px]">
          <p className="text-[#555555] text-[11px] font-semibold tracking-widest uppercase mb-3">
            Why choose Krea
          </p>
          <p className="text-[#777777] text-[13px] leading-relaxed">
            Krea is the world's best creative AI studio. With industry leading generation
            speeds, over 150 models including Nano Banana, Topaz, Magnific, Swarmlore, and
            a community of over 10 million users. Krea is the best platform to create with AI.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2.5 shrink-0 pt-1">
          <span className="bg-[#4f6ef7]/10 text-[#4f6ef7] text-[11px] px-2.5 py-1 rounded-full font-medium border border-[#4f6ef7]/20 whitespace-nowrap">
            Save 20% on yearly plans
          </span>
          <div className="flex bg-[#161616] border border-[#2a2a2a] rounded-full p-0.5">
            <button
              onClick={() => setBillingPeriod("Monthly")}
              data-testid="toggle-monthly"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "Monthly"
                  ? "bg-white text-black"
                  : "text-[#777777] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("Yearly")}
              data-testid="toggle-yearly"
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                billingPeriod === "Yearly"
                  ? "bg-white text-black"
                  : "text-[#777777] hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so the warrior image has room to show */}
      <div className="relative z-0 h-40 md:h-52" />
    </section>
  );
}
