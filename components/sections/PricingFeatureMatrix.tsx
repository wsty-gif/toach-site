import { pricingFeatureRows } from "@/lib/siteContent";

function Mark({ value }: { value: string }) {
  if (value === "○") {
    return <span className="text-lg font-black text-blue-700">○</span>;
  }

  if (value === "△") {
    return <span className="text-lg font-black text-amber-600">△</span>;
  }

  return <span className="text-lg font-black text-slate-300">−</span>;
}

export default function PricingFeatureMatrix() {
  return (
    <section className="bg-white px-5 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Feature Matrix
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
            プラン別の機能比較
          </h2>
          <p className="mt-6 leading-9 text-slate-600">
            manual-appにあるマニュアル管理、タスク配信、承認、ラーニング、ユーザー管理などをもとに、
            プランごとの利用範囲を整理しています。
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[1.7fr_0.9fr_0.9fr_0.9fr] bg-slate-950 text-sm font-bold text-white">
            <div className="p-4">機能</div>
            <div className="p-4 text-center">ライト</div>
            <div className="bg-blue-700 p-4 text-center">ビジネス</div>
            <div className="p-4 text-center">エンタープライズ</div>
          </div>

          {pricingFeatureRows.map((group) => (
            <div key={group.category}>
              <div className="bg-slate-100 px-4 py-3 text-sm font-bold text-slate-950">
                {group.category}
              </div>

              {group.features.map((feature) => (
                <div
                  key={feature.name}
                  className="grid grid-cols-[1.7fr_0.9fr_0.9fr_0.9fr] border-t border-slate-200 text-sm"
                >
                  <div className="p-4 font-medium text-slate-700">
                    {feature.name}
                  </div>
                  <div className="p-4 text-center">
                    <Mark value={feature.light} />
                  </div>
                  <div className="bg-blue-50/60 p-4 text-center">
                    <Mark value={feature.business} />
                  </div>
                  <div className="p-4 text-center">
                    <Mark value={feature.enterprise} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
          <span>○：標準対応</span>
          <span>△：条件付き・一部対応</span>
          <span>−：対象外または要相談</span>
        </div>
      </div>
    </section>
  );
}