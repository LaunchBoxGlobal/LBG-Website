import AnimatedText from "./AnimatedText";

export const StepOne = ({
  selectedProject,
  setSelectedProject,
  currentStage,
  setCurrentStage,
}) => {
  return (
    <div className="w-full">
      <AnimatedText>
        <div className="w-full flex flex-col items-start gap-3">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            1. What's your project about?
          </label>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {["Website", "Mobile", "SaaS", "AI/ML", "Ecommerce", "Other"]?.map(
              (option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={option}
                    name="projectType"
                    value={option}
                    checked={selectedProject === option}
                    onChange={(e) => setSelectedProject(e.target.value)}
                    className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                  />
                  <label
                    htmlFor={option}
                    className="text-lg lg:text-[22px] font-medium block pb-0.5 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedText>
      <AnimatedText>
        <div className="w-full flex flex-col items-start gap-3 mt-10">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            2. Your current stage?
          </label>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {["Just an idea", "MVP in progress", "Scaling", "Maintenance"]?.map(
              (option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={option}
                    name="projectStage"
                    value={option}
                    checked={currentStage === option}
                    onChange={(e) => setCurrentStage(e.target.value)}
                    className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                  />
                  <label
                    htmlFor={option}
                    className="text-lg lg:text-[22px] font-medium block pb-0.5 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedText>
    </div>
  );
};

export const StepTwo = ({
  selectedRoles,
  setSelectedRoles,
  selectedExperienceLevel,
  setSelectedExperienceLevel,
}) => {
  return (
    <div className="w-full">
      <AnimatedText direction="left">
        <div className="w-full flex flex-col items-start gap-3">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            3. Which roles do you need?
          </label>
          <div className="w-full grid grid-cols-6 gap-5">
            {["Developer", "QA", "UI/UX", "PM", "Tech Lead"]?.map(
              (option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="radio"
                    id={option}
                    name="rolesNeeded"
                    value={option}
                    checked={selectedRoles === option}
                    onChange={(e) => setSelectedRoles(e.target.value)}
                    className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                  />
                  <label
                    htmlFor={option}
                    className="text-[22px] font-medium block pb-0.5 cursor-pointer"
                  >
                    {option}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedText>
      <AnimatedText direction="right">
        <div className="w-full flex flex-col items-start gap-3 mt-10">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            4. Experience level?
          </label>
          <div className="w-full grid grid-cols-5 gap-5">
            {["Junior", "Mid", "Senior", "Mix"]?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={option}
                  name="experienceLevel"
                  value={option}
                  checked={selectedExperienceLevel === option}
                  onChange={(e) => setSelectedExperienceLevel(e.target.value)}
                  className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                />
                <label
                  htmlFor={option}
                  className="text-[22px] font-medium block pb-0.5 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </AnimatedText>
    </div>
  );
};

export const StepThree = ({
  teamSize,
  setTeamSize,
  projectDuration,
  setProjectDuration,
}) => {
  return (
    <div className="w-full">
      <AnimatedText direction="left">
        <div className="w-full flex flex-col items-start gap-3">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            5. Preferred team size?
          </label>
          <div className="w-full grid grid-cols-6 gap-5">
            {["1", "2-3", "4-6", "6+"]?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={option}
                  name="teamSize"
                  value={option}
                  checked={teamSize === option}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                />
                <label
                  htmlFor={option}
                  className="text-[22px] font-medium block pb-0.5 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </AnimatedText>
      <AnimatedText direction="right">
        <div className="w-full flex flex-col items-start gap-3 mt-10">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            6. Project duration?
          </label>
          <div className="w-full grid grid-cols-5 gap-5">
            {[
              "Less than 1 month",
              "1-3 months",
              "3-6 months",
              "6+ months",
            ]?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={option}
                  name="projectDuration"
                  value={option}
                  checked={projectDuration === option}
                  onChange={(e) => setProjectDuration(e.target.value)}
                  className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                />
                <label
                  htmlFor={option}
                  className="text-[22px] font-medium block pb-0.5 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </AnimatedText>
    </div>
  );
};

export const StepFour = ({
  timeZone,
  setTimeZone,
  budgetRange,
  setBudgetRange,
}) => {
  return (
    <div className="w-full">
      <AnimatedText direction="left">
        <div className="w-full flex flex-col items-start gap-3">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            7. Timezone overlap needed?
          </label>
          <div className="w-full grid grid-cols-6 gap-5">
            {["Full", "Partial", "Not needed"]?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={option}
                  name="timeZone"
                  value={option}
                  checked={timeZone === option}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                />
                <label
                  htmlFor={option}
                  className="text-[22px] font-medium block pb-0.5 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </AnimatedText>
      <AnimatedText direction="right">
        <div className="w-full flex flex-col items-start gap-3 mt-10">
          <label className="text-xl md:text-2xl lg:text-[27px] font-semibold">
            8. Budget range?
          </label>
          <div className="w-full grid grid-cols-5 gap-5">
            {["$5-10K", "$10-25K", "$25K +"]?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  id={option}
                  name="budgetRange"
                  value={option}
                  checked={budgetRange === option}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-[25px] h-[25px] cursor-pointer rounded-2xl"
                />
                <label
                  htmlFor={option}
                  className="text-[22px] font-medium block pb-0.5 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </AnimatedText>
    </div>
  );
};

export const StepFive = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <AnimatedText direction="left">
        <p className="text-xl md:text-2xl lg:text-[27px] font-semibold">
          9. Final step
        </p>
      </AnimatedText>
      <div className="w-full mt-4 grid grid-cols-2 gap-x-10 xl:gap-x-20">
        <div className="w-full flex flex-col items-start gap-6">
          <AnimatedText direction="right">
            <div className="w-full flex items-center gap-3">
              <label
                htmlFor="fullName"
                className="text-[22px] font-medium min-w-[20%]"
              >
                Full name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={value.fullName}
                onChange={onChange}
                placeholder="Type name"
                className="border-2 border-red-400 rounded-full px-6 text-lg text-gray-600 w-full max-w-[395px] h-[53px] outline-none"
              />
            </div>
          </AnimatedText>
          <AnimatedText direction="right">
            <div className="w-full flex items-center gap-3">
              <label
                htmlFor="workEmail"
                className="text-[22px] font-medium min-w-[20%]"
              >
                Work email
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={value.workEmail}
                onChange={onChange}
                placeholder="Email"
                className="border-2 border-red-400 rounded-full px-6 text-lg text-gray-600 w-full max-w-[395px] h-[53px] outline-none"
              />
            </div>
          </AnimatedText>
          <AnimatedText direction="right">
            <div className="w-full flex items-center gap-3">
              <label
                htmlFor="company"
                className="text-[22px] font-medium min-w-[20%]"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={value.company}
                onChange={onChange}
                placeholder="Company"
                className="border-2 border-red-400 rounded-full px-6 text-lg text-gray-600 w-full max-w-[395px] h-[53px] outline-none"
              />
            </div>
          </AnimatedText>
        </div>
        <div className="w-full">
          <AnimatedText direction="left">
            <div className="w-full flex flex-col items-start gap-3">
              <label
                htmlFor="message"
                className="text-[22px] font-medium min-w-[20%]"
              >
                Notes or special request
              </label>
              <textarea
                name="message"
                id="message"
                value={value.message}
                onChange={onChange}
                rows={5}
                placeholder="Type here.."
                className="border-2 border-red-400 rounded-2xl py-3 px-5 text-lg text-gray-600 w-full max-w-[395px] outline-none"
              ></textarea>
            </div>
          </AnimatedText>
        </div>
      </div>
    </div>
  );
};
