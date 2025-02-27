"use client";
import Navbar from "../components/Navbar";
import { useTranslations, useLocale } from "next-intl";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import {
  Building,
  CircleHelpIcon,
  Phone,
  File,
  UploadCloud,
} from "lucide-react";
import GoogleMaps from "../components/GoogleMaps";
import { toast } from "react-toastify";
import { useState } from "react";

export default function CareerPage() {
  const locale = useLocale();
  const t = useTranslations("CareerPage");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState<File[]>([]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!fullname || !email || !message || !phone) {
      toast.error(`${t("err1")}`);
      return;
    }

    // Phone number validation (xxx-xxx-xxxx or xxxxxxxxxx)
    const phoneRegex =
      /^[2-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$|^[2-9]{1}[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error(`${t("err3")}`);
      return;
    }

    if (files.length < 1) {
      toast.error(`${t("err2")}`);
      return;
    }

    if (files.length > 3) {
      toast.error(`${t("err2")}`);
      return;
    }

    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("fullname", fullname);
      formData.append("phone", phone);
      formData.append("msg", message);

      // Append each inquiry reason as a separate field
      files.forEach((file, index) => {
        formData.append(`file[${index}]`, file);
      });

      await fetch(`/${locale}/api/send-careerr`, {
        method: "POST",
        body: formData,
      });

      toast.success(`${t("success")}`);
    } catch (err) {
      console.error("Failed to send invite:", err);
      toast.error("Failed to send invite. Please try  again later");
    }

    // Reset form fields after submission
    setFullname("");
    setEmail("");
    setMessage("");
    setPhone("");
    setFiles([]); // Reset files array
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      //handleSubmit(event); // Trigger login on Enter key press
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    selectedFiles.forEach((file) => {
      if (file.size <= 10 * 1024 * 1024) {
        setFiles((prev) => [...prev, file]); // Add file if within size limit
      } else {
        console.error(`File "${file.name}" exceeds 10MB limit.`);
        toast.error(`File "${file.name}" exceeds 10MB limit.`);
      }
    });
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />

      <div className="relative w-full h-[50vh] overflow-hidden bg-fixed  mt-[60px]">
        <img
          src="/lawn_mower.jpg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
        >
          <div className="w-[50%] min-h-[100px] h-auto bg-white bg-opacity-70 px-8 py-6 rounded-md shadow-lg">
            <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-center">
              {t("title")}
            </h1>
          </div>
        </motion.div>
      </div>

      <section className="p-10 bg-gradient-to-b from-white to-primaryBlue2/30 shadow-xl">
        <div className="flex flex-col  md:flex-row xl:flex-row 2xl:flex-row justify-around ">
          <div className=" mb-5 md:w-1/2 md:mr-10 lg:w-1/2 lg:mr-10 xl:w-1/2 xl:mr-10 2xl:w-1/2 2xl:mr-10">
            <div className="flex gap-3">
              <CircleHelpIcon className="text-primaryGreen2 w-10 h-10" />
              <h3 className="text-black font-medium text-2xl text-center mb-10">
                {t("subtitle")}
              </h3>
            </div>
            <p className=" text-xl text-justify "> {t("desc")}</p>
          </div>

          <form
            role="form"
            className="flex flex-col border-[3px] border-primaryGreen2 rounded-md p-5 bg-white gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col  w-full">
              <label
                htmlFor="fname"
                className="font-medium text-lg text-primaryGreen2"
              >
                {" "}
                {t("fullname")} *
              </label>
              <input
                type="text"
                id="fname"
                value={fullname}
                className=" py-1 pl-2 bg-primaryGreen2/30 rounded-md "
                onChange={(e) => setFullname(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-required="true"
              ></input>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-row gap-3">
              <div className="flex flex-col  w-full ">
                <label
                  htmlFor="email"
                  className="font-medium text-lg text-primaryGreen2"
                >
                  {" "}
                  {t("email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  className=" py-1 pl-2 bg-primaryGreen2/30 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                  aria-required="true"
                ></input>
              </div>
              <div className="flex flex-col w-full ">
                <label
                  htmlFor="tel"
                  className="font-medium text-lg text-primaryGreen2"
                >
                  {" "}
                  {t("phone")} *
                </label>
                <input
                  type="tel"
                  id="tel"
                  value={phone}
                  className=" py-1 pl-2 bg-primaryGreen2/30 rounded-md"
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></input>
              </div>
            </div>
            <label
              htmlFor="msg"
              className="font-medium text-lg text-primaryGreen2"
            >
              {" "}
              {t("msg")} *
            </label>
            <textarea
              className=" py-1 pl-2 bg-primaryGreen2/30 rounded-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            {/* File Upload */}
            <div>
              <label
                htmlFor="file-upload"
                className="font-medium text-lg text-primaryGreen2"
              >
                CV *
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-2 py-5">
                <div className="text-center">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-300" />
                  <label
                    htmlFor="file-upload"
                    className="relative mt-4 inline-block rounded-md bg-primaryGreen px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2 cursor-pointer"
                  >
                    {t("uploadfiles")}
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </label>

                  {/* Display Selected Files */}
                  {!!files.length && (
                    <div className="mt-4 text-left">
                      <p className="text-sm font-medium text-primaryGray mb-2">
                        {t("attached")}:
                      </p>
                      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                        {files.map((file, idx) => {
                          return (
                            <li
                              key={`${file.name}-${idx}`}
                              className="relative flex items-center gap-3 rounded-md border border-gray-200 bg-white p-3 shadow-sm"
                            >
                              <button
                                type="button"
                                onClick={() => handleRemoveFile(idx)}
                                className="absolute top-1 right-1 rounded-full bg-white text-gray-400 hover:text-red-600"
                              >
                                ✕
                              </button>
                              <File className="h-8 w-8 text-gray-300" />

                              <span className="text-sm text-gray-600 truncate max-w-[8rem]">
                                {file.name}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <button
              type="submit"
              role="button"
              className="bg-[#8CC63F]  mt-5 text-white text-xl font-medium rounded-lg px-6 py-3 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#7baf33] focus:outline-none focus:ring-2 focus:ring-[#8CC63F] focus:ring-offset-2 mb-5"
            >
              {" "}
              {t("submit")}
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white p-10 mt-10">
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
