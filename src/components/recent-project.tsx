"use client"

import { Safari} from "@/components/ui/safari";
import { motion } from 'framer-motion';
import smartUmkm from '@/public/smart_umkm.png';
import { ShineBorder } from "./ui/shine-border";

export function SafariDemo() {
  return (
    <div className="w-full mb-5">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-3  flex justify-center items-center "
        >
          Latest Projects
        </motion.h2>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-6 text-lg text-center md:text-xl text-gray-300 max-w-2xl mb-10 mx-auto">
                Smart UMKM is a mobile-based application designed as a Point of Sale 
                (POS) system, enabling users to perform transactions, manage products, 
                oversee employee management, and record transaction data efficiently.
        </motion.p>
        <motion.div 
          drag
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale:1.05,
            transition: { duration : 0.2}
          }}
          viewport={{ once: true }}
          className="relative w-full flex items-center justify-center px-8">
          <ShineBorder
            borderWidth={3}
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl w-full lg:w-3/5"
            color={["#d9e9f6", "#2b6684", "#7caac2"]}
          >
              <Safari
              url="smartumkm.design"
              className="w-full h-auto"
              imageSrc={smartUmkm}
                />
          </ShineBorder>
        </motion.div>
    </div>
  );
}
