"use client";
import { useTranslations } from "next-intl";
import { motion} from "framer-motion";

interface VideoBannerProps {
    title: string;
    subtitle:string;
    keyName: string; 
    videoURL:string;
  }

export default function VideoBanner({ title, subtitle, keyName, videoURL }: VideoBannerProps) {
    const t = useTranslations(keyName); 
  return (
    <div className="relative w-full h-[70vh] overflow-hidden mt-[60px] shadow-2xl">
     
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoURL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
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
