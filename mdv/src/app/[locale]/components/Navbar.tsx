"use client";

import { Disclosure } from "@headlessui/react";
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

  const menuItems = (
    <>
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
    </>
  );

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="container mx-auto flex justify-between items-center">
            <Link href={generateLink("/")}>
              <Image
                src="/Logo.png"
                alt="Logo"
                width={100}
                height={60}
                className="cursor-pointer"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-primaryGray">
              {menuItems}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Disclosure.Button
                className="hover:text-[#8CC63F] transition duration-300 ease-in-out mr-5"
                onClick={toggleMenu}
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <Disclosure.Panel className="md:hidden flex flex-col space-y-4 text-primaryGray p-4 bg-white shadow-md">
            {menuItems}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
