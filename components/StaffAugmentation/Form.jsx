"use client";
import React, { useState } from "react";
import { HiMiniArrowDownLeft } from "react-icons/hi2";
import { IoArrowUp } from "react-icons/io5";
import { StepFive, StepFour, StepOne, StepThree, StepTwo } from "./FormSteps";
import AnimatedText from "./AnimatedText";

const Form = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [currentStage, setCurrentStage] = useState("");
  const [selectedRoles, setSelectedRoles] = useState("");
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    workEmail: "",
    company: "",
    message: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPersonalInfo((values) => ({ ...values, [name]: value }));
  };

  const [step, setStep] = useState(1);

  const resetForm = () => {
    setSelectedProject("");
    setCurrentStage("");
    setSelectedRoles("");
    setSelectedExperienceLevel("");
    setTeamSize("");
    setProjectDuration("");
    setTimeZone("");
    setBudgetRange("");
    setPersonalInfo({
      fullName: "",
      workEmail: "",
      company: "",
      message: "",
    });
    setStep(1); // Reset to the first step
  };

  const handleSubmit = async () => {
    // Collect all form data
    const formData = {
      selectedProject,
      currentStage,
      selectedRoles,
      selectedExperienceLevel,
      teamSize,
      projectDuration,
      budgetRange,
      timeZone,
      personalInfo,
    };

    console.log("Form data to submit:", formData);

    // --- Add your actual submission logic here ---
    // Example: Sending data to an API
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('/api/submit-form', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      // const result = await response.json();
      // console.log('Submission successful:', result);

      // Simulate API call for demonstration
      // await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      // console.log("Form submitted successfully!");
      // alert("Form Submitted Successfully!"); // Or show a more elegant success message

      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error("Form submission failed:", error);
      // alert("Form submission failed. Please try again."); // Or show an error message
    }
  };

  const handleNext = () => {
    // Step-specific validation
    if (step === 1 && (!selectedProject || !currentStage)) {
      alert("Please select a project type and current stage.");
      return;
    }
    if (step === 2 && (!selectedRoles || !selectedExperienceLevel)) {
      alert("Please select roles and experience level.");
      return;
    }
    if (step === 3 && (!teamSize || !projectDuration)) {
      alert("Please select team size and project duration.");
      return;
    }
    if (step === 4 && (!budgetRange || !timeZone)) {
      alert("Please select budget range and time zone.");
      return;
    }
    if (
      step === 5 &&
      (!personalInfo?.fullName ||
        !personalInfo?.workEmail ||
        !personalInfo?.company ||
        !personalInfo?.message)
    ) {
      alert("Please fill in all personal information fields.");
      return;
    }

    if (step === 5) {
      // If it's the last step and validation passes, submit the form
      handleSubmit();
    } else {
      // Otherwise, just move to the next step
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const progress = (step / 5) * 100;

  return (
    <section className="w-full">
      <form className="w-full mt-10 midlg:mt-14">
        {step === 1 && (
          <StepOne
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
        )}

        {step === 2 && (
          <StepTwo
            selectedRoles={selectedRoles}
            setSelectedRoles={setSelectedRoles}
            selectedExperienceLevel={selectedExperienceLevel}
            setSelectedExperienceLevel={setSelectedExperienceLevel}
          />
        )}

        {step === 3 && (
          <StepThree
            teamSize={teamSize}
            setTeamSize={setTeamSize}
            projectDuration={projectDuration}
            setProjectDuration={setProjectDuration}
          />
        )}

        {step === 4 && (
          <StepFour
            budgetRange={budgetRange}
            setBudgetRange={setBudgetRange}
            timeZone={timeZone}
            setTimeZone={setTimeZone}
          />
        )}

        {step === 5 && (
          <StepFive value={personalInfo} onChange={handleOnChange} />
        )}

        <AnimatedText>
          <div className="w-full mt-10 flex flex-col items-start gap-2">
            <p className="text-lg text-[#212121D9]">{progress}% complete</p>
            <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-500 transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </AnimatedText>

        <div className="w-full flex items-center justify-between mt-10">
          <div className="flex items-center">
            {step > 1 && (
              <AnimatedText>
                <div className="flex items-center gap-1">
                  <HiMiniArrowDownLeft className="text-[#767676] text-2xl lg:text-3xl" />
                  <button
                    type="button"
                    onClick={handleBack}
                    className="text-xl md:text-2xl lg:text-[26px] font-medium text-[#767676] underline"
                  >
                    Back
                  </button>
                </div>
              </AnimatedText>
            )}
          </div>

          <div className="">
            <AnimatedText>
              <button
                type="button"
                onClick={handleNext}
                className="red-bg text-white lg:w-[168px] lg:h-[58px] flex items-center justify-center gap-1 text-xl md:text-2xl lg:text-[26px] px-5 py-3 lg:px-0 lg:py-0 font-medium rounded-full"
              >
                {step === 5 ? "Submit" : "Next"}{" "}
                <IoArrowUp className="text-2xl lg:text-3xl rotate-45" />
              </button>
            </AnimatedText>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
