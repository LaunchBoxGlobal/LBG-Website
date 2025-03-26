import { projects } from "@/constants/mobile-app-development/Projects";
import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";

export default function CardsParallex() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading">
          Discover the Apps <br />
          that We’ve
          <span className="red-text"> Built</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Explore real examples of apps we’ve made simple reliable and built to
          solve problems From startups to businesses see how our work delivers
          results that matter.
        </p>
      </section>
      <PortfolioParallexCards projects={projects} />
    </>
  );
}
