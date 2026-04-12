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
          <li>Open Settings and choose Shipping.</li>
          <li>Click Add Zone and name it by region.</li>
          <li>Select countries or states for that zone.</li>
          <li>Save before creating rates.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Configure Rate Types</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Add a flat-rate option for simple shipping logic.</li>
          <li>Add a weight-based rate with clear weight brackets.</li>
          <li>Set expected delivery windows for each method.</li>
          <li>Preview checkout to confirm the right rate appears.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Enable Free Shipping Rules</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Create a free shipping rate in the target zone.</li>
          <li>Set minimum order amount threshold.</li>
          <li>Optionally limit by product tags or collections.</li>
          <li>Test carts above and below threshold values.</li>
        </ol>
        <Screenshot
          src="/Finxa.png"
          alt="Shipping zones and rates table"
          caption="Shipping zones and rates table"
        />
      </section>
    </GuideShell>
  );
}
