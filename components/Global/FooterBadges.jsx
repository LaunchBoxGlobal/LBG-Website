"use client";

import React, { useEffect } from "react";
import Script from "next/script";

export const footer_badges = [
  {
    image: "/designrush-logo.svg",
    width: 146,
    height: 155,
    alt_tag: "designrush logo",
  },
  {
    image: "/sitejabber-logo-vector.svg",
    width: 146,
    height: 140,
    alt_tag: "sitejabber logo",
  },
  {
    image: "/trustpilot-icon.svg",
    width: 159,
    height: 40,
    alt_tag: "trustpilot logo",
  },
  {
    image: "/clutch-icon.png",
    width: 161,
    height: 81,
    alt_tag: "clutch logo",
  },
];

const FooterBadges = () => {
  useEffect(() => {
    // Sitejabber widget initialization (Long Code)
    (function (d, s, id, c) {
      const t = d.getElementsByTagName(s)[0];
      const js = d.createElement(s);
      js.id = id;
      const rC = [];
      let uRC = [];
      let r = 0;

      Array.from(document.querySelectorAll('[class*="stjr-"]')).forEach((r) => {
        rC.push(...Array.from(r.classList).filter((cl) => /^stjr-/.test(cl)));
      });
      uRC = [...new Set(rC)];
      js.src =
        "https://www.sitejabber.com/js/v2/684d711563a1b/widgets.js" +
        (uRC.length
          ? "?widget-classes=" + uRC.join("|")
          : "?widget-classes=stjr-base");
      js.onload = js.onreadystatechange = function () {
        if (!r && (!this.readyState || this.readyState === "complete")) {
          r = 1;
          c();
        }
      };
      t.parentNode.insertBefore(js, t);
    })(document, "script", "sj-widget", function () {});
  }, []);

  return (
    <div className="flex items-center justify-center flex-wrap gap-6 mb-10">
      {footer_badges?.map((badge, i) => {
        return (
          <div className="w-[181px] h-[171px] bg-white flex items-center justify-center p-4">
            <img
              src={badge.image}
              width={badge.width}
              height={badge.height}
              alt={badge.alt_tag}
            />
          </div>
        );
      })}

      {/* ===== Sitejabber Badge ===== */}
      {/* <div className="stjr-badge" data-version="seal_badge"></div> */}

      {/* ===== TrustPilot Widget ===== */}
      {/* <div className="w-[181px] h-[171px] flex flex-col items-center justify-center px-2 bg-white"> */}
      {/* <div
        className=""
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="685d08c929d0eb9d794049b4"
        data-style-height="52px"
        data-style-width="100%"
      >
        <a
          href="https://www.trustpilot.com/review/launchboxglobal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div> */}
      {/* </div> */}

      {/* Clutch Widget */}
      {/* <div className="w-[281px] h-[171px] flex flex-col items-center justify-center px-10 bg-white"> */}
      {/* <div
        className=""
        data-url="https://widget.clutch.co"
        data-widget-type="2"
        data-height="45"
        data-nofollow="false"
        data-expandifr="true"
        data-clutchcompany-id="2535949"
      ></div> */}
      {/* </div> */}

      {/* ===== External Scripts ===== */}
      {/* TrustPilot Script */}
      {/* <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        async
        strategy="afterInteractive"
      /> */}

      {/* Clutch Widget Script */}
      {/* <Script
        src="https://widget.clutch.co/static/js/widget.js"
        strategy="afterInteractive"
      /> */}
    </div>
  );
};

export default FooterBadges;
