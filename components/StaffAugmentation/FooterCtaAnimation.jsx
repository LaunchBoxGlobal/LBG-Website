import Image from "next/image";
import React from "react";

const FooterCtaAnimation = () => {
  return (
    <div className="items-center justify-center hidden lg:flex w-[456px] h-[446px] relative">
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[140px] w-[140px] rounded-full bg-[#E1E1E1] opacity-75 z-0"></span>
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[180px] w-[180px] rounded-full bg-[#E1E1E1] opacity-50 z-0"></span>
      <span className="animate-ping transition-all duration-500 absolute inline-flex h-[220px] w-[220px] rounded-full bg-[#E1E1E1] opacity-35 z-0"></span>
      {/* <Image
        src={"/staff-augmentation/footer-cta-image.png"}
        alt="footer-cta-image"
        width={147}
        height={143}
        className="relative inline-flex z-10"
      /> */}

      <div className="w-full h-full absolute inset-0">
        <Image
          src={"/staff-augmentation/footer-cta-icons-image.png"}
          alt="footer-cta-icons-image"
          width={391}
          height={377}
          className="absolute left-1/2 -translate-x-1/2 top-5"
        />
      </div>

      {/* profile images */}
      {/* <Image
        src={"/staff-augmentation/profile-image-1.png"}
        alt="profile-image-1"
        width={56}
        height={56}
        className="object-contain absolute top-10 left-40 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-2.png"}
        alt="profile-image-2"
        width={37}
        height={35}
        className="object-contain absolute top-10 right-40 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-3.png"}
        alt="profile-image-3"
        width={37}
        height={35}
        className="object-contain absolute top-24 right-32 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-4.png"}
        alt="profile-image-4"
        width={34}
        height={34}
        className="object-contain absolute top-28 right-52 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-5.png"}
        alt="profile-image-5"
        width={39}
        height={35}
        className="object-contain absolute top-16 left-20 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-6.png"}
        alt="profile-image-6"
        width={55}
        height={55}
        className="object-contain absolute top-28 left-28 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-7.png"}
        alt="profile-image-7"
        width={34}
        height={33}
        className="object-contain absolute top-28 right-10 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-8.png"}
        alt="profile-image-8"
        width={39}
        height={38}
        className="object-contain absolute top-40 right-14 z-10"
      />
      <Image
        src={"/staff-augmentation/profile-image-9.png"}
        alt="profile-image-9"
        width={55}
        height={54}
        className="object-contain absolute top-40 right-28 z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-10.png"}
        alt="profile-image-10"
        width={56}
        height={53}
        className="object-contain absolute top-60 right-20 z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-11.png"}
        alt="profile-image-11"
        width={32}
        height={33}
        className="object-contain absolute bottom-24 right-16 z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-12.png"}
        alt="profile-image-12"
        width={34}
        height={37}
        className="object-contain absolute bottom-40 right-7 z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-13.png"}
        alt="profile-image-13"
        width={55}
        height={54}
        className="object-contain absolute bottom-20 right-32 z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-14.png"}
        alt="profile-image-14"
        width={34}
        height={34}
        className="object-contain absolute bottom-10 right-[40%] z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-15.png"}
        alt="profile-image-15"
        width={56}
        height={50}
        className="object-contain absolute bottom-20 left-[35%] z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-16.png"}
        alt="profile-image-16"
        width={28}
        height={29}
        className="object-contain absolute bottom-36 left-[25%] z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-17.png"}
        alt="profile-image-17"
        width={42}
        height={44}
        className="object-contain absolute bottom-24 left-[15%] z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-18.png"}
        alt="profile-image-18"
        width={61}
        height={56}
        className="object-contain absolute bottom-[45%] left-[15%] z-0"
      />
      <Image
        src={"/staff-augmentation/profile-image-19.png"}
        alt="profile-image-19"
        width={34}
        height={35}
        className="object-contain absolute top-[30%] left-[10%] z-0"
      /> */}
    </div>
  );
};

export default FooterCtaAnimation;
