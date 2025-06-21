import { projects } from "@/constants/mobile-app-development/Projects";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-32">
        <h2 className="section-heading">
          Work That Speaks for
          <span className="red-text"> Itself</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          See how we’ve helped businesses shine from sharp brand strategy
          services to digital solutions that click with customers.
        </p>
      </section>
      <PortfolioParallexCards projects={projects} />
    </>
  );
}
