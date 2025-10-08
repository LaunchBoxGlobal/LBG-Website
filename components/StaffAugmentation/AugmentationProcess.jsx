import AnimatedText from "./AnimatedText";
import Process from "./Process";

const AugmentationProcess = () => {
  return (
    <section className="w-full py-20 midlg:py-32 xl:py-40 bg-[#ffff] padding-x overflow-hidden">
      <section className="w-full flex flex-col items-center justify-center gap-6 text-center">
        <h2 className="section-heading lg:w-[90%] mx-auto">
          Our IT Staff Augmentation <span className="red-text">Process</span>
        </h2>
        <p className="section-paragraph lg:w-[90%] mx-auto">
          We make team expansion simple. Our proven 6-step approach ensures you
          get the right tech talent quickly and efficiently through our IT staff
          augmentation services.
        </p>
      </section>

      <Process />
    </section>
  );
};

export default AugmentationProcess;
