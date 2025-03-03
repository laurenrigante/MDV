"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "../[locale]/globals.css";
import Navbar from "../[locale]/components/Navbar";
import { ArrowRight, Building, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "./components/footer";
import GoogleMaps from "./components/GoogleMaps";
import VideoBanner from "./components/VideoBanner";
import ImageBanner from "./components/ImageBanner";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      {/* Show coteau for all devices with screen size small or larger */}
      <div className="hidden md:block">
        <ImageBanner
          keyName="HomePage"
          title="title"
          subtitle="subtitle"
          imageURL="/1-g.jpg"
        />
      </div>
      {/* Show the closeup lawn mowing on mobile devices only, hide on all larger devices */}
      <div className="md:hidden">
        <VideoBanner
          keyName="HomePage"
          title="title"
          subtitle="subtitle"
          videoURL="/CloseMowV.mp4"
        />
      </div>

      <section className=" my-20 flex flex-col md:flex-row items-center justify-between mx-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-[#8CC63F] text-4xl mb-4">
              {" "}
              {t("about")}
            </h2>
            <p className="text-lg text-justify mr-5 mb-10">{t("abtdesc")}</p>
            <Link
              href="/services"
              className="bg-[#8CC63F] text-white text-md sm:text-lg font-medium rounded-lg px-6 py-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none mb-5"
            >
              {" "}
              {t("services")}
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center justify-around mt-10 gap-3">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="lawn_mower.jpg"
              alt="Landscaping"
              className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl border-4 border-[#628D2A] "
            />
            <Link
              href="/services#1"
              className="mt-2 text-lg font-medium hover:text-[#628D2A] transition duration-300 ease-in-out"
            >
              {t("landscaping")}
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="snow_push.png"
              alt="Snow Removal"
              className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl border-4 border-primaryBlue"
            />
            <Link
              href="/services#3"
              className="mt-2 text-lg font-medium hover:text-primaryBlue transition duration-300 ease-in-out"
            >
              {t("snowremoval")}
            </Link>
          </div>
        </div>
      </section>

      <section className=" w-full flex flex-col sm:flex-row items-center shadow-xl shadow-[#8CC63F] bg-gradient-to-b from-transparent to-primaryBlue/20 ">
        <div className="w-full sm:w-1/2">
          <div className="text-center md:text-left mx-10 mb-10">
            <h1 className=" font-bold text-primaryGreen text-4xl mb-4 ">
              {t("slopemowing")}
            </h1>

            <h3 className=" text-lg text-justify mb-10">
              {t("slopemowingdesc")}
            </h3>
            <ul className="list-disc pl-5 text-md text-left space-y-2 mb-10">
              <li className="text-lg font-semibold text-primaryGreen2">
                {" "}
                {t("li1")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {" "}
                {t("li2")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {" "}
                {t("li3")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {" "}
                {t("li4")}
              </li>
              <li className="text-lg font-semibold text-primaryGreen2">
                {" "}
                {t("li5")}
              </li>
            </ul>

            <Link
              href="/services#2"
              className="bg-[#8CC63F] text-white text-md sm:text-lg font-medium rounded-lg px-6 py-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none mb-5"
            >
              {" "}
              {t("slopemowbtn")}
            </Link>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 bg-gradient-to-b from-transparent to-transparent p-8">
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
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="bg-[#628D2A]/50  p-16 flex items-center justify-between px-10 flex-col sm:flex-row sm:items-start"
      >
        <div className="flex flex-col">
          <h3 className="font-bold text-black text-3xl">{t("contact")}</h3>
          <div className="my-5">
            <p className="text-lg sm:text-base">{t("contact2")}</p>
          </div>
        </div>
        <Link
          href="/contact"
          className="p-3 rounded-full text-[#628D2A] bg-white transition-all duration-500 hover:text-white hover:bg-[#628D2A] ease-in-out transform hover:scale-110"
        >
          <ArrowRight className="w-10 h-10" />
        </Link>
      </motion.section>

      <section className="relative w-full h-[60vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] 2xl:h-[40vh] shadow-2xl mb-8">
        <div className="w-1/2 h-full bg-cover bg-center absolute left-0 top-0 hidden sm:block">
          <img
            src="/mdvemp.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 h-full bg-white px-8 py-6 flex flex-col justify-center items-center absolute right-0 top-0">
          <div className="text-left">
            <h1 className="font-bold text-[#8CC63F] text-4xl mb-4 ">
              {t("jobtitle")}
            </h1>
            <h3 className="text-lg text-left mb-8">{t("jobdesc")}</h3>
            <Link
              href="/careers"
              className="bg-[#8CC63F] text-white text-md sm:text-lg md:text-lg lg:text-lg xl:text-lg font-medium rounded-lg px-6 py-3 mt-5 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2"
            >
              {t("applynow")}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white p-10">
        <div className="w-full mx-auto text-center flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl font-bold mb-4 border-b-4 border-primaryGreen inline-block pb-1 px-2">
            {t("waysToReach")}
          </h2>

          <div className="flex items-center">
            <Phone className="mr-3 text-primaryGreen text-sm" />
            <span>(514) 766-5386</span>
          </div>
          <div className="flex items-center mb-3">
            <Building className="mr-3 text-primaryGreen text-sm" />
            <span>8501 Rue Cordner, Lasalle, QC</span>
          </div>

          <GoogleMaps />
        </div>
      </section>
      <Footer />
    </div>
  );
}
