import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "MDV",
  description: "Paysagement et Déneigement Commercial",
  openGraph: {
    title: "MDV",
    description: "Paysagement et Déneigement Commercial",
    url: "https://mdv-five.vercel.app/en",
    siteName: "Paysagiste MDV",
    images: [
      {
        url: "https://images.unsplash.com/photo-1561948951-6898f58f6586",
        width: 1200,
        height: 630,
        alt: "MDV Paysagiste Site Web",
      },
    ],
    type: "website",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <ToastContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
