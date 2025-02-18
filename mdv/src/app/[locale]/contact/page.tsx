"use client";
import Navbar from "../components/Navbar";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("NavbarLinks");
  return (
    <div>
      <Navbar />
      <h1>{t("contact")}</h1>
    </div>
  );
}
