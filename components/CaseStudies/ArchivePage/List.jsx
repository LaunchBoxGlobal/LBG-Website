import React from "react";
import Card from "./Card";
import { ARCHIVED_CASE_STUDIES } from "@/constants/case-studies/archived-case-studies";
import Pagination from "./Pagination";

const List = () => {
  return (
    <section className="w-full padding-x py-20 lg:py-32">
      <div className="w-full">
        <div className="flex items-center gap-2">
          <label htmlFor="category" className="text-base md:text-lg lg:text-xl">
            Sort By Category:
          </label>
          <select
            name="category"
            id="category"
            className="bg-[#D9D9D9] px-4 md:w-[283px] rounded-[17px] h-[57px] text-base md:text-lg lg:text-xl outline-none"
          >
            <option value="all">All</option>
            <option value="mobile-app-development">
              Mobile App Development
            </option>
            <option value="web-app-development">Web App Development</option>
            <option value="software-development">Software Development</option>
            <option value="ecommerce-development">Ecommerce Development</option>
            <option value="branding-and-design">Branding & Design</option>
          </select>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-14">
        {ARCHIVED_CASE_STUDIES?.map((c, i) => {
          return <Card key={i} c={c} />;
        })}
      </div>

      {/* <Pagination /> */}
    </section>
  );
};

export default List;
