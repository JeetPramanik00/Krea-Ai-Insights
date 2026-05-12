const PACKS = [
  { amount: "2000", price: "$20" },
  { amount: "5000", price: "$45" },
  { amount: "10000", price: "$85" },
  { amount: "24000", price: "$190" },
  { amount: "50000", price: "$390" },
];

function ChipIllustration() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="mx-auto my-3">
      <rect width="100" height="100" rx="6" fill="#0d0d0d" />
      <line x1="33" y1="0" x2="33" y2="100" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="66" y1="0" x2="66" y2="100" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="0" y1="33" x2="100" y2="33" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="0" y1="66" x2="100" y2="66" stroke="#1a1a1a" strokeWidth="0.5" />
      <rect x="28" y="28" width="44" height="44" rx="3" stroke="#2a2a2a" strokeWidth="1" fill="#111" />
      <rect x="36" y="36" width="28" height="28" rx="2" stroke="#333" strokeWidth="0.5" fill="none" />
      <circle cx="6" cy="6" r="2.5" fill="#22c55e" opacity="0.9" />
      <circle cx="94" cy="6" r="2.5" fill="#22c55e" opacity="0.9" />
      <circle cx="6" cy="94" r="2.5" fill="#22c55e" opacity="0.9" />
      <circle cx="94" cy="94" r="2.5" fill="#22c55e" opacity="0.9" />
    </svg>
  );
}

export default function ComputePacks() {
  return (
    <section>
      <div className="text-center mb-8">
        <h2 className="text-white text-3xl font-bold mb-2">Need More Compute?</h2>
        <p className="text-[#888888] text-sm max-w-xl mx-auto">
          Purchase one-time compute packs to boost your generations. Credits are valid for 90 days.
        </p>
      </div>

      <div className="flex flex-row gap-4 overflow-x-auto pb-2 justify-center">
        {PACKS.map((pack) => (
          <div
            key={pack.amount}
            className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 flex flex-col items-center w-[180px] flex-shrink-0"
          >
            <span className="text-white text-3xl font-bold">{pack.amount}</span>
            <ChipIllustration />
            <span className="text-[#888888] text-xs mb-3">{pack.price}</span>
            <button
              disabled
              className="w-full text-xs py-1.5 rounded-lg border border-[#333] text-[#666] cursor-default text-center"
            >
              Pro plan required
            </button>
          </div>
        ))}
      </div>

      <p className="text-[#444444] text-xs text-center mt-6">
        Credits are added instantly after purchase and expire after 90 days
      </p>
    </section>
  );
}
