import React from "react";
import Link from "next/link";
import Image from "next/image";

export const footer_badges = [
  {
    image: "/designrush-logo.png",
    width: 146,
    height: 155,
    alt_tag: "designrush logo",
    link: "https://www.designrush.com/agency/mobile-app-design-development/florida",
  },
  {
    image: "/sitejabber-logo-vector.svg",
    width: 146,
    height: 140,
    alt_tag: "sitejabber logo",
    link: `https://www.sitejabber.com/reviews/launchboxglobal.com`,
  },
  {
    image: "/trustpilot-icon.svg",
    width: 159,
    height: 40,
    alt_tag: "trustpilot logo",
    link: `https://www.trustpilot.com/review/launchboxglobal.com`,
  },
  {
    image: "/clutch-icon.png",
    width: 161,
    height: 81,
    alt_tag: "clutch logo",
    link: `https://clutch.co/profile/launchbox-global`,
  },
];

const FooterBadges = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-6 mb-10">
      {footer_badges?.map((badge, i) => {
        const ImageElement = (
          <div
            className="relative"
            style={{
              width: `${badge.width}px`,
              height: `${badge.height}px`,
              maxWidth: "100%",
            }}
          >
            <Image
              src={badge.image}
              alt={badge.alt_tag}
              fill
              className="object-contain"
              loading="lazy"
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 146px, 160px"
            />
          </div>
        );

        return (
          <div
            key={i}
            className="w-[181px] h-[171px] bg-white flex items-center justify-center p-4"
          >
            {badge?.link ? (
              <Link href={badge.link} target="_blank">
                {ImageElement}
              </Link>
            ) : (
              ImageElement
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FooterBadges;
