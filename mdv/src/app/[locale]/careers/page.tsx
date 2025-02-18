'use client';
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const t = useTranslations("NavbarLinks");
  return (
    <div>
      <Navbar />
      <h1>{t("careers")}</h1>
    </div>
  );
}
