export default function BottomCTA() {
  return (
    <section className="text-center py-24 border-t border-[#1f1f1f]">
      <h2 className="text-white text-2xl font-bold">Still have questions?</h2>
      <p className="text-[#666666] text-sm mt-2 max-w-md mx-auto">
        Our team is here to help you choose the right plan for your organization.
      </p>
      <button 
        data-testid="btn-contact-sales-footer" 
        className="bg-[#4f6ef7] text-white px-8 py-3 rounded-lg hover:bg-blue-600 mt-6 font-medium transition-colors"
      >
        Contact Sales
      </button>
    </section>
  );
}
