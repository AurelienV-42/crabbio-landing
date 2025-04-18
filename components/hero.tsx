"use client";

import { Button } from "@/components/ui/button";
import { Grab as Crab } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToVideo = () => {
    const videoSection = document.querySelector("#video-section");
    if (videoSection) {
      videoSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const openCalendar = () => {
    window.open(
      "https://calendar.notion.so/meet/aurelienvandaele/7a1ol4lla",
      "_blank"
    );
  };

  const openStripeCheckout = () => {
    window.open("https://buy.stripe.com/5kAeXLebj39KdP2fZ2", "_blank");
    setShowPopup(false);
  };

  const changeLanguage = () => {
    const newLocale = router.locale === "en" ? "fr" : "en";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`w-full py-4 px-6 md:px-10 fixed top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-crabbio-blue/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Crab className="text-crabbio-cream h-8 w-8" />
              <span className="text-crabbio-cream font-poppins font-bold text-2xl">
                Crabbio
              </span>
            </Link>
            <span className="bg-crabbio-accent text-crabbio-blue text-xs font-semibold px-2 py-1 rounded-full ml-2 animate-pulse-gentle">
              {t("hero.comingSoon")}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={changeLanguage}
              className="text-crabbio-cream hover:text-crabbio-accent"
            >
              {t("hero.language")}
            </Button>
            <Button variant="default" size="sm" onClick={openCalendar}>
              {t("hero.bookCall")}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="flex items-center justify-center flex-1 pt-20">
        <div className="container-padding max-w-6xl mx-auto text-center">
          <div className="relative mb-4 inline-block">
            <div className="absolute inset-0 bg-crabbio-accent/20 blur-3xl rounded-full"></div>
            <Crab className="text-crabbio-cream h-20 w-20 md:h-24 md:w-24 relative animate-float mb-4 mx-auto" />
          </div>

          <h1 className="text-crabbio-cream font-bold mb-6 leading-tight">
            {t("hero.slogan")}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Button
              variant="default"
              size="lg"
              className="w-full md:w-auto"
              onClick={openCalendar}
            >
              {t("hero.bookCall")}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-auto"
              onClick={() => setShowPopup(true)}
            >
              {t("hero.joinEarlyAdopters")}
            </Button>
          </div>

          {/* <div className="mt-16 max-w-md mx-auto p-3 rounded-lg bg-crabbio-secondary/50 backdrop-blur-sm">
            <p className="text-crabbio-cream text-sm">
              &ldquo;Crabbio gives me peace of mind knowing my sensitive data stays
              private.&rdquo;
            </p>
            <p className="text-crabbio-accent text-xs mt-2">
              — Jane Doe, CEO at TechPrivacy
            </p>
          </div> */}
        </div>
      </div>

      {/* Early Adopters Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-crabbio-blue max-w-md rounded-lg p-6 relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-crabbio-cream hover:text-crabbio-accent"
              onClick={() => setShowPopup(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <h3 className="text-xl font-bold text-crabbio-cream mb-3">
              {t("hero.earlyAdoptersTitle")}
            </h3>
            <p className="text-crabbio-cream mb-4">
              {t("hero.earlyAdoptersDescription")}
            </p>
            <ul className="text-crabbio-cream mb-4 list-disc pl-5 space-y-1">
              <li>{t("hero.benefits.discount")}</li>
              <li>{t("hero.benefits.priority")}</li>
              <li>{t("hero.benefits.access")}</li>
              <li>{t("hero.benefits.shape")}</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <Button
                variant="default"
                className="w-full"
                onClick={openStripeCheckout}
              >
                {t("hero.secureSpot")}
              </Button>
              <Button
                variant="outline"
                className="w-auto"
                onClick={() => setShowPopup(false)}
              >
                {t("hero.cancel")}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <button
        onClick={scrollToVideo}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none focus:outline-none hover:scale-110 transition-transform"
        aria-label="Scroll to video section"
      >
        <div className="w-10 h-10 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-crabbio-cream"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </button>
    </section>
  );
}
