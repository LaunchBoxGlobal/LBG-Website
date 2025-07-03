import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { ECOMMERCE_CASE_STUDIES } from "@/constants/ecommerce-develpment/ecommerce-case-studies";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading lg:w-[80%]">
          Ecommerce Development Success
          <span className="red-text"> Stories</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Discover the impactful{" "}
          <Link href={`/case-studies`} className="red-text">
            success stories
          </Link>{" "}
          of our clients, showcasing the expertise of our ecommerce web
          development company and the effectiveness of our ecommerce development
          services.
        </p>
      </section>
      <PortfolioParallexCards projects={ECOMMERCE_CASE_STUDIES} />
    </>
  );
}
