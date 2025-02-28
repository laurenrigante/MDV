import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "MDV: Paysagement |  Déneigement | Commercial ",
  description: "Paysagement et Déneigement Commercial",
  openGraph: {
    title: "MDV: Paysagement et Déneigement  Commercial ",
    description: "Paysagement et Déneigement Commercial",
    url: "https://mdv-five.vercel.app",
    siteName: "Paysagiste MDV",
    images: [
      {
        url: "https://https://mdv-five.vercel.app/1200logo.jpg",
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
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph.images[0].alt}
        />
        <meta property="og:type" content={metadata.openGraph.type} />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
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
