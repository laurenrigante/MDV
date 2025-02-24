"use client";
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import VideoBanner from "../components/VideoBanner";

export default function ContactPage() {
  const t = useTranslations("ServicePage");
  return (
    <div>
      <Navbar />

      <VideoBanner
        keyName="ServicePage"
        title="title"
        subtitle="subtitle"
        videoURL="/SchoolYardMowV.webm"
      />

      <section className="my-10 flex flex-col md:flex-row items-center justify-between mx-10 gap-4">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-[#8CC63F] text-4xl mb-4">
              {" "}
              {t("landscaping")}
            </h2>
            <p className="text-lg text-justify mr-5 mb-10">
              {t("landscapingdesc")}
            </p>
            <h3 className="font-semibold text-xl mb-2 text-left">
              {t("landscapeSubtitle")}
            </h3>
            <ul className="list-disc pl-5 text-md text-left space-y-2 ">
              <li className="text-lg font-semibold text-primaryGreen2">
                {t("lli")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {t("lli2")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {t("lli3")}
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center justify-around mt-10 gap-3">
          <ImageCarousel
            images={[
              "/1-g.jpg",
              "/flowers.jpg",
              "/grassBuilding.jpg",
              "/mowerWater.jpg",
            ]}
          />
        </div>
      </section>

      <section className="relative w-full h-[60vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] shadow-2xl mb-8">
        <div className="w-1/2 h-full bg-cover bg-center absolute left-0 top-0 hidden sm:block">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/SlopeMow.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full sm:w-1/2 h-full bg-white px-8 py-6 flex flex-col justify-center items-center absolute right-0 top-0">
          <div className="text-left">
            <h1 className="font-bold text-[#8CC63F] text-4xl mb-4 ">
              {t("slopemowing")}
            </h1>
            <h3 className="text-lg text-left mb-8">{t("slopemowingdesc")}</h3>
          </div>
        </div>
      </section>

      <section className="px-8 py-6">
        <h3 className="font-bold text-2xl text-[#8CC63F] mb-6">
          {t("benefits")}
        </h3>
        <ul className="list-none space-y-4">
          <li>
            <h4 className="text-xl font-semibold">{t("li1")}</h4>
            <p>{t("liC1")}</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">{t("li2")}</h4>
            <p>{t("liC2")}</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">{t("li3")}</h4>
            <p>{t("liC3")}</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">{t("li4")}</h4>
            <p>{t("liC4")}</p>
          </li>
          <li>
            <h4 className="text-xl font-semibold">{t("li5")}</h4>
            <p>{t("li5C")}</p>
          </li>
        </ul>
      </section>

      <section className="mt-10 mb-20 flex flex-col md:flex-row items-center justify-between mx-10 ">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-[#8CC63F] text-4xl mb-4">
              {" "}
              {t("snowremoval")}
            </h2>
            <p className="text-lg text-justify mr-5 mb-10">
              {t("snowremovaldesc")}
            </p>
            <p className="text-lg text-justify mr-5 mb-10">
              {t("snowremovaldesc2")}
            </p>
            <p className="text-lg text-justify mr-5 mb-10">
              {t("snowremovaldesc3")}
            </p>
            <h3 className="font-semibold text-xl text-left mb-2 ">
              {t("landscapeSubtitle")}
            </h3>
            <ul className="list-disc text-md text-left space-y-2 mx-10">
              <li className=" text-lg font-semibold text-primaryGreen2">
                {t("sli")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {t("sli2")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {t("sli3")}
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center justify-around mt-10 gap-3">
          <ImageCarousel
            images={["/snow.jpg", "/snow2.jpg", "/snow4.jpg", "/snow5.jpg"]}
          />
        </div>
      </section>

      <section></section>
    </div>
  );
}
