import PortfolioParallexCards from "@/components/Common/PortfolioParallexCards";
import { ECOMMERCE_CASE_STUDIES } from "@/constants/ecommerce-develpment/ecommerce-case-studies";

export default function Portfolio() {
  return (
    <>
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center pt-10 lg:pt-20">
        <h2 className="section-heading lg:w-[80%]">
          See How Our Ecommerce Solutions Boosted Real
          <span className="red-text"> Businesses</span>
        </h2>
        <p className="section-paragraph lg:w-[60%] text-center">
          Explore real success stories - from struggling stores to sales
          champions. Our ecommerce development helped businesses like yours
          increase conversions, simplify checkout, and grow revenue. See what we
          can do for you.
        </p>
      </section>
      <PortfolioParallexCards projects={ECOMMERCE_CASE_STUDIES} />
    </>
  );
}
