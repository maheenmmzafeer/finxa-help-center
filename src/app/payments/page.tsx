import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

export const metadata: Metadata = {
  title: "Payments Guide | Finxa Commerce Help Center",
  description:
    "Set up TAP Payments and manual payment methods including cash on delivery and bank transfer.",
};

export default function PaymentsPage() {
  return (
    <GuideShell
      title="Payments Guide"
      description="Enable secure checkout with TAP Payments and optional manual methods for flexible operations."
      currentPath="/payments"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Connect TAP Payments</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Go to Settings, then open Payments.</li>
          <li>Select TAP Payments and click Connect.</li>
          <li>Complete merchant verification and required business fields.</li>
          <li>Return to Finxa Commerce and confirm connection status is Active.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Enable Manual Payment Methods</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>In Payments, click Add Manual Method.</li>
          <li>Choose Cash on Delivery or Bank Transfer.</li>
          <li>Add clear checkout instructions for customers.</li>
          <li>Save and test checkout with each enabled method.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Run a Checkout Validation</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Create a low-cost test product in your catalog.</li>
          <li>Place one test order with TAP Payments.</li>
          <li>Place one test order with a manual method.</li>
          <li>Verify order payment status updates correctly in Orders.</li>
        </ol>
        <Screenshot
          src="/Finxa.png"
          alt="Payment methods list"
          caption="Payment methods list"
        />
      </section>
    </GuideShell>
  );
}
