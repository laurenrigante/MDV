"use client";
import Navbar from "../components/Navbar";
import { useTranslations, useLocale } from "next-intl";
import Footer from "../components/footer";
import { motion } from "framer-motion";
import { Building, CircleHelpIcon, Phone } from "lucide-react";
import GoogleMaps from "../components/GoogleMaps";
import { toast } from "react-toastify";
import { useState } from "react";

export default function ContactPage() {
  const locale = useLocale();
  const t = useTranslations("ContactPage");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<string[]>([]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    if (!fullname || !email || !message || !phone || !company) {
      toast.error(`${t("err1")}`);
      return;
    }

    if (selectedInquiry.length === 0) {
      toast.error(`${t("err2")}`);
      return;
    }

    // Phone number validation (xxx-xxx-xxxx or xxxxxxxxxx)
    const phoneRegex =
      /^[2-9]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}$|^[2-9]{1}[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      toast.error(`${t("err3")}`);
      return;
    }

    //use resend to send this to mikes work email address
    try {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("fullname", fullname);
      formData.append("phone", phone);
      formData.append("company", company);
      formData.append("msg", message);

      // Append each inquiry reason as a separate field
      selectedInquiry.forEach((inquiry, index) => {
        formData.append(`inquiry[${index}]`, inquiry);
      });

      await fetch(`/${locale}/api/send-contact`, {
        method: "POST",
        body: formData,
      });
      toast.success(`${t("success")}`);
      console.log(" (1) FORM SENT SUCCESSFULLY================================================================================================");
      console.log("name: "+ fullname+ "\nemail: "+ email+"\nphone: "+phone+"\ncompany: "+company+"\nmsg: "+message);
    } catch (err) {
      console.error("(1)Failed to send invite====================================================================\n", err);
      toast.error("Failed to send invite. Please try  again later");
    }
    // Reset form fields after submission
    setFullname("");
    setCompany("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSelectedInquiry([]);
  };

  const handleInquiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedInquiry((prevSelected) =>
      e.target.checked
        ? [...prevSelected, value]
        : prevSelected.filter((inquiry) => inquiry !== value)
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSubmit(event); // Trigger login on Enter key press
    }
  };

  return (
    <div>
      <Navbar />

      <div className="relative w-full h-[50vh] overflow-hidden bg-fixed  mt-[60px]">
        <img
          src="/lawn.jpg"
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

      <section className=" shadow-xl p-10 bg-gradient-to-b from-white to-primaryBlue2/30">
        <div className="flex flex-col  md:flex-row xl:flex-row 2xl:flex-row justify-around ">
          <div className=" mb-5 md:w-1/2 md:mr-10 lg:w-1/2 lg:mr-10 xl:w-1/2 xl:mr-10 2xl:w-1/2 2xl:mr-10">
            <div className="flex gap-3">
              <CircleHelpIcon className="text-primaryGreen2 w-10 h-10" />
              <h3 className="text-black font-medium text-2xl text-center mb-10">
                {t("subtitle")}
              </h3>
            </div>
            <p className=" text-xl text-justify "> {t("desc")}</p>

            <div className="mt-10">
              <p className=" w-auto font-medium text-xl text-justify text-primaryBlue  inline border-b-2 border-primaryBlue shadow-xl">
                {" "}
                {t("plz")}{" "}
              </p>
              <p className="mt-3 font-medium text-xl text-justify text-primaryBlue ">
                {t("plzd")}
              </p>
            </div>
          </div>

          <form
            role="form"
            className="flex flex-col border-[3px] border-primaryGreen2 rounded-md p-5 bg-white gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row md:flex-row gap-3 ">
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

              <div className="flex flex-col  w-full ">
                <label
                  htmlFor="company"
                  className="font-medium text-lg text-primaryGreen2"
                >
                  {" "}
                  {t("company")} *
                </label>
                <input
                  type="text"
                  id="company"
                  value={company}
                  className=" py-1 pl-2 bg-primaryGreen2/30 rounded-md"
                  onChange={(e) => setCompany(e.target.value)}
                  onKeyDown={handleKeyDown}
                ></input>
              </div>
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
              <div className="flex flex-col  w-full ">
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

            <fieldset>
              <legend className="font-medium text-lg text-primaryGreen2">
                {t("inquiryTopic")} *
              </legend>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="landscaping"
                    name="inquiry"
                    type="checkbox"
                    value="landscaping"
                    className="h-4 w-4 accent-primaryGreen2  border-gray-300 rounded focus:ring-primaryGreen2"
                    onChange={handleInquiryChange}
                  />
                  <label
                    htmlFor="landscaping"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {t("landscaping")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="snow_removal"
                    name="inquiry"
                    type="checkbox"
                    value="snow_removal"
                    className="h-4 w-4 accent-primaryGreen2  border-gray-300 rounded focus:ring-[#8CC63F]"
                    onChange={handleInquiryChange}
                  />
                  <label
                    htmlFor="snow_removal"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {t("snowremoval")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="landscaping"
                    name="inquiry"
                    type="checkbox"
                    value="landscaping"
                    className="h-4 w-4 accent-primaryGreen2  border-gray-300 rounded focus:ring-primaryGreen2"
                    onChange={handleInquiryChange}
                  />
                  <label
                    htmlFor="landscaping"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {t("slopemow")}
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="other"
                    name="inquiry"
                    type="checkbox"
                    value="other"
                    className="h-4 w-4 accent-primaryGreen2  border-gray-300 rounded focus:ring-[#8CC63F]"
                    onChange={handleInquiryChange}
                  />
                  <label
                    htmlFor="other"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {t("other")}
                  </label>
                </div>
              </div>
            </fieldset>

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
