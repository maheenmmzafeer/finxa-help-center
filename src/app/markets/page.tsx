import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

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
          <li>Click on Markets from the sidepanel.</li>
          <li>Click Add Market and choose target countries.</li>
          <li>Set the currency and language for the market.</li>
          <li>If Payment and Shipping Zones have been configured, assign them to the market.</li>
          <li>Activate the market once configuration is complete.</li>
        </ol>
        <Screenshot
          src="/markets.png"
          alt="Create Markets"
          caption="Click on Markets from the sidepanel and then click on Add Market."
        />
        <Screenshot
          src="/create_market.png"
          alt="Configure Markets"
          caption="Select the country for the market and choose the currency."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Configure Language and Content</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Find the Language section at the bottom of the market configuration page and click on Translations.</li>
          <li>Click on Add Language on the bottom of the page.</li>
          <li>Choose the language you wish to add.</li>
          <li>Go to the Languages section on the Language page and activate the language you added by clicking on the toggle button.</li>
          <li>Go back to the market configuration page and select the language for the market.</li>
        </ol>
        <Screenshot
          src="/market_language.png"
          alt="Configure Language"
          caption="Click on the Translations button to add new languages."
        />
        <Screenshot
          src="/languages.png"
          alt="Configure Language"
          caption="Alternatively, you can also click on Translations on the sidepanel. Once the language page opens, click on Add Language at the bottom of the screen."
        />
        <Screenshot
          src="/add_language.png"
          alt="Configure Language"
          caption="Choose the language you wisht to add."
        />
        <Screenshot
          src="/activate_language.png"
          alt="Activate Language"
          caption="Go to Languages section on the Translation page, and activate the language by clicking on the toggle button."
        />
        <Screenshot
          src="/select_language.png"
          alt="Configure Language in Market"
          caption="Go back to the Market Configuration page and select the language for the market."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Set Market-Specific Theme Overrides</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Theme Editor and pick a specific market you wish to change.</li>
          <li>Make your theme adjustments and Save the Market.</li>
        </ol>
      </section>
    </GuideShell>
  );
}
