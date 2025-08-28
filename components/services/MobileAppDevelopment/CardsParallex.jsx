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
        <p className="section-paragraph lg:w-[65%] text-center">
          Explore the mobile apps we have built for startups, small businesses,
          and enterprises. We are not just one of the companies that develop
          apps. We create experiences for businesses.
        </p>
      </section>
      <PortfolioParallexCards projects={projects} />
    </>
  );
}
