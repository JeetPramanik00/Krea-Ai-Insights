const PACKS = [
  { amount: "2000", price: "20" },
  { amount: "5000", price: "45" },
  { amount: "10000", price: "85" },
  { amount: "24000", price: "190" },
  { amount: "50000", price: "390" },
];

function GPUChip() {
  return (
    <svg viewBox="0 0 120 90" className="w-24 h-[72px] my-3">
      <rect x="5" y="5" width="110" height="80" rx="6" fill="#0d0d0d" stroke="#222" strokeWidth="1"/>
      <rect x="25" y="20" width="70" height="50" rx="3" fill="#151515" stroke="#333" strokeWidth="1"/>
      
      {/* Corner LED dots */}
      <circle cx="12" cy="12" r="3" fill="#22c55e" opacity="0.8"/>
      <circle cx="108" cy="12" r="3" fill="#22c55e" opacity="0.8"/>
      <circle cx="12" cy="78" r="3" fill="#22c55e" opacity="0.8"/>
      <circle cx="108" cy="78" r="3" fill="#22c55e" opacity="0.8"/>
      
      {/* Center processor label */}
      <text x="60" y="44" textAnchor="middle" fill="#666" fontSize="8" fontFamily="Inter" fontWeight="600" letterSpacing="1">KREA</text>
      <text x="60" y="55" textAnchor="middle" fill="#444" fontSize="6" fontFamily="Inter">GPU-X</text>
      
      {/* Circuit trace lines */}
      <line x1="5" y1="35" x2="25" y2="35" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="95" y1="35" x2="115" y2="35" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="5" y1="55" x2="25" y2="55" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="95" y1="55" x2="115" y2="55" stroke="#1a1a1a" strokeWidth="2"/>
      
      <line x1="40" y1="5" x2="40" y2="20" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="60" y1="5" x2="60" y2="20" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="80" y1="5" x2="80" y2="20" stroke="#1a1a1a" strokeWidth="2"/>
      
      <line x1="40" y1="70" x2="40" y2="85" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="60" y1="70" x2="60" y2="85" stroke="#1a1a1a" strokeWidth="2"/>
      <line x1="80" y1="70" x2="80" y2="85" stroke="#1a1a1a" strokeWidth="2"/>
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

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {PACKS.map((pack) => (
          <div key={pack.amount} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 flex flex-col items-center">
            <span className="text-white text-2xl font-bold">{pack.amount}</span>
            <GPUChip />
            <span className="text-white text-xl font-bold mb-4">${pack.price}</span>
            <button disabled className="text-[#444444] border border-[#222222] rounded-full px-3 py-1 text-xs cursor-not-allowed w-full text-center">
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
