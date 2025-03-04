"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface DropdownProps {
  label: string;
  links: { href: string; text: string }[];
  isMobile?: boolean;
}

export default function Dropdown({
  label,
  links,
  isMobile = false,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center ${
          isOpen ? "text-[#8CC63F]" : "text-primaryGray"
        } hover:text-[#8CC63F] transition duration-300 ease-in-out px-3 py-2 text-base font-medium w-full`}
      >
        {label}
        {isOpen ? (
          <ChevronUp className="ml-1 w-4 h-4 transition-transform" />
        ) : (
          <ChevronDown className="ml-1 w-4 h-4 transition-transform" />
        )}
      </button>
      {isOpen && (
        <div
          className={`${
            isMobile
              ? "block w-full"
              : "absolute mt-2 min-w-[140px] bg-white shadow-lg rounded-md  text-base sm:text-sm md:text-base "
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:text-primaryGreen transition duration-300 ease-in-out w-full"
            >
              {link.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
