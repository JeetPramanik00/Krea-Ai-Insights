"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What's the difference between plans?",
    a: "Basic offers core AI generation features. Pro unlocks all models and workflow automation. Max gives unlimited access and concurrency. Business and Enterprise add team management and admin controls.",
  },
  {
    q: "How do compute units work?",
    a: "Compute units are consumed when you generate content. Different models cost different amounts. You receive a monthly allocation based on your plan and can purchase additional packs as needed.",
  },
  {
    q: "How do credit rollovers work?",
    a: "Pro, Max, Business, and Enterprise plans support compute unit rollover. Unused credits from one month carry forward to the next, up to your plan's monthly allocation limit.",
  },
  {
    q: "Can we share projects and assets?",
    a: "Project and asset sharing is coming soon. Stay tuned for updates.",
    badge: "Coming Soon",
  },
  {
    q: "What is SAML SSO and why do I need it?",
    a: "SAML SSO allows your team to sign in with your company's existing identity provider (Okta, Google Workspace, Azure AD, etc.). It simplifies access management and improves security. Available on Enterprise plans.",
  },
  {
    q: "How does billing work?",
    a: "You're billed monthly or yearly depending on your preference. Annual billing saves 20%. You can upgrade, downgrade, or cancel at any time. Changes take effect at the start of the next billing cycle.",
  },
  {
    q: "What support options are available?",
    a: "Basic and Pro plans receive community support. Max gets priority email support. Business includes dedicated support. Enterprise gets SLA-backed support with a dedicated Slack channel.",
  },
  {
    q: "Do plans include a commercial license?",
    a: "Yes — all paid plans (Basic, Pro, Max, Business, Enterprise) include a commercial license for any content you generate with Krea.",
  },
  {
    q: "Can I switch between plans?",
    a: "Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades apply at the start of your next billing cycle.",
  },
  {
    q: "Is Business plan seat-based or team-based?",
    a: "Business is seat-based. You pay per active team member, with support for up to 50 seats. Contact sales for larger team needs.",
  },
  {
    q: "How do I add or remove members?",
    a: "Admin users can manage team members directly from the workspace settings panel. Changes to seat count are reflected in your next billing cycle.",
  },
  {
    q: "What happens if we exceed our compute units?",
    a: "You can purchase additional compute packs at any time, or wait until your monthly allocation resets. We'll notify you as you approach your limit.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-[700px] mx-auto">
      <h2 className="text-white text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

      <div>
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-b border-[#161616]">
              <button
                className="w-full flex justify-between items-center text-left py-4 gap-4"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                data-testid={`faq-toggle-${idx}`}
              >
                <div className="flex items-center gap-2.5 flex-1 min-w-0">
                  <span className="text-white text-[14px] font-normal leading-snug">{faq.q}</span>
                  {faq.badge && (
                    <span className="shrink-0 bg-[#4f6ef7]/15 text-[#4f6ef7] text-[10px] px-2 py-0.5 rounded-full border border-[#4f6ef7]/25 whitespace-nowrap">
                      {faq.badge}
                    </span>
                  )}
                </div>
                <span className="text-[#555] text-lg font-light shrink-0 select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#555] text-[13px] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
