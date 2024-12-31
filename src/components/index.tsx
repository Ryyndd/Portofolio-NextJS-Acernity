'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { GradualSpacing } from '@/components/ui/gradual-spacing'
import { WavyBackground } from './ui/wavy-background'

export function Hero() {
  
  return (
  <WavyBackground id="home">
    <div className="flex min-h-screen justify-center items-center relative px-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                  >
                    <div className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <div className="text-white flex gap-5 justify-center">
                        <GradualSpacing
                          className="font-display italic font-light -tracking-widesttext-white before:md:leading-[5rem]"
                          text="I'm a"
                        />
                        <GradualSpacing
                          className="font-display block font-bold md:inline -tracking-widesttext-white before:md:leading-[5rem]"
                          text="FULL-STACK"
                        />{' '}
                      </div>
                      <GradualSpacing
                        className="font-display block font-bold -tracking-widesttext-white before:md:leading-[5rem]"
                        text="DEVELOPER &"
                      />{' '}
                      <GradualSpacing
                        className="font-display block font-bold -tracking-widesttext-white before: md:leading-[5rem]"
                        text="SOFTWARE ENGINEER"
                      />
                    </div>
                    <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        I am a student at Polytechnic State Madiun, majoring in Information 
                        Technology. I am currently learning to become a full-stack developer 
                        and software engineer, with skills in internet networking.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-4">
                        <Link href="#about">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-8 py-3 rounded-full font-medium"
                            >
                                Know more
                            </motion.button>
                        </Link>
                        <Link href="#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-white px-8 py-3 rounded-full font-medium"
                            >
                                Contact
                            </motion.button>
                        </Link>
                    </div>
                  </motion.div>
                </div>
    </WavyBackground>
  )
}

