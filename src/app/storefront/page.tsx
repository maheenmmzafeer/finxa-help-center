import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { ScreenshotPlaceholder } from "@/components/screenshot-placeholder";

export const metadata: Metadata = {
  title: "Storefront Guide | Finxa Commerce Help Center",
  description:
    "Customize your storefront in the Finxa Commerce theme editor using colors, fonts and sections.",
};

export default function StorefrontPage() {
  return (
    <GuideShell
      title="Storefront Guide"
      description="Use the theme editor to shape your brand experience and improve storefront conversion."
      currentPath="/storefront"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Open the Theme Editor</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Go to Storefront and click Customize Theme.</li>
          <li>Select the theme you want to edit.</li>
          <li>Open homepage preview in desktop and mobile views.</li>
          <li>Use Save Draft before publishing major changes.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Adjust Brand Styling</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Set your primary and secondary brand colors.</li>
          <li>Choose heading and body fonts that stay readable.</li>
          <li>Update button style, corner radius and spacing scale.</li>
          <li>Preview product pages and checkout for consistency.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Configure Sections and Content Blocks</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Reorder homepage sections using drag-and-drop.</li>
          <li>Add featured collection, testimonial and banner blocks.</li>
          <li>Hide unused sections to keep pages focused.</li>
          <li>Publish once the final preview matches your brand plan.</li>
        </ol>
        <ScreenshotPlaceholder
          title="Theme editor panels"
          note="Capture this from Finxa Commerce: section list, style panel and preview frame."
        />
      </section>
    </GuideShell>
  );
}
