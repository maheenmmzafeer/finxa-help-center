import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

export const metadata: Metadata = {
  title: "Shipping Guide | Finxa Commerce Help Center",
  description:
    "Set up shipping zones, flat rates, weight-based rules and free shipping in Finxa Commerce.",
};

export default function ShippingPage() {
  return (
    <GuideShell
      title="Shipping Guide"
      description="Build predictable shipping rules that scale from local delivery to international operations."
      currentPath="/shipping"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Create Shipping Zones</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Go to Shipping from the sidepanel.</li>
          <li>Click Add Shipping Zone and name it by region.</li>
          <li>Select countries for that zone.</li>
          <li>Add the Shipping rates and click on Create Zone.</li>
        </ol>
        <Screenshot
          src="/shipping.png"
          alt="Shipping Zones Rates"
          caption="Go to Shipping from the sidepanel and click on Add Shipping Zone."
        />
        <Screenshot
          src="/create_shipping.png"
          alt="Create Shipping Zones"
          caption="Select countries for that zone and add the Shipping rates."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Configure Rate Types</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Add a flat-rate option for simple shipping.</li>
          <li>Add a weight-based rate with clear weight brackets if required.</li>
          <li>Set expected delivery days for each method.</li>
          <li>If required, add more rates by clicking on Add Rate option.</li>
        </ol>
        <Screenshot
          src="/shipping_rates.png"
          alt="Shipping Rates"
          caption="Select the type of Rate and enter the relevant details."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Enable Free Shipping Rules</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Create a free shipping rate in the target zone.</li>
          <li>Set minimum order amount threshold.</li>
          <li>Optionally limit by product tags or collections by clicking on Add Hide Condition option.</li>
          <li>Save the changes.</li>
        </ol>
        <Screenshot
          src="/free_shipping.png"
          alt="Free Shipping Rules"
          caption="Enable free shipping rules for your customers."
        />
      </section>
    </GuideShell>
  );
}
