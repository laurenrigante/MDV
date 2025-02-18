"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "./localeComponents/LocaleSwitcher";
import Image from "next/image";
import "../../[locale]/globals.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const generateLink = (path: string) => `/${locale}${path}`;

  return (
    <nav className="w-full  shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={generateLink("/")}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={60}
            className="cursor-pointer"
          ></Image>
        </Link>

        <div className="hidden md:flex space-x-6 text-primaryGray">
          <Link
            href={generateLink("/")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("home")}
          </Link>
          <Link
            href={generateLink("/services")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("services")}
          </Link>
          <Link
            href={generateLink("/careers")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("careers")}
          </Link>
          <Link
            href={generateLink("/contact")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("contact")}
          </Link>
          <LocaleSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="hidden md:flex space-x-6 text-primaryGray">
          <Link
            href={generateLink("/")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("home")}
          </Link>
          <Link
            href={generateLink("/services")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("services")}
          </Link>
          <Link
            href={generateLink("/careers")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("careers")}
          </Link>
          <Link
            href={generateLink("/contact")}
            className="hover:text-[#8CC63F] transition duration-300 ease-in-out"
          >
            {t("contact")}
          </Link>
          <LocaleSwitcher />
        </div>
      )}
    </nav>
  );
}
