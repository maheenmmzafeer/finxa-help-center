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
          <li>Go to Payments from the side panel.</li>
          <li>Select TAP Payments.</li>
          <li>Enter the required details and click on Connect TAP.</li>
        </ol>
        <Screenshot
          src="/tap_payments.png"
          alt="TAP Payments"
          caption="Click on Payments on the side panel. After the page loads, select TAP Payments, enter your details and click Connect."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Enable Manual Payment Methods</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Go to Payments from the side panel.</li>
          <li>Find the Manual Methods section at below the Payment Providers section.</li>
          <li>Click on Add your first method.</li>
          <li>Add the name, eg Cash on Delivery or Bank Transfer, add instructions for the customer at checkout and click on Add Method.</li>
        </ol>
        <Screenshot
          src="/payment_method.png"
          alt="Payment Methods"
          caption="Go to Payments and click on Add Method to enable cash on delivery or bank transfer payment options."
        />
        <Screenshot
          src="/manual_methods.png"
          alt="Manual Payment Methods"
          caption="Configure manual payment methods like cash on delivery or bank transfer as per your choice."
        />
      </section>
    </GuideShell>
  );
}
