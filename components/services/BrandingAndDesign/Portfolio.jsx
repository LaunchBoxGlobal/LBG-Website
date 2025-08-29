import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { BRANDING_DESIGN_PORTFOLIO } from "@/constants/branding-and-design/branding-and-design-portfolio";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-32">
        <h2 className="section-heading lg:w-[80%]">
          Business Branding Services in Action:
          <span className="red-text"> Case Studies</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          See how we’ve helped businesses shine from sharp brand strategy
          services to digital solutions that click with customers.
        </p>
      </section>
      <PortfolioParallexCards projects={BRANDING_DESIGN_PORTFOLIO} />
    </>
  );
}
