import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { ScreenshotPlaceholder } from "@/components/screenshot-placeholder";

export const metadata: Metadata = {
  title: "Products Guide | Finxa Commerce Help Center",
  description:
    "Manage products, variants, media, collections, tags, and SEO settings in Finxa Commerce.",
};

export default function ProductsPage() {
  return (
    <GuideShell
      title="Products Guide"
      description="Build a clear and searchable catalog with variants, collections, and optimized product pages."
      currentPath="/products"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Create a Product</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Products and click Add Product.</li>
          <li>Write a clear product name and concise description.</li>
          <li>Set price, compare-at price, SKU, and available stock.</li>
          <li>Choose Active status when the product is ready to sell.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Add Variants and Images</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Enable variants and define options like Size and Color.</li>
          <li>Add each variant combination and unique inventory value.</li>
          <li>Upload images and assign specific images to variants.</li>
          <li>Check the product preview to confirm visual consistency.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Organize with Collections, Tags, and SEO</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Add product tags for filtering and campaign grouping.</li>
          <li>Assign the product to one or more collections.</li>
          <li>Set SEO title and meta description in search settings.</li>
          <li>Save and validate the storefront product URL.</li>
        </ol>
        <ScreenshotPlaceholder
          title="Variant matrix and SEO section"
          note="Capture this from Finxa Commerce: variants table and product SEO panel."
        />
      </section>
    </GuideShell>
  );
}
