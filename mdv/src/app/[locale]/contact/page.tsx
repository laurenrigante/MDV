"use client";
import Navbar from "../components/Navbar";
import { useTranslations } from "next-intl";
import Footer from "../components/footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <Navbar />

      <div
        className="relative w-full h-[50vh] overflow-hidden bg-fixed bg-bottom bg-cover mt-[60px]"
        style={{ backgroundImage: "url('lawn.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
        >
          <div className="w-[50%] min-h-[200px] h-auto bg-white bg-opacity-70 px-8 py-6 rounded-md shadow-lg">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
              {t("title")}
            </h1>
            <h3 className="text-black text-lg md:text-xl text-center">
              {t("subtitle")}
            </h3>
          </div>
        </motion.div>
      </div>

      <section className="p-10 bg-primaryGray/40">
        <div className="flex justify-around ">
          <div className="w-1/2 ">
            <p className="font-medium text-xl "> {t("desc")}</p>
          </div>
          <form className="flex flex-col border-[3px] border-primaryGreen2 rounded-md p-5 bg-white gap-3 ">
            <div className="flex  gap-3">
              <div className="flex flex-col">
                <label className="font-medium text-lg text-primaryGreen2">
                  {" "}
                  Full name *
                </label>
                <input
                  type="text"
                  id="fname"
                  className=" py-1  bg-primaryGreen2/30 rounded-md"
                ></input>
              </div>

              <div className="flex flex-col">
                <label className="font-medium text-lg text-primaryGreen2">
                  {" "}
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className=" py-1  bg-primaryGreen2/30 rounded-md"
                ></input>
              </div>
            </div>

            <div className="flex  gap-3">
              <div className="flex flex-col">
                <label className="font-medium text-lg text-primaryGreen2">
                  {" "}
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  className=" py-1  bg-primaryGreen2/30 rounded-md"
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-medium text-lg text-primaryGreen2">
                  {" "}
                  Phone
                </label>
                <input
                  type="tel"
                  id="tel"
                  className=" py-1  bg-primaryGreen2/30 rounded-md"
                ></input>
              </div>
            </div>
            <label className="font-medium text-lg text-primaryGreen2">
              {" "}
              Message
            </label>
            <textarea className=" py-1  bg-primaryGreen2/30 rounded-md"></textarea>

            <fieldset>
              <legend className="font-medium text-lg text-primaryGreen2">
                Inquiry Topic *
              </legend>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="landscaping"
                    name="inquiry"
                    type="checkbox"
                    className="h-4 w-4 text-primaryGreen2 border-gray-300 rounded focus:ring-primaryGreen2"
                  />
                  <label
                    htmlFor="landscaping"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Landscaping
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="snow_removal"
                    name="inquiry"
                    type="checkbox"
                    className="h-4 w-4 text-[#8CC63F] border-gray-300 rounded focus:ring-[#8CC63F]"
                  />
                  <label
                    htmlFor="snow_removal"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Snow Removal
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="other"
                    name="inquiry"
                    type="checkbox"
                    className="h-4 w-4 text-[#8CC63F] border-gray-300 rounded focus:ring-[#8CC63F]"
                  />
                  <label
                    htmlFor="other"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Other
                  </label>
                </div>
              </div>
            </fieldset>

            <button className="bg-[#8CC63F]  mt-5 text-white text-xl font-medium rounded-lg px-6 py-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2 mb-5">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="bg-gray-100 p-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h2>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg">Address: 1234 MDV Lane, Laval, QC, Canada</p>
          <p> insert open and close hours</p>
          <p> insert google map things</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
