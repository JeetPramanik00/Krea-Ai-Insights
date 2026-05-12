export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-[#1f1f1f]">
      <div
        className="absolute inset-y-0 right-0 w-[60%] bg-cover bg-right-top bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-8 pt-10 pb-8">
        <p className="text-[#555555] text-[11px] font-semibold tracking-widest uppercase mb-3">
          Why choose Krea
        </p>
        <p className="text-[#777777] text-[13px] leading-relaxed max-w-[420px]">
          Krea is the world's best creative AI studio. With industry leading generation
          speeds, over 150 models including Nano Banana, Topaz, Magnific, Swarmlore, and
          a community of over 10 million users. Krea is the best platform to create with AI.
        </p>
      </div>

      <div className="relative z-0 h-44 md:h-56" />
    </section>
  );
}
