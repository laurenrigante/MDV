"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "../[locale]/globals.css";
import Navbar from "../[locale]/components/Navbar";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "./components/footer";

export default function HomePage() {
  const t = useTranslations("HomePage"); //calling homepage data fom the messages json. T is the object homepage

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <Navbar />

      <div
        className="relative w-full h-[90vh] sm:h-[70vh] overflow-hidden bg-fixed bg-center bg-cover mt-[60px]"
        style={{ backgroundImage: "url('grass3.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-[70%] min-h-[200px] h-auto bg-white bg-opacity-70 px-8 py-6 rounded-md shadow-lg">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-4">
              Commercial Landscaping and Snow Removal Services
            </h1>
            <h3 className="text-black text-lg md:text-xl text-left">
              With XX years of experience, MDV ensures top-quality service for
              all your landscaping and snow removal needs.
            </h3>
          </div>
        </motion.div>
      </div>

      <section className="mt-10 mb-20 flex flex-col md:flex-row items-center justify-between mx-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="text-center md:text-left">
            <h2 className="font-bold text-[#8CC63F] text-4xl mb-4">About us</h2>
            <p className="text-lg text-justify mr-5 mb-10">
              At MDV, we specialize in commercial
              <span className="text-[#628D2A] font-semibold">
                {" "}
                landscaping{" "}
              </span>
              and
              <span className="text-[#00AEEF] font-semibold">
                {" "}
                snow removal{" "}
              </span>
              services, offering tailored solutions to meet your property’s
              needs. With a focus on quality, reliability, and client
              satisfaction, we’re here to ensure your landscape is always at its
              best, no matter the season.
            </p>
            <button className="bg-[#8CC63F] text-white text-xl font-medium rounded-lg px-6 py-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2 mb-5">
              {" "}
              Learn more about our services
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center justify-around mt-10">
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <img
              src="lawn_mower.jpg"
              alt="Landscaping"
              className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl border-4 border-[#628D2A] "
            />
            <label className="mt-2 text-lg font-medium hover:text-[#628D2A] transition duration-300 ease-in-out">
              Landscaping
            </label>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="snow3.jpg"
              alt="Snow Removal"
              className="w-[200px] h-[200px] rounded-full object-cover shadow-2xl border-4 border-[#628D2A]"
            />
            <label className="mt-2 text-lg font-medium hover:text-[#628D2A] transition duration-300 ease-in-out">
              Snow Removal
            </label>
          </div>
        </div>
      </section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="bg-[#628D2A]/50 mt-5 p-16 flex items-center justify-between px-10 flex-col sm:flex-row sm:items-start"
      >
        <div className="flex flex-col">
          <h3 className="font-bold text-black text-3xl">
            Have a question or need a quote?
          </h3>
          <div className="my-5">
            <p className="text-lg sm:text-base">
              Reach out to us, and we’ll get back to you as soon as possible!
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="p-3 rounded-full text-[#628D2A] bg-white transition-all duration-500 hover:text-white hover:bg-[#628D2A] ease-in-out transform hover:scale-110"
        >
          <ArrowRight className="w-10 h-10" />
        </Link>
      </motion.section>

      <section className="relative w-full h-[60vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh] ">
        <div
          className="w-1/2 h-full bg-cover bg-center absolute left-0 top-0"
          style={{ backgroundImage: "url('MDVEMP.jpg')" }}
        ></div>

        <div className="w-1/2 h-full bg-white px-8 py-6 flex justify-center absolute right-0 top-0">
          <div className="text-left">
            <h1 className="font-bold text-[#8CC63F] text-4xl mb-4 ">
              Looking for a Job?
            </h1>
            <h3 className="text-lg text-left ">
              Do you enjoy working outside and staying active? Submit an
              application to join our team!
            </h3>
            <button className="bg-[#8CC63F] text-white text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg font-medium rounded-lg px-4 sm:px-6 md:px-6 lg:px-6 xl:px-6 py-2 sm:py-3 md:py-3 lg:py-3 xl:py-3 mt-5 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2">
              Apply Now!
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
