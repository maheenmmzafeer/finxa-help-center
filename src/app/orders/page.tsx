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
          <li>Open Orders through the side panel to view all orders.</li>
          <li>Filter by payment status, fulfillment status and date range.</li>
          <li>Open an order record to view order details and timeline events.</li>
        </ol>
        <Screenshot
          src="/orders_page.png"
          alt="Orders Page"
          caption="Use the Orders page to track and manage all your store's orders. Filter and open individual orders to see details and timeline."
        />
        <Screenshot
          src="/order_details.png"
          alt="Orders Details"
          caption="View detailed information about each order, including customer details and fulfillment status."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Fulfill and Ship</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Select the order to view order details.</li>
          <li>You may Mark as Paid if they have already paid, or collect payment later.</li>
          <li>Click on Mark as Fulfilled. A popup will open to allow you to enter tracking details.</li>
          <li>Add tracking number and carrier details, and click on Mark as Fulfilled.</li>
        </ol>
        <Screenshot
          src="/mark_paid.png"
          alt="Mark as Paid"
          caption="Mark an order as paid if the customer has already made the payment."
        />
        <Screenshot
          src="/mark_fulfilled.png"
          alt="Mark as Fulfilled"
          caption="Click on Mark as Fulfilled to start the fulfillment process for an order. Tracking Details popup will open to add tracking number and carrier information."
        />
        <Screenshot
          src="/fulfill_order.png"
          alt="Fulfill Order"
          caption="Mark an order as fulfilled after adding the tracking details."
        />
        <Screenshot
          src="/mark_paid_after_fulfilled.png"
          alt="Mark Paid After Fulfilled"
          caption="Mark an order as paid after it has already been fulfilled when payment is received."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Process Refunds Safely</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open the order and scroll down to find the Returns section.</li>
          <li>Click on Create Return.</li>
          <li>Select the items to be returned and specify the reason for the return.</li>
          <li>The Return request is created, and you can approve it.</li>
          <li>When the items are received, you can mark it as received and process the refund.</li>
          <li>Enter the disposition and refund amount, and click on Process Refund to complete the refund process.</li>
          <li>The refund is processed, and you can close the case. The refund details are now visible in the Returns Section.</li>
        </ol>
        <Screenshot
          src="/create_return.png"
          alt="Return Section"
          caption="Find the Returns section in the order details page and click on Create Return to start processing a refund for an order."
        />
        <Screenshot
          src="/return_items.png"
          alt="Return Items"
          caption="Select the items to return and specify the reason for the return."
        />
        <Screenshot
          src="/refunding.png"
          alt="Refunding"
          caption="Process the refund once the returned items are received. Enter the disposition and refund amount, and click on Process Refund to complete the refund process."
        />
        <Screenshot
          src="/refund_details.png"
          alt="Refund Details"
          caption="View the details of the processed refund in the Returns Section."
        />
      </section>
    </GuideShell>
  );
}
