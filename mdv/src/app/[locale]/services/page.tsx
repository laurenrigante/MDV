import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("NavbarLinks");
  return (
    <div>
      <h1>{t("services")}</h1>
    </div>
  );
}
