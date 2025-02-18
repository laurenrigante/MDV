"use client";
import { Locale, routing, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/app/[locale]/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};
export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace({ pathname }, { locale: nextLocale as Locale });
  }
  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="w-[60px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
