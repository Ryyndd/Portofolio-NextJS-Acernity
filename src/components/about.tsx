'use client'

import { motion } from 'framer-motion'
import { MarqueeDemo } from './techstack-marquee'
import profile from "@/public/profile.jpg";
import Image from 'next/image';
import { FadeText } from './ui/fade'

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-light italic mb-6">
            <FadeText
                className="text-white"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.5 } },
                }}
                text="where"
              />
              <span className="block font-bold not-italic">
                <FadeText
                  className="text-white"
                  direction="right"
                  framerProps={{
                    show: { transition: { delay: 0.8 } },
                  }}
                  text="EXPERIENCE"
                />
                <FadeText
                  className="text-white"
                  direction="right"
                  framerProps={{
                    show: { transition: { delay: 1 } },
                  }}
                  text="BUILDS"
                />
                <FadeText
                  className="text-white"
                  direction="down"
                  framerProps={{
                    show: { transition: { delay: 1.2 } },
                  }}
                  text="CHARACTER"
                />
                
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
            I am a student at Politeknik Negeri Madiun majoring in Information Technology. 
            I have experience with various technologies such as Laravel, PHP, JavaScript, React,
            Kotlin, and Python. My focus is to become a skilled full-stack developer and software engineer, 
            while also mastering internet networking. Through projects, I’ve learned to integrate backend 
            frameworks like Laravel with frontend tools like React and JavaScript, and I’ve explored 
            mobile development with Kotlin. My passion for technology motivates me to keep learning and contribute to innovative solutions.
            </p>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl"
            >
              <Image
                src={profile}
                alt="About section illustration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        <MarqueeDemo />
      </motion.div>
    </section>
  )
}

