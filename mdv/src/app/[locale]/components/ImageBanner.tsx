"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface ImgBannerProps {
  title: string;
  subtitle: string;
  keyName: string;
  imageURL: string;
}

export default function ImageBanner({
  title,
  subtitle,
  keyName,
  imageURL,
}: ImgBannerProps) {
  const t = useTranslations(keyName);
  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden bg-fixed bg-center bg-cover  shadow-2xl"
      style={{ backgroundImage: `url('${imageURL}')` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[70%] min-h-[200px] h-auto bg-white bg-opacity-70 px-8 py-6 rounded-md shadow-lg">
          <h1 className="text-black text-2xl md:text-4xl lg:text-5xl font-bold text-left mb-4">
            {t(title)}
          </h1>
          <h3 className="text-black text-lg md:text-xl text-left">
            {t(subtitle)}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
