import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

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
        <h2 className="text-xl font-semibold text-slate-900">Signup</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Finxa Commerce and click on Start Free Trial.</li>
          <li>Enter your full name, email and a secure password.</li>
          <li>Confirm your email using the verification message.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Complete Onboarding Settings</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>After signing up, you will be redirected to onboarding page.</li>
          <li>Enter a Store name and select your country.</li>
          <li>After saving, you will be redirected to your dashboard.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Store Setup</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>While on the dashboard, go to Settings on the bottom right corner, and Set your default currency.</li>
          <li>Set up a custom domain of your preference by following the given instructions on the Domains page, and create your custom pages through the Page sections.</li>
          <li>Configure tax preferences through the Taxes page to match your region. You may also add the taxes for other countries your store will be selling to.</li>
          <li>Save changes.</li>
        </ol>
        <div className="mx-auto mt-6 w-full max-w-5xl">
          <Screenshot
            src="/settings.png"
            alt="Finxa settings overview page"
            caption="Go to Settings"
            priority
          />
          <Screenshot
            src="/storesettings.png"
            alt="Finxa store settings page"
            caption="Store Settings Page with currency, tax and other settings"
          />
          <Screenshot
            src="/domain.png"
            alt="Finxa domain settings page"
            caption="Set up a Custom Domain"
          />
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Add Your First Product</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Go to Products and click Add Product.</li>
          <li>Enter product title, description, price and stock quantity.</li>
          <li>Upload at least one product image for the listing card.</li>
          <li>Fill out all other details.</li>
          <li>Set product status to Active and click Save.</li>
        </ol>
      <div className="mx-auto mt-6 w-full max-w-5xl">
          <Screenshot
            src="/products.png"
            alt="Finxa products page"
            caption="Go to Products Page and Click on 'Add Product'"
            priority
          />
          <Screenshot
            src="/product_info.png"
            alt="Finxa product info page"
            caption="Add the required Product details"
          />
          </div>
      </section>
    </GuideShell>
  );
}
