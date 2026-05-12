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
      <div className="flex flex-col mb-5">
        <span className="text-[#444] text-xl line-through leading-none mb-0.5">${monthly}</span>
        <div className="flex items-baseline gap-1">
          <span className="text-white text-[46px] font-bold leading-none">${yearly}</span>
          <span className="text-[#555] text-[13px]">/mo</span>
        </div>
        <span className="text-[11px] bg-[#22c55e]/15 text-[#22c55e] px-2 py-0.5 rounded-full w-fit mt-2">
          saving 20%
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-baseline gap-1 mb-5">
      <span className="text-white text-[46px] font-bold leading-none">${monthly}</span>
      <span className="text-[#555] text-[13px]">/mo</span>
    </div>
  );
}

export default function IndividualPlans({ billingPeriod }: IndividualPlansProps) {
  const isYearly = billingPeriod === "Yearly";

  return (
    <section>
      <h2 className="text-white text-[15px] font-medium mb-5">For Individual Creators</h2>

      {/* pt-4 to give room for the Pro card's floating "Most popular" badge */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch pt-4">

        {/* Basic Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col">
          <h3 className="text-[15px] font-semibold text-white">Basic</h3>
          <p className="text-[#555] text-[12px] mt-0.5 mb-4">
            Access to our popular AI generation features
          </p>

          <PriceDisplay monthly={9} yearly={6} isYearly={isYearly} />

          <button
            data-testid="btn-get-basic"
            className="border border-[#2a2a2a] hover:border-[#444] text-white py-2 rounded-lg w-full font-medium text-[13px] transition-colors bg-[#161616]"
          >
            Get Basic →
          </button>
          <p className="text-[#444] text-[12px] text-center mt-1.5">5,000 compute units</p>

          <div className="border-t border-[#1f1f1f] my-4" />

          <ul className="space-y-2 flex-1">
            {[
              "Commercial license",
              "Full access to Image, 3D, and Lipsync models",
              "LoRA fine-tuning with up to 50 images",
              "Upscale & enhance to 4K",
              "Access to selected video models",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#999] text-[12px]">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button className="text-[#444] hover:text-[#888] text-[12px] mt-4 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Pro Plan */}
        <div
          className="bg-[#131313] rounded-2xl p-5 flex flex-col relative"
          style={{
            border: "1px solid #1f1f1f",
            borderTop: "2px solid #4f6ef7",
            boxShadow: "0 0 0 1px rgba(79,110,247,0.15), 0 8px 32px rgba(79,110,247,0.12)",
          }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-[#4f6ef7] text-white text-[11px] px-3 py-1 rounded-full font-medium whitespace-nowrap leading-none">
              Most popular
            </span>
          </div>

          <h3 className="text-[15px] font-semibold text-white mt-1">Pro</h3>
          <p className="text-[#555] text-[12px] mt-0.5 mb-4">
            Everything you need for professional AI creation
          </p>

          <PriceDisplay monthly={35} yearly={25} isYearly={isYearly} />

          <button
            data-testid="btn-get-pro"
            className="w-full bg-[#4f6ef7] hover:bg-[#3d5ce6] text-white py-2 rounded-lg font-medium text-[13px] transition-colors"
          >
            Get Pro →
          </button>
          <p className="text-[#444] text-[12px] text-center mt-1.5">20,000 compute units</p>

          <div className="border-t border-[#1f1f1f] my-4" />

          <ul className="space-y-2 flex-1">
            <li className="flex items-start gap-2 text-[#999] text-[12px]">
              <CheckIcon />
              <span>Everything in Basic plan</span>
            </li>
            <li className="flex items-start gap-2 text-[#999] text-[12px]">
              <CheckIcon />
              <span>Access to all video models</span>
            </li>
            <li className="flex items-start gap-2 text-[#999] text-[12px]">
              <CheckIcon />
              <span>Workflow automation with Nodes and Apps</span>
            </li>
            <li className="flex items-start gap-2 text-[#999] text-[12px]">
              <CheckIcon />
              <span>
                AI-powered Nodes Agent
                <span className="ml-1.5 bg-[#4f6ef7] text-white text-[9px] px-1.5 py-0.5 rounded-full align-middle">
                  new
                </span>
              </span>
            </li>
            <li className="flex items-start gap-2 text-[#999] text-[12px]">
              <CheckIcon />
              <span>Bulk discounts on compute unit packs</span>
            </li>
            <li className="flex items-start gap-2 text-[#999] text-[12px]">
              <CheckIcon />
              <span>Upscale & enhance to 8K</span>
            </li>
          </ul>

          <button className="text-[#444] hover:text-[#888] text-[12px] mt-4 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Max Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5 flex flex-col">
          <h3 className="text-[15px] font-semibold text-white">Max</h3>
          <p className="text-[#555] text-[12px] mt-0.5 mb-4">
            Maximum power for the most demanding creators
          </p>

          <PriceDisplay monthly={105} yearly={74} isYearly={isYearly} />

          <button
            data-testid="btn-get-max"
            className="border border-[#2a2a2a] hover:border-[#444] text-white py-2 rounded-lg w-full font-medium text-[13px] transition-colors bg-[#161616]"
          >
            Get Max →
          </button>
          <p className="text-[#444] text-[12px] text-center mt-1.5">80,000 compute units</p>

          <div className="border-t border-[#1f1f1f] my-4" />

          <ul className="space-y-2 flex-1">
            {[
              "Everything in Pro plan",
              "Unlimited Luna fine-tunings with 2,000 files",
              "Unlimited Concurrency",
              "Unlimited relaxed generations",
              "Upscale & enhance to 22K",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-[#999] text-[12px]">
                <CheckIcon />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <button className="text-[#444] hover:text-[#888] text-[12px] mt-4 text-left transition-colors">
            See all features →
          </button>
        </div>
      </div>
    </section>
  );
}
