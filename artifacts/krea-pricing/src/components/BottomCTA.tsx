export default function BottomCTA() {
  return (
    <section className="text-center py-14 border-t border-[#161616]">
      <h2 className="text-white text-xl font-semibold mb-1.5">Still have questions?</h2>
      <p className="text-[#555] text-[13px] max-w-sm mx-auto leading-relaxed">
        Our team is here to help you find the right plan for your organization.
      </p>
      <button
        data-testid="btn-contact-sales-footer"
        className="bg-[#4f6ef7] hover:bg-[#3d5ce6] text-white px-6 py-2.5 rounded-lg mt-5 font-medium text-[13px] transition-colors"
      >
        Contact Sales
      </button>
    </section>
  );
}
