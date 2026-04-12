import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

export const metadata: Metadata = {
  title: "Orders Guide | Finxa Commerce Help Center",
  description:
    "Understand the order lifecycle, fulfill items, process refunds and review customer details in Finxa Commerce.",
};

export default function OrdersPage() {
  return (
    <GuideShell
      title="Orders Guide"
      description="Handle orders confidently from first payment to final fulfillment and post-purchase support."
      currentPath="/orders"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Track the Order Lifecycle</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Orders to view new and processing orders.</li>
          <li>Filter by payment status, fulfillment status and date range.</li>
          <li>Open an order record to review timeline events.</li>
          <li>Use internal notes for handoff between team members.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Fulfill and Ship</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Select the order and click Create Fulfillment.</li>
          <li>Confirm line items and quantities to ship.</li>
          <li>Add tracking number and carrier details.</li>
          <li>Mark fulfilled to notify the customer automatically.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Process Refunds Safely</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open the order and click Refund.</li>
          <li>Choose full or partial refund by line item.</li>
          <li>Adjust restock behavior for returned inventory.</li>
          <li>Submit and verify the order timeline reflects the refund.</li>
        </ol>
        <Screenshot
          src="/Finxa.png"
          alt="Order detail with fulfillment and refund actions"
          caption="Order detail with fulfillment and refund actions"
        />
      </section>
    </GuideShell>
  );
}
