import CheckIcon from "./CheckIcon";
import Badge from "./Badge";

interface IndividualPlansProps {
  billingPeriod: "Monthly" | "Yearly";
}

export default function IndividualPlans({ billingPeriod }: IndividualPlansProps) {
  const isYearly = billingPeriod === "Yearly";

  return (
    <section>
      <h2 className="text-white text-xl font-medium left-aligned mb-6">
        For Individual Creators
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Basic Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white">Basic</h3>
          <p className="text-[#666666] text-sm mt-1 mb-6">
            Access to our popular AI generation features
          </p>
          
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">${isYearly ? "7" : "9"}</span>
            <span className="text-[#666666] text-sm">/mo</span>
          </div>

          <button data-testid="btn-get-basic" className="border border-[#333333] text-white hover:border-white rounded-lg w-full py-2.5 transition-colors font-medium">
            Get Basic →
          </button>
          <p className="text-[#666666] text-sm text-center mt-2">
            5,000 compute units
          </p>

          <div className="border-t border-[#222222] my-6"></div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Commercial license</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Full access to Image, 3D, and Lipsync models</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>LoRA fine-tuning with up to 50 images</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Upscale & enhance to 4K</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Access to selected video models</span>
            </li>
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-6 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Pro Plan */}
        <div 
          className="bg-[#141414] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col relative"
          style={{ borderTop: "2px solid #4f6ef7", boxShadow: "0 0 30px rgba(79, 110, 247, 0.15)" }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="bg-[#4f6ef7] text-white text-xs px-3 py-0.5 rounded-full font-medium tracking-wide">
              Most popular
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mt-2">Pro</h3>
          <p className="text-[#666666] text-sm mt-1 mb-6">
            Everything you need for professional AI creation
          </p>
          
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">${isYearly ? "28" : "35"}</span>
            <span className="text-[#666666] text-sm">/mo</span>
          </div>

          <button data-testid="btn-get-pro" className="bg-[#4f6ef7] text-white hover:bg-blue-600 rounded-lg w-full py-2.5 transition-colors font-medium">
            Get Pro →
          </button>
          <p className="text-[#666666] text-sm text-center mt-2">
            20,000 compute units
          </p>

          <div className="border-t border-[#222222] my-6"></div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-3 text-white text-sm font-medium">
              <CheckIcon />
              <span>Everything in Basic plan</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Access to all video models</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Workflow automation with Nodes and Apps</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>
                AI-powered Nodes Agent <Badge>New</Badge>
              </span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Bulk discounts on compute unit packs</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Upscale & enhance to 8K</span>
            </li>
          </ul>

          <button className="text-[#666666] hover:text-white text-sm mt-6 text-left transition-colors">
            See all features →
          </button>
        </div>

        {/* Max Plan */}
        <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 flex flex-col">
          <h3 className="text-xl font-bold text-white">Max</h3>
          <p className="text-[#666666] text-sm mt-1 mb-6">
            Maximum power for the most demanding creators
          </p>
          
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">${isYearly ? "84" : "105"}</span>
            <span className="text-[#666666] text-sm">/mo</span>
          </div>

          <button data-testid="btn-get-max" className="border border-[#333333] text-white hover:border-white rounded-lg w-full py-2.5 transition-colors font-medium">
            Get Max →
          </button>
          <p className="text-[#666666] text-sm text-center mt-2">
            80,000 compute units
          </p>

          <div className="border-t border-[#222222] my-6"></div>

          <ul className="space-y-3 flex-1">
            <li className="flex items-start gap-3 text-white text-sm font-medium">
              <CheckIcon />
              <span>Everything in Pro plan</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Unlimited Luna fine-tunings with 2,000 files</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Unlimited Concurrency</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Unlimited relaxed generations</span>
            </li>
            <li className="flex items-start gap-3 text-[#cccccc] text-sm">
              <CheckIcon />
              <span>Upscale & enhance to 22K</span>
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
