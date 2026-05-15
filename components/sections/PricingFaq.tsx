import { pricingFaqItems } from "@/lib/siteContent";

export default function PricingFaq() {
  return (
    <section className="bg-slate-50 px-5 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            料金についてよくある質問
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          {pricingFaqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer text-lg font-bold text-slate-950">
                {item.question}
              </summary>
              <p className="mt-4 leading-8 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}