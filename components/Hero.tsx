import { motion } from 'framer-motion'
import type { FC } from 'react'
import Image from 'next/image'


const Hero: FC = () => {
  return (
    <header className="relative bg-[#000913] flex flex-col px-3 justify-between item-center text-white hero">
      {/* Navigation */}
      <nav className="w-full mx-auto flex justify-between items-center py-4 px-6">
        <Image src="/logo.svg" alt="MyLawbrella Logo" width={70} height={68} />

        <ul className="hidden md:flex space-x-6">
          <li>Digital Evidence Toolkit</li>
          <li>Self Guided Toolkit</li>
          <li>Track case status</li>
          <li>Resources</li>
          <li>About Us</li>
        </ul>

        <div className="space-x-3">
          <button className="border  border-white/40 px-4 py-2 rounded-full text-white">
            Login as a Lawyer
          </button>
          <button className="bg-[#04529E] w-[174px] h-[48px] rounded-full text-white">Start Here</button>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-7xl mx-auto flex flex-1 md:flex-row items-center space-y-6 justify-center px-6 py-16 space-y-8 md:space-y-0 md:space-x-8"
>
  <div className="flex-1 flex flex-col items-center mt-2 justify-center text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Welcome to MyLawbrella
    </h1>
    <p className="mb-6 text-lg">When help feels far away</p>
    <button className="bg-[#04529E] w-[237px] h-[48px] rounded-full text-white">Start Here</button>
  </div>
</motion.div>

    </header>
  )
}

export default Hero
