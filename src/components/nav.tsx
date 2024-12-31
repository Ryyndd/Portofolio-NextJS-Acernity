'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Nav() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
    >
      <Link href="/" className="text-xl font-bold border rounded-full px-4 py-2">
      RynndDEV
      </Link>

    </motion.header>
  )
}

