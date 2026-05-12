"use client";


interface HeroProps {
  billingPeriod: "Monthly" | "Yearly";
  setBillingPeriod: (period: "Monthly" | "Yearly") => void;
}

export default function Hero({ billingPeriod, setBillingPeriod }: HeroProps) {
  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-between overflow-hidden border-b border-[#1f1f1f]">
      {/* Background Image on the right half */}
      <div 
        className="absolute inset-y-0 right-0 w-[60%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Gradient overlay to blend left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-8 py-16 flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="max-w-xl">
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
            Why choose Krea
          </p>
          <h1 className="text-white text-4xl md:text-[2.5rem] font-bold leading-tight mb-4">
            The world's best creative AI studio
          </h1>
          <p className="text-[#888888] text-base leading-relaxed">
            Join over 10 million users creating with our cutting-edge AI models. <br />
            Access 150+ models, fast generations, and unmatched control.
          </p>
        </div>

        <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end gap-3">
          <span className="bg-[#4f6ef7]/10 text-[#4f6ef7] text-xs px-3 py-1 rounded-full font-medium border border-[#4f6ef7]/20">
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
