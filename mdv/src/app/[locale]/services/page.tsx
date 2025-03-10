"use client";
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";
import VideoBanner from "../components/VideoBanner";
import Footer from "../components/footer";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import ImageSlider from "../components/ImageSlider";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ServicePage() {
  const t = useTranslations("ServicePage");
  const [showBenefits, seetShowBenefits] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toggleBenefits = () => seetShowBenefits(!showBenefits);

  const imagesLandscaping = [
    "/coteau.png",
    "/mtl.png",
    "/flowers.jpg",
    "/mowerWater.jpg",
    "/tractor.png",
    "/grassBuilding.jpg",
  ];

  return (
    <div className="max-w-full overflow-hidden">
      <Navbar />

      <VideoBanner
        keyName="ServicePage"
        title="title"
        subtitle="subtitle"
        videoURL="/SchoolYardMowV.mp4"
      />

      <section
        id="1"
        className="pt-20 flex flex-col md:flex-row items-center shadow-xl bg-gradient-to-b from-primaryGreen2/30 to-transparent"
      >
        <div className=" w-full md:w-1/2 flex justify-center">
          <div className=" text-center md:text-left px-6 md:px-8">
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
                {t("lli4")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {t("lli5")}
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

      <div  id="2" className=" bg-gradient-to-b from-transparent to-transparent ">
        <section
          className=" w-full flex flex-col sm:flex-row items-center "
        >
          <div className=" w-full text-center md:text-left px-6 md:px-8 mb-10 pt-10">
            <h1 className=" font-bold text-primaryGreen text-4xl mb-4">
              {t("slopemowing")}
            </h1>

            <h3 className="text-lg text-center mx-auto md:text-justify">
              {t("slopemowingdesc")}
            </h3>
          </div>
        </section>

        <section className="flex flex-col md:flex-row w-full items-center justify-around px-10 pb-10 gap-2">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[50vh] h-[50vh] sm:h-[40vh] flex justify-center items-center border-[10px] border-primaryGreen2/40 rounded-md">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-[50vh] h-[50vh] sm:h-[40vh] flex justify-center items-center border-[10px] border-primaryGreen2/40 rounded-md">
              <img
                src="/slope_mowing_Slanted.jpg"
                alt="Slope_Mower_Img"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="bg-[#628D2A]/30 p-8 flex items-center justify-between px-10 flex-col sm:flex-row sm:items-start shadow-xl"
        >
          <div className="flex flex-col">
            <h3 className="font-bold text-primaryGreen2 text-2xl py-5">
              {t("learn")}
            </h3>
          </div>
          <button
            onClick={toggleBenefits}
            className="p-3 rounded-full text-[#628D2A] bg-white transition-all duration-500 hover:text-white hover:bg-[#628D2A] ease-in-out transform hover:scale-110"
          >
            {showBenefits ? (
              <ArrowUp className="w-10 h-10" />
            ) : (
              <ArrowDown className="w-10 h-10" />
            )}
          </button>
        </motion.section>

        <section className="bg-gradient-to-b from-transparent to-primaryBlue/20">
          {showBenefits && (
            <div className="pb-10 px-6 md:px-8 flex flex-col lg:flex-row items-center lg:items-start">
              <div className="w-full lg:w-1/2 mr-5">
                <h3 className="font-bold text-xl sm:text-2xl text-[#8CC63F] mb-6 pt-10">
                  {t("benefits")}
                </h3>
                <ul className="list-none space-y-6 px-6 md:px-0">
                  <li>
                    <h4 className="text-md sm:text-xl font-semibold">
                      {t("li1")}
                    </h4>
                    <p className="text-sm sm:text-lg text-justify">
                      {t("liC1")}
                    </p>
                  </li>
                  <li>
                    <h4 className="text-md sm:text-xl font-semibold">
                      {t("li2")}
                    </h4>
                    <p className="text-sm sm:text-lg text-justify">
                      {t("liC2")}
                    </p>
                  </li>
                  <li>
                    <h4 className="text-md sm:text-xl font-semibold">
                      {t("li3")}
                    </h4>
                    <p className="text-sm sm:text-lg text-justify">
                      {t("liC3")}
                    </p>
                  </li>
                  <li>
                    <h4 className="text-md sm:text-xl font-semibold">
                      {t("li4")}
                    </h4>
                    <p className="text-sm sm:text-lg text-justify">
                      {t("liC4")}
                    </p>
                  </li>
                  <li>
                    <h4 className="text-md sm:text-xl font-semibold">
                      {t("li5")}
                    </h4>
                    <p className="text-sm sm:text-lg text-justify">
                      {t("li5C")}
                    </p>
                  </li>
                </ul>
              </div>

              <div className="hidden lg:flex lg:w-1/2 justify-center pt-10">
                <video
                  className=" h-full max-h-[700px] object-cover rounded-lg shadow-lg "
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/slopemowmike.mp4" type="video/mp4" />
                  {t("browsersupport")}
                </video>
              </div>
            </div>
          )}
        </section>
      </div>

      <section
        id="3"
        className=" py-20 flex flex-col md:flex-row items-center justify-between  bg-gradient-to-b from-primaryBlue/20 to-transparent"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <div className=" text-center md:text-left px-6 md:px-8">
            <h2 className="font-bold text-primaryBlue text-4xl mb-4">
              {" "}
              {t("snowremoval")}
            </h2>

            <p className="text-lg text-justify  mb-10">
              {t("snowremovaldesc2")}
            </p>
            <p className="text-lg text-justify mb-10">
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
            <ImageSlider images={["/tractor.jpg", "/snow_push.png"]} />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center mb-10 px-6 md:px-8">
        <video
          className="w-full h-auto max-w-[800px] max-h-[500px] object-cover shadow-2xl shadow-primaryBlue/30"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/snow_video_Trimmed.mp4" type="video/mp4" />
          {t("browsersupport")}
        </video>
      </div>

      <Footer />
    </div>
  );
}
