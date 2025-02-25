import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'fr'],

  // Used when no locale matches
  defaultLocale: 'en',

  pathnames: {
    "/contact": {
      en: "/contact-us",
      fr: "/contactez-nous",
    },
    "/services": {
      en: "/our-services",
      fr: "/nos-services",
    },
    "/services#1":{
      en: "/our-services#1",
      fr: "/nos-services#1",
    },
    "/services#2":{
      en: "/our-services#2",
      fr: "/nos-services#2",
    },
    "/services#3":{
      en: "/our-services#3",
      fr: "/nos-services#3",
    },
    "/careers": {
      en: "/careers",
      fr: "/carrières",
    }
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);