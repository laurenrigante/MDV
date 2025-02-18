import Navbar from "../components/Navbar";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <Navbar />
      <h1>{t("contact")}</h1>
    </div>
  );
}
