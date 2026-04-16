import type { Metadata } from "next";
import { GuideShell } from "@/components/guide-shell";
import { Screenshot } from "@/components/screenshot";

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
          <li>Go to Themes from the sidepanel.</li>
          <li>Select the page you want to view and edit.</li>
          <li>Make the necessary changes and click Save.</li>
        </ol>
        <Screenshot
          src="/theme.png"
          alt="Open the Theme Editor"
          caption="Go to Themes from the sidepanel and click on the Customize button to open the theme editor."
        />
        <Screenshot
          src="/theme_page.png"
          alt="Select the Page to Edit"
          caption="Select the page you want to view and edit. After making the necessary changes, click Save."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Adjust Brand Styling</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>In the Theme Editor, click on settings button on the left side. The Theme Settings open.</li>
          <li>Set your primary and secondary brand colors.</li>
          <li>Scroll down and open Typography section. Choose heading and body fonts of your choice.</li>
          <li>Open the Style section to update button style, corner radius and spacing scale.</li>
          <li>Explore the other sections similarly and customize them to match your brand identity.</li>
        </ol>
        <Screenshot
          src="/theme_settings.png"
          alt="Theme Settings"
          caption="In the Theme Editor, click on settings button on the left side. The Theme Settings open."
        />
        <Screenshot
          src="/theme_settings_2.png"
          alt="Theme Settings"
          caption="Choose the colors, fonts and styles of your choice, and scroll down to view more options."
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900">Configure Sections and Content Blocks</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
          <li>In the Theme Editor, open the Sections panel from the left side, and click on the section you want to edit. </li>
          <li>Add a new section by clicking on the Add Section button.</li>
          <li>Reorder homepage sections using drag-and-drop.</li>
          <li>Add featured collection, testimonial and banner blocks.</li>
          <li>Hide unused sections to keep pages focused on main content.</li>
          <li>Click Save once the final preview matches your brand plan.</li>
        </ol>
        <Screenshot
          src="/theme_sections.png"
          alt="Theme Sections"
          caption="Open the Theme Editor and click on the Sections tab on the left side. Click on the section you want to edit, or click on the Add Section button to add a new section."
        />
        <Screenshot
          src="/section_layout.png"
          alt="Section Layout"
          caption="Configure the settings for each section, such as layout, spacing and content."
        />
        <Screenshot
          src="/theme_sections_settings.png"
          alt="Theme Sections"
          caption="Drag and Drop for reordering the sections on the page."
        />
        <Screenshot
          src="/hide_section.png"
          alt="Hide Section"
          caption="Hide unused sections by simply hovering over the section and clicking on the eye icon."
        />
      </section>
    </GuideShell>
  );
}
