import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { ScreenshotPlaceholder } from "@/components/screenshot-placeholder";

export const metadata: Metadata = {
  title: "Markets Guide | Finxa Commerce Help Center",
  description:
    "Configure multiple markets with localized currencies, languages and market-specific storefront overrides.",
};

export default function MarketsPage() {
  return (
    <GuideShell
      title="Markets Guide"
      description="Localize pricing and storefront experience per market while managing everything from one admin."
      currentPath="/markets"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Create Markets</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Markets from your Finxa Commerce admin.</li>
          <li>Click Add Market and choose target countries.</li>
          <li>Set local currency and exchange behavior.</li>
          <li>Activate the market once configuration is complete.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Configure Language and Content</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Enable language options available for that market.</li>
          <li>Review translated product titles and navigation labels.</li>
          <li>Adjust market-specific announcements and banners.</li>
          <li>Publish updates and validate storefront language switcher.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Set Market-Specific Theme Overrides</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Theme Editor and pick the market context.</li>
          <li>Adjust hero messaging and local campaign sections.</li>
          <li>Set region-specific featured collections.</li>
          <li>Preview and publish to that market only.</li>
        </ol>
        <ScreenshotPlaceholder
          title="Market settings and localized preview"
          note="Capture this from Finxa Commerce: market selector with currency and language settings."
        />
      </section>
    </GuideShell>
  );
}
