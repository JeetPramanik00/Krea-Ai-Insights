"use client";

import { useState } from "react";

const FAQS = [
  { q: "What's the difference between plans?", a: "Basic offers core AI generation features, Pro unlocks all models and workflow automation, Max gives unlimited access and concurrency. Business and Enterprise add team management and admin controls." },
  { q: "How do compute units work?", a: "Compute units are consumed when you generate content. Different models cost different amounts. You receive a monthly allocation based on your plan." },
  { q: "How do credit rollovers work?", a: "Pro, Max, Business, and Enterprise plans support compute unit rollover. Unused credits from one month carry forward to the next, up to your plan's monthly limit." },
  { q: "Can we share projects and assets?", a: "Project and asset sharing is coming soon. Stay tuned for updates.", badge: "Coming Soon" },
  { q: "What is SAML SSO and why do I need it?", a: "SAML SSO allows your team to sign in with your company's identity provider. Available on Enterprise plans." },
  { q: "How does billing work?", a: "You're billed monthly or yearly depending on your plan. Annual billing saves 20%. You can upgrade, downgrade, or cancel at any time." },
  { q: "What support options are available?", a: "Basic and Pro get community support. Max gets priority email. Business gets dedicated support. Enterprise gets SLA-backed support with Slack connect." },
  { q: "Do plans include a commercial license?", a: "Yes, all paid plans include a commercial license for any content you generate with Krea." },
  { q: "Can I switch between plans?", a: "Yes, you can upgrade or downgrade at any time. Changes take effect at the start of the next billing cycle." },
  { q: "Is Business plan seat-based or team-based?", a: "Business is seat-based. You pay per active team member up to 50 seats." },
  { q: "How do I add or remove members?", a: "Admin users can manage team members from the workspace settings panel." },
  { q: "What happens if we exceed our compute units?", a: "You can purchase additional compute packs or wait until your monthly allocation resets." },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

      <div>
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-b border-[#1f1f1f] py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggle(idx)}
                data-testid={`faq-toggle-${idx}`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-white text-[15px] font-normal">{faq.q}</span>
                  {faq.badge && (
                    <span className="shrink-0 bg-[#4f6ef7]/20 text-[#4f6ef7] text-xs px-2 py-0.5 rounded-full font-medium border border-[#4f6ef7]/30">
                      {faq.badge}
                    </span>
                  )}
                </div>
                <span className="text-white text-xl font-light ml-4 shrink-0">–</span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#666666] text-sm pb-2">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
