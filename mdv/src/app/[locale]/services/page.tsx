"use client";
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import VideoBanner from "../components/VideoBanner";
import Footer from "../components/footer";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ImageSlider from "../components/ImageSlider";

export default function ContactPage() {
  const t = useTranslations("ServicePage");
  const [showBenefits, seetShowBenefits] = useState(false);

  const toggleBenefits = () => seetShowBenefits(!showBenefits);

  const imagesLandscaping = ["/1-g.jpg", "/flowers.jpg", "/mowerWater.jpg"];
  return (
    <div>
      <Navbar />

      <VideoBanner
        keyName="ServicePage"
        title="title"
        subtitle="subtitle"
        videoURL="/SchoolYardMowV.webm"
      />

      <section
        id="1"
        className=" pt-20 flex flex-col md:flex-row items-center  md:shadow-none sm:shadow-xl bg-gradient-to-b from-primaryGreen2/30 to-transparent"
      >
        <div className="mx-10 my-10 w-full md:w-1/2 flex justify-center">
          <div className=" mx-10 text-center md:text-left">
            <h2 className="font-bold text-[#8CC63F] text-4xl mb-4 ">
              {" "}
              {t("landscaping")}
            </h2>
            <p className="text-lg text-justify mb-10">{t("landscapingdesc")}</p>
            <h3 className="font-semibold text-xl mb-2 text-left">
              {t("landscapeSubtitle")}
            </h3>
            <ul className="list-disc pl-10 text-md text-left space-y-2 ">
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
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center mt-10  mb-10">
          <div className="w-full ">
            <ImageSlider images={imagesLandscaping} />
          </div>
        </div>
      </section>

      <div className=" bg-gradient-to-b from-transparent to-primaryBlue/20 ">
        <section
          id="2"
          className=" mx-10w-full flex flex-col sm:flex-row items-center "
        >
          <div className="w-full sm:w-1/2">
            <div className="text-center md:text-left mx-10 mb-10">
              <h1 className=" font-bold text-primaryGreen text-4xl mb-4  sm:mt-32 md:mt-0">
                {t("slopemowing")}
              </h1>

              <h3 className=" text-lg text-justify mb-10">
                {t("slopemowingdesc")}
              </h3>
            </div>

            <div className=" ml-10 flex items-center justify-left mt-5 hidden sm:flex">
              <p className=" mr-5 mb-5 font-medium text-primaryGreen2 text-sm sm:text-lg md:text-xl">
                {" "}
                {t("learn")}
              </p>

              <button
                onClick={toggleBenefits}
                className="p-4 rounded-full text-white bg-[#628D2A] transition-all duration-500 hover:text-[#628D2A] hover:bg-white ease-in-out transform hover:scale-110"
              >
                {showBenefits ? (
                  <ArrowUp className="w-5 h-5" />
                ) : (
                  <ArrowDown className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          <div className="w-full  sm:w-1/2 bg-gradient-to-b from-transparent to-transparent p-8">
            <h1 className=" text-center font-medium text-primaryGreen2 md:text-2xl ">
              AGRIA 9600
            </h1>

            <div className=" mt-2 relative w-full h-[60vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] flex justify-center items-center overflow-hidden">
              <div className="w-full sm:w-96 md:w-104 lg:w-128 xl:w-144 2xl:w-160 h-full max-w-full flex justify-center items-center  border-[10px] border-primaryGreen2/80 rounded-md ">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/SlopeMow.mp4" type="video/mp4" />
                  {t("browsersupport")}
                </video>
              </div>
            </div>

            <div className="flex items-center justify-center mt-5 sm:hidden">
              <p className=" mr-10 mb-5 font-medium text-primaryGreen2 text-lg  md:text-xl">
                {" "}
                {t("learn")}
              </p>

              <button
                onClick={toggleBenefits}
                className="p-4 rounded-full text-white bg-[#628D2A] transition-all duration-500 hover:text-[#628D2A] hover:bg-white ease-in-out transform hover:scale-110 "
              >
                {showBenefits ? (
                  <ArrowUp className="w-5 h-5" />
                ) : (
                  <ArrowDown className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </section>

        <section className="pb-20 px-10 ">
          {showBenefits && (
            <div>
              <h3 className="font-bold text-xl sm:text-2xl text-[#8CC63F] mb-6">
                {t("benefits")}
              </h3>
              <ul className="list-none space-y-6">
                <li>
                  <h4 className="text-md sm:text-xl font-semibold">
                    {t("li1")}
                  </h4>
                  <p className="text-sm sm:text-lg">{t("liC1")}</p>
                </li>
                <li>
                  <h4 className="text-md sm:text-xl font-semibold">
                    {t("li2")}
                  </h4>
                  <p className="text-sm sm:text-lg">{t("liC2")}</p>
                </li>
                <li>
                  <h4 className="text-md sm:text-xl font-semibold">
                    {t("li3")}
                  </h4>
                  <p className="text-sm sm:text-lg">{t("liC3")}</p>
                </li>
                <li>
                  <h4 className="text-md sm:text-xl font-semibold">
                    {t("li4")}
                  </h4>
                  <p className="text-sm sm:text-lg">{t("liC4")}</p>
                </li>
                <li>
                  <h4 className="text-md sm:text-xl font-semibold">
                    {t("li5")}
                  </h4>
                  <p className="text-sm sm:text-lg">{t("li5C")}</p>
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>

      <section
        id="3"
        className=" mb-20 flex flex-col md:flex-row items-center justify-between  bg-gradient-to-b from-primaryBlue/20 to-transparent "
      >
        <div className="mx-10 w-full md:w-1/2 flex justify-center">
          <div className=" mx-10 text-center md:text-left">
            <h2 className="font-bold text-primaryBlue text-4xl mb-4">
              {" "}
              {t("snowremoval")}
            </h2>

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
              <li className=" text-lg font-semibold text-primaryBlue2">
                {t("sli")}
              </li>
              <li className="text-lg font-semibold text-primaryBlue2">
                {t("sli2")}
              </li>
              <li className="text-lg font-semibold text-primaryBlue2">
                {t("sli3")}
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center justify-around mt-10 gap-3">
          <div className="w-full">
            <ImageSlider images={["/snow.jpg", "/snow5.jpg"]} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
