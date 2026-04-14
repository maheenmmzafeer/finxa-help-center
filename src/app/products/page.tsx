import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

export const metadata: Metadata = {
  title: "Products Guide | Finxa Commerce Help Center",
  description:
    "Manage products, variants, media, collections, tags and SEO settings in Finxa Commerce.",
};

export default function ProductsPage() {
  return (
    <GuideShell
      title="Products Guide"
      description="Build a clear and searchable catalog with variants, collections and optimized product pages."
      currentPath="/products"
    >
      <section>
        <h2 className="text-xl font-semibold text-slate-900">Create a Product</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Open Products and click Add Product.</li>
          <li>Write a clear product name and concise description.</li>
          <li>Set price, compare-at price, SKU and available stock.</li>
          <li>Choose Active status when the product is ready to sell.</li>
        </ol>
        <div className="mx-auto mt-6 w-full max-w-5xl">
          <Screenshot
            src="/products.png"
            alt="Finxa products page"
            caption="Go to Products Page and click on Add Product."
            priority
          />
          <Screenshot
            src="/product_info.png"
            alt="Finxa product info page"
            caption="Add the Product Name and Description, and edit its status from the dropdown menu on the right."
          />
          <Screenshot
            src="/pricing.png"
            alt="Finxa Product Pricing"
            caption="Add the Product price, compare-at price, SKU and inventory quantity."
          />
          </div>
      </section>

<section>
        <h2 className="text-xl font-semibold text-slate-900">Add Product Images</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Scroll down to the Media section.</li>
          <li>Drag and drop media from your device or click on browse to pick files from your device.</li>
          <li>Save the product.</li>
        </ol>
        <div> <Screenshot
            src="/images.png"
            alt="Finxa Product Images"
            caption="Find the Media section in the product information page and upload images."
          />
         </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Add Variants and Images</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Enable variants and define options like Size and Color.</li>
          <li>Add each variant combination and unique inventory value.</li>
          <li>Upload images and assign specific images to variants.</li>
          <li>Check the product preview to confirm visual consistency.</li>
        </ol>
        <div> <Screenshot
            src="/variant.png"
            alt="Finxa Product Variant Setting"
            caption="Find the Variants section in the product information page and click on Add another option."
          />
          <Screenshot
            src="/variants.png"
            alt="Finxa Product Variants"
            caption="After adding variant options, the variant combinations will show below. Click on the any of the combination to update its inventory quantity, price or add variant-specific images."
          />
          <Screenshot
            src="/variants_settings.png"
            alt="Finxa Product Variants Settings Page"
            caption="The Variant settings open. Update its inventory quantity, price and images."
          />
          <Screenshot
            src="/variant_images.png"
            alt="Finxa Product Variants Images"
            caption="Select any image of the product to assign it to a specific variant. This image will then show on the storefront when the customer selects that variant. If there is no image option available, add images to the product's media section and save the product first."
          />
          </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Organize with Collections, Tags and SEO</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>Add product tags for filtering when users search the product.</li>
          <li>Set SEO title and meta description in search settings.</li>
          <li>Save and validate the storefront product URL.</li>
          <li>Assign the product to one or more collections through the Collections page.</li>
        </ol>
        <Screenshot
          src="/tags.png"
          alt="Product Tags"
          caption="Add tags to your product for better organization and searchability."
        />
        <Screenshot
          src="/SEO.png"
          alt="Product SEO"
          caption="Scroll to the bottom of the page to find the SEO section. Set the SEO title and meta description for better search engine visibility."
        />
        </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">How to Create a Collection</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>To create a collection, go to Collections under the Products section from the sidebar and click on Add Collection. You will be redirected to the collection creation page.</li>
          <li>Write a Name and Description for the Collection and set its status to Active.</li>
          <li>Set the Collection type depending on your needs. Automated type automatically adds products based on the conditions you set.</li>
          <li>For Manual collection type, add products through the product browsing interface.</li>
          <li>Scroll to the bottom of the page and open the SEO section. Set the SEO title and meta description for better search engine visibility.</li>
        </ol>
        <Screenshot
          src="/collections.png"
          alt="Product Collections"
          caption="To create a collection, go to Collections under the Products section from the sidebar and click on Add Collection."
        />
        <Screenshot
          src="/collection_settings.png"
          alt="Collection Settings"
          caption="Write a name and description for the collection. Set its status to Active on the settings on the right side. Set the collection type based on your needs."
        />
        <Screenshot
          src="/add_products.png"
          alt="Adding Products to Collection"
          caption="For Manual collection type, add products through the product browsing interface by searching product's name."
        />
        <Screenshot
          src="/automated_products.png"
          alt="Automated Collection"
          caption="For Automated collection type, set the conditions for adding products automatically."
        />
        <Screenshot
          src="/collections_SEO.png"
          alt="Collection SEO"
          caption="Scroll to the bottom of the page and open the SEO section. Set the SEO title and meta description for better search engine visibility."
        />
      </section>
    </GuideShell>
  );
}
