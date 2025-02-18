"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "../[locale]/globals.css";
import Navbar from "../[locale]/components/Navbar";

export default function HomePage() {
  const t = useTranslations("HomePage"); //calling homepage data fom the messages json. T is the object homepage
  return (
    <div>
      <Navbar />

      <div
        className="relative w-full h-[60vh] sm:h-[50vh] overflow-hidden bg-fixed bg-center bg-cover mt-[60px]"
        style={{ backgroundImage: "url('/grass.jpg')" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] min-h-[200px] h-auto bg-white bg-opacity-70 px-8 py-6 rounded-md shadow-lg">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-4">
              Commercial Landscaping and Snow Removal
            </h1>
            <h3 className="text-black text-lg md:text-xl text-left">
              With XX years of experience, MDV ensures top-quality service for
              all your landscaping and snow removal needs.
            </h3>
          </div>
        </div>
      </div>

      <h1>{t("title")}</h1>
      <Link href="/contact">{t("contact")}</Link>
      <div className="h-[1000px]"></div>
    </div>
  );
}
