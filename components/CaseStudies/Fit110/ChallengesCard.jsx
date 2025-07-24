import Image from "next/image";

const ChallengeCard = ({ p, index }) => {
  return (
    <div
      className={`w-full mx-auto z-10 flex items-center gap-2 relative justify-center border border-red-500 ${
        index === 1
          ? "lg:mt-80"
          : index === 3
          ? "mt-72"
          : index === 4
          ? "lg:mt-20"
          : "mt-0"
      }`}
    >
      <Image
        src={
          index % 2 === 0
            ? `/case-studies/fit110/challenges-image-left.png`
            : `/case-studies/fit110/challenges-image-right.png`
        }
        alt="fit110 challenges-image-left"
        height={700}
        width={180}
        className={`absolute ${
          index % 2 === 0
            ? "left-[5%] top-[12%] -rotate-2"
            : "right-[5%] top-[-20%] -rotate-2"
        }`}
      />
      <div
        className={`bg-[#E9E4E3] lg:w-[442px] h-[442px] rounded-full p-20 flex flex-col items-center justify-center gap-3 text-center mx-auto`}
      >
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <span className="px-3 text-white py-1 rounded bg-[#F40E00] text-center font-semibold text-base uppercase">
            Problem
          </span>
          <h3 className="font-semibold text-[22px] tracking-tight leading-[1]">
            {p?.problemTitle}
          </h3>
          <p className="text-lg leading-[1.2]">{p?.problemDescription}</p>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-2">
          <span className="px-3 text-white py-1 rounded bg-[#02EA4C] text-center font-semibold text-base uppercase">
            FIXES
          </span>
          <h3 className="font-semibold text-[22px] tracking-tight leading-[1]">
            {p?.solutionTitle}
          </h3>
          <p className="text-lg leading-[1.2]">{p?.solutionDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
