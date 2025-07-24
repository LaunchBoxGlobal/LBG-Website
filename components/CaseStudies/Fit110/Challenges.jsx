import { FIT110_CHALLENGES_AND_COLUTIONS } from "@/constants/case-studies/fit110/fit110-challenges";
import Image from "next/image";
import React from "react";
import ChallengeCard from "./ChallengesCard";

const Challenges = () => {
  return (
    <section className="w-full pb-10 relative">
      <section className="w-full padding-x flex flex-col items-center">
        <h2 className="section-heading text-center">The Challenges We Faced</h2>
        <p className="text-center lg:w-[85%] text-base lg:text-xl mt-7">
          Even with a clear plan, there’s a probability that you’re going to
          face major challenges. Here are the obstacles we had to deal with
          while building Fit 110.
        </p>
      </section>

      <section className="w-full padding-x mt-10 lg:mt-20 z-10 relative">
        <Image
          src={`/case-studies/fit110/fit110-challenges-and-solutions.png`}
          alt="fit110-challenges-and-solutions"
          width={1275}
          height={2239}
          className="z-10"
        />
        {/* {FIT110_CHALLENGES_AND_COLUTIONS?.map((p, i) => { */}
        {/* <ChallengeCard key={i} p={p} index={i} />; */}
        {/* })} */}
        {/* <ChallengeCard /> */}
      </section>
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 top-[0%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 top-[20%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute right-0 top-[0%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute right-0 top-[20%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 bottom-[-10%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-left.png"}
        alt="fit110-glow-left"
        width={536}
        height={563}
        className="absolute left-0 bottom-[-40%] z-0 h-[40vw] w-[50vw]"
      />

      {/* right */}
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 top-[10%] z-0 h-[40vw] w-[50vw]"
      />
      <Image
        src={"/case-studies/fit110/fit110-glow-right.png"}
        alt="fit110-glow-right"
        width={536}
        height={563}
        className="absolute right-0 bottom-[0%] z-0 h-[40vw] w-[50vw]"
      />
    </section>
  );
};

export default Challenges;
