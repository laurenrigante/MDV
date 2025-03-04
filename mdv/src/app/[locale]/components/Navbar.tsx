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
import Dropdown from "./Dropdown";

export default function Navbar() {
  const t = useTranslations("NavbarLinks");
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = useLocale();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const generateLink = (path: string) => `/${locale}${path}`;

  return (
    <Disclosure as="nav" className="bg-white shadow-lg fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <div className="w-full sm:px-4 md:px-10">
            <div className="flex h-25 justify-between items-center">
              <Link href={generateLink("/")}>
                <Image
                  src="/mdv_horizontal.png"
                  alt="Logo"
                  width={300}
                  height={50}
                  className="cursor-pointer lg:mr-10 max-w-none object-contain"
                />
              </Link>

              <div className="hidden md:flex sm:items-center md:space-x-4 lg:space-x-32">
                <Link
                  href={generateLink("/")}
                  className=" text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out px-2 md:px-3 py-2 text-base font-medium"
                >
                  {t("home")}
                </Link>

                <Dropdown
                  label={t("services")}
                  links={[
                    {
                      href: generateLink("/services#1"),
                      text: t("landscaping"),
                    },
                    {
                      href: generateLink("/services#2"),
                      text: t("slopemowing"),
                    },
                    {
                      href: generateLink("/services#3"),
                      text: t("snowremoval"),
                    },
                  ]}
                  isMobile={false}
                />
                <Link
                  href={generateLink("/careers")}
                  className=" text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out px-2 md:px-3 py-2 text-base font-medium"
                >
                  {t("careers")}
                </Link>
                <Link
                  href={generateLink("/contact")}
                  className=" text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out px-2 md:px-3 py-2 text-base font-medium"
                >
                  {t("contact")}
                </Link>
                <LocaleSwitcher />
              </div>

              <div className=" flex md:hidden mr-2">
                <Disclosure.Button
                  className=" text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out inline-flex items-center justify-center p-2 rounded-md"
                  onClick={toggleMenu}
                >
                  {open ? (
                    <X size={28} className="block h-6 w-6" />
                  ) : (
                    <Menu size={28} className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden ">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href={generateLink("/")}
                className="block text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out px-3 py-2 rounded-md text-base font-medium"
              >
                {t("home")}
              </Link>
              <Dropdown
                label={t("services")}
                links={[
                  {
                    href: generateLink("/services#1"),
                    text: t("landscaping"),
                  },
                  {
                    href: generateLink("/services#2"),
                    text: t("slopemowing"),
                  },
                  {
                    href: generateLink("/services#3"),
                    text: t("snowremoval"),
                  },
                ]}
                isMobile={true}
              />
              <Link
                href={generateLink("/careers")}
                className="block text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out px-3 py-2 rounded-md text-base font-medium"
              >
                {t("careers")}
              </Link>
              <Link
                href={generateLink("/contact")}
                className="block text-primaryGray hover:text-[#8CC63F] transition duration-300 ease-in-out px-3 py-2 rounded-md text-base font-medium"
              >
                {t("contact")}
              </Link>
              <LocaleSwitcher />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
