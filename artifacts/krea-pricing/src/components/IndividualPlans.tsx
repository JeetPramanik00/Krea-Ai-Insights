import CheckIcon from "./CheckIcon";

interface IndividualPlansProps {
  billingPeriod: "Monthly" | "Yearly";
}

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

export default function IndividualPlans({ billingPeriod }: IndividualPlansProps) {
  const isYearly = billingPeriod === "Yearly";

  return (
    <section>
      <h2 className="text-white text-xl font-medium mb-6">For Individual Creators</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-[18px] font-semibold text-white">Basic</h3>
          <p className="text-[#666666] text-[12px] mt-1 mb-4">
            Access to our popular AI generation features
          </p>

          <PriceDisplay monthly={9} yearly={6} isYearly={isYearly} />

          <button
            data-testid="btn-get-basic"
            className="border border-[#333] hover:border-[#555] text-white py-2.5 rounded-lg w-full font-medium transition-colors"
          >
            Get Basic →
          </button>
          <p className="text-[#666666] text-[13px] text-center mt-2">5,000 compute units</p>

          <div className="border-t border-[#222222] my-5" />

          <ul className="space-y-2.5 flex-1">
            {[
              "Commercial license",
              "Full access to Image, 3D, and Lipsync models",
              "LoRA fine-tuning with up to 50 images",
              "Upscale & enhance to 4K",
              "Access to selected video models",
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

        {/* Pro Plan */}
        <div
          className="bg-[#141414] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col relative"
          style={{
            borderTop: "2.5px solid #4f6ef7",
            boxShadow:
              "0 0 0 1px rgba(79,110,247,0.2), 0 12px 40px rgba(79,110,247,0.1)",
          }}
        >
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="bg-[#4f6ef7] text-white text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap">
              Most popular
            </span>
          </div>

          <h3 className="text-[18px] font-semibold text-white mt-2">Pro</h3>
          <p className="text-[#666666] text-[12px] mt-1 mb-4">
            Everything you need for professional AI creation
          </p>

          <PriceDisplay monthly={35} yearly={25} isYearly={isYearly} />

          <button
            data-testid="btn-get-pro"
            className="w-full bg-[#4f6ef7] hover:bg-[#3d5ce6] text-white py-2.5 rounded-lg font-medium transition-colors"
          >
            Get Pro →
          </button>
          <p className="text-[#666666] text-[13px] text-center mt-2">20,000 compute units</p>

          <div className="border-t border-[#222222] my-5" />

          <ul className="space-y-2.5 flex-1">
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Everything in Basic plan</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Access to all video models</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Workflow automation with Nodes and Apps</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>
                AI-powered Nodes Agent
                <span className="ml-2 bg-[#4f6ef7] text-white text-[10px] px-1.5 py-0.5 rounded-full align-middle">
                  new
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Bulk discounts on compute unit packs</span>
            </li>
            <li className="flex items-start gap-2 text-[#cccccc] text-[13px]">
              <CheckIcon />
              <span>Upscale & enhance to 8K</span>
            </li>
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-5 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Max Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-[18px] font-semibold text-white">Max</h3>
          <p className="text-[#666666] text-[12px] mt-1 mb-4">
            Maximum power for the most demanding creators
          </p>

          <PriceDisplay monthly={105} yearly={74} isYearly={isYearly} />

          <button
            data-testid="btn-get-max"
            className="border border-[#333] hover:border-[#555] text-white py-2.5 rounded-lg w-full font-medium transition-colors"
          >
            Get Max →
          </button>
          <p className="text-[#666666] text-[13px] text-center mt-2">80,000 compute units</p>

          <div className="border-t border-[#222222] my-5" />

          <ul className="space-y-2.5 flex-1">
            {[
              "Everything in Pro plan",
              "Unlimited Luna fine-tunings with 2,000 files",
              "Unlimited Concurrency",
              "Unlimited relaxed generations",
              "Upscale & enhance to 22K",
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
      </div>
    </section>
  );
}
