import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { ScreenshotPlaceholder } from "@/components/screenshot-placeholder";

export const metadata: Metadata = {
  title: "Getting Started | Finxa Commerce Help Center",
  description:
    "Learn how to sign up, complete onboarding, configure your store and publish your first product in Finxa Commerce.",
};

export default function GettingStartedPage() {
  return (
    <GuideShell
      title="Getting Started"
      description="Set up your Finxa Commerce account and launch your first live product in one guided flow."
      currentPath="/getting-started"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Create Your Store Account</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Finxa Commerce and click Create Store.</li>
          <li>Enter your business email, store name and secure password.</li>
          <li>Confirm your email using the verification message.</li>
          <li>Sign in and choose your primary selling country.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Complete Onboarding Settings</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Add your business logo and store support contact details.</li>
          <li>Set your default currency and storefront language.</li>
          <li>Configure tax preferences to match your region.</li>
          <li>Save changes and review the onboarding checklist status.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Add Your First Product</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Go to Products and click Add Product.</li>
          <li>Enter product title, description, price and stock quantity.</li>
          <li>Upload at least one product image for the listing card.</li>
          <li>Set product status to Active and click Save.</li>
        </ol>
        <ScreenshotPlaceholder
          title="Onboarding checklist and first product draft"
          note="Capture this from Finxa Commerce: dashboard checklist and first product creation screen."
        />
      </section>
    </GuideShell>
  );
}
