"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import "../[locale]/globals.css";
import Navbar from "../[locale]/components/Navbar";

export default function HomePage() {
  const t = useTranslations("HomePage"); //calling homepage data fom the messages json. T is the object homepage
  return (
    <div>
      <Navbar />
      <h1>{t("title")}</h1>
      <Link href="/contact">{t("contact")}</Link>
    </div>
  );
}
