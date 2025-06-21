import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const BenefitsMobileVersion = () => {
  return (
    <section className="w-full overflow-x-scroll mt-10">
      <div className="w-full flex flex-row overflow-x-auto benefit-section">
        <div className="flex flex-col items-start gap-2">
          {[
            "Features / Metrics",
            "Launchbox Global",
            "Local Companies",
            "Traditional Firms",
            "Freelance Agencies",
          ].map((f, i) => {
            return (
              <div
                className={`w-[123px] h-[75px] ${
                  i !== 0 && "border-t border-b rounded-tl-xl rounded-bl-xl"
                }`}
              >
                <div
                  key={i}
                  className={`text-lg font-bold flex items-center justify-start rounded-xl p-4 leading-none w-full h-full ${
                    i === 0
                      ? "bg-black text-white"
                      : i === 1
                      ? "bg-[#F40E00] text-white "
                      : "bg-[#212121]/10 text-black"
                  }`}
                >
                  {f}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Flexible & Fast Development</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] bg-[#078F40] rounded-full p-2`}
                >
                  <FaCheck className="text-white w-full h-full" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Functionality-First Approach</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i >= 1 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i >= 1 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>World Class Talents</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 1 || i === 2 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 1 || i === 2 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Rapid Prototyping</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i > 0 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i > 0 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Real-Time Progress Tracking</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 3 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 3 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Industry-Specific Expertise</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 3 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 3 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Custom Build Solution</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div className="rounded-fullbg-white custom-shadow w-[40px] h-[40px] bg-[#078F40] rounded-full p-2">
                  <FaCheck className="text-white w-full h-full" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Post Launch Support & Maintenance</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 1 || i === 3 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 1 || i === 3 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Latest Technologies & Best Practices</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 2 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 2 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Transparent Pricing</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 1 || i === 2 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 1 || i === 2 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>24/7 Customer Support</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0 ? "custom-shadow" : "border-t border-b border-r"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 1 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 1 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-2 w-[148px]">
          <div
            className={`text-base font-normal w-[138px] h-[75px] flex items-center justify-center rounded-xl p-2 text-center leading-none`}
          >
            <p>Always Affordable</p>
          </div>
          {[0, 1, 2, 3].map((_, i) => {
            return (
              <div
                key={i}
                className={`w-full h-[75px] flex items-center justify-center ${
                  i === 0
                    ? "custom-shadow rounded-r-xl"
                    : "border-t border-b border-r rounded-r-xl"
                }`}
              >
                <div
                  className={`rounded-fullbg-white custom-shadow w-[40px] h-[40px] rounded-full p-2 ${
                    i === 1 || i === 2 ? "bg-[#F40E00]" : "bg-[#078F40]"
                  }`}
                >
                  {i === 1 || i === 2 ? (
                    <IoClose className="text-white w-full h-full" />
                  ) : (
                    <FaCheck className="text-white w-full h-full" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsMobileVersion;
