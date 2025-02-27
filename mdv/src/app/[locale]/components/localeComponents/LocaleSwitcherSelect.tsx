"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({ defaultValue}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onLocaleSelect(nextLocale: string) {
    setIsOpen(false);
    router.replace(
      // @ts-expect-error: The combination of pathname and params is valid.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${
          isOpen ? "text-[#8CC63F]" : "text-primaryGray"
        } hover:text-[#8CC63F] transition duration-300 ease-in-out px-2 md:px-3 py-2  text-base sm:text-sm md:text-base font-medium w-full`}
      >
        <Globe className="text-primaryBlue w-5 h-5 mr-3" />
        {defaultValue.toUpperCase()}
        {isOpen ? (
          <ChevronUp className="ml-1 w-4 h-4 transition-transform" />
        ) : (
          <ChevronDown className="ml-1 w-4 h-4 transition-transform" />
        )}
      </button>
      {isOpen && (
        <div className="block sm:absolute sm:mt-2 sm:min-w-[140px] sm:bg-white sm:shadow-lg sm:rounded-md text-base sm:text-sm md:text-base">
          {routing.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => onLocaleSelect(locale)}
              className="block px-5 py-2 hover:text-primaryGreen transition duration-300 ease-in-out w-full text-left"
            >
              {locale.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
