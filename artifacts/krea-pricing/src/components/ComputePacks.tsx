const PACKS = [
  { amount: "2000", price: "$20" },
  { amount: "5000", price: "$45" },
  { amount: "10000", price: "$85" },
  { amount: "24000", price: "$190" },
  { amount: "50000", price: "$390" },
];

function ChipIllustration() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="my-2 mx-auto">
      {/* Background */}
      <rect width="96" height="96" rx="6" fill="#0d0d0d" />

      {/* Grid lines horizontal */}
      <line x1="0" y1="32" x2="96" y2="32" stroke="#1e1e1e" strokeWidth="0.75" />
      <line x1="0" y1="64" x2="96" y2="64" stroke="#1e1e1e" strokeWidth="0.75" />
      {/* Grid lines vertical */}
      <line x1="32" y1="0" x2="32" y2="96" stroke="#1e1e1e" strokeWidth="0.75" />
      <line x1="64" y1="0" x2="64" y2="96" stroke="#1e1e1e" strokeWidth="0.75" />

      {/* Chip die outer rect */}
      <rect x="22" y="22" width="52" height="52" rx="4" fill="#111" stroke="#2c2c2c" strokeWidth="1" />

      {/* Chip die inner detail */}
      <rect x="30" y="30" width="36" height="36" rx="2" fill="#0e0e0e" stroke="#252525" strokeWidth="0.75" />

      {/* Inner grid pattern */}
      <line x1="30" y1="48" x2="66" y2="48" stroke="#1c1c1c" strokeWidth="0.5" />
      <line x1="48" y1="30" x2="48" y2="66" stroke="#1c1c1c" strokeWidth="0.5" />

      {/* Corner LED dots */}
      <circle cx="5" cy="5" r="2.5" fill="#22c55e" opacity="0.85" />
      <circle cx="91" cy="5" r="2.5" fill="#22c55e" opacity="0.85" />
      <circle cx="5" cy="91" r="2.5" fill="#22c55e" opacity="0.85" />
      <circle cx="91" cy="91" r="2.5" fill="#22c55e" opacity="0.85" />
    </svg>
  );
}

export default function ComputePacks() {
  return (
    <section>
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-bold mb-1.5">Need More Compute?</h2>
        <p className="text-[#555] text-[13px] max-w-md mx-auto leading-relaxed">
          Purchase one-time compute packs to boost your generations. Credits are valid for 90 days.
        </p>
      </div>

      <div className="flex flex-row gap-3 justify-center">
        {PACKS.map((pack) => (
          <div
            key={pack.amount}
            className="bg-[#0e0e0e] border border-[#1a1a1a] rounded-xl p-4 flex flex-col items-center flex-1 max-w-[200px]"
          >
            <span className="text-white text-2xl font-bold tracking-tight">{pack.amount}</span>
            <ChipIllustration />
            <span className="text-[#666] text-[12px] mb-3">{pack.price}</span>
            <button
              disabled
              className="w-full text-[11px] py-1.5 rounded-lg border border-[#222] text-[#444] cursor-default text-center"
            >
              Pro plan required
            </button>
          </div>
        ))}
      </div>

      <p className="text-[#333] text-[11px] text-center mt-5">
        Credits are added instantly after purchase and expire after 90 days
      </p>
    </section>
  );
}
