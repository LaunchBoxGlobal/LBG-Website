import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { ECOMMERCE_CASE_STUDIES } from "@/constants/ecommerce-develpment/ecommerce-case-studies";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading lg:w-[80%]">
          Ecommerce Development Success
          <span className="red-text"> Stories</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Discover the impactful success stories of our clients to see how our e
          commerce agency helps businesses build high-performing online stores.
          As a responsive website development company, we showcase projects that
          combine functionality, design, and smooth user experiences.
        </p>
      </section>
      <PortfolioParallexCards projects={ECOMMERCE_CASE_STUDIES} />
    </>
  );
}
