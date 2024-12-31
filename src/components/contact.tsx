'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { ConfettiButton } from './ui/confetti'

export function Contact() {
  return (
    <section id="contact" className="min-h-[calc(100dvh-20rem)] py-20 px-6">
      <div className="max-w-6xl flex justify-center items-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-400 mb-12">
            Have a project in mind? Lets work together to create something amazing.
          </p>
            <ConfettiButton className="bg-white text-black px-14 py-10 rounded-full font-medium text-lg mb-12" >Let's talk</ConfettiButton>
          <div className="flex justify-center gap-8">
            <motion.a
              href="https://github.com/Ryyndd"
              whileHover={{ y: -5 }}
              className="p-4 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ferry-fernando-0333302a5/"
              whileHover={{ y: -5 }}
              className="p-4 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ferynnd/"
              whileHover={{ y: -5 }}
              className="p-4 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:ferryfernando164@gmail.com"
              whileHover={{ y: -5 }}
              className="p-4 border border-white/20 rounded-full hover:border-white/40 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

