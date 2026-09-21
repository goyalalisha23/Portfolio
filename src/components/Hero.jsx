import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaReact,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-5 sm:px-6 pt-28 pb-16 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 md:gap-12 items-center">


        {/* ================= LEFT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          {/* Small introduction */}

          <p className="text-purple-400 text-lg mb-4">
            Hello, I'm
          </p>


          {/* Main heading */}

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">

            Alisha

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Frontend Developer
            </span>

          </h1>


          {/* Description */}

          <p className="text-gray-400 text-base sm:text-lg mt-6 max-w-xl mx-auto md:mx-0 leading-8">
            I create modern, responsive and interactive websites
            using React, JavaScript and Tailwind CSS.
          </p>


          {/* Buttons */}

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

            {/* View Projects */}

            <a
              href="#projects"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 sm:px-6 py-3 rounded-xl font-semibold transition duration-300"
            >
              View Projects

              <FaArrowRight />
            </a>


            {/* Contact */}

            <a
              href="#contact"
              className="border border-white/20 hover:border-purple-500 px-5 sm:px-6 py-3 rounded-xl transition duration-300"
            >
              Contact Me
            </a>

          </div>


          {/* Social icons */}

          <div className="flex justify-center md:justify-start gap-5 mt-8 text-2xl text-gray-400">

            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>


            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-400 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>



        {/* ================= RIGHT SIDE ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative mt-8 md:mt-0"
        >

          {/* Purple glow behind image */}

          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-purple-600/30 blur-3xl rounded-full">
          </div>


          {/* Profile image + floating elements */}

          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >


            {/* ================= PROFILE IMAGE ================= */}

            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">

              {/* Image glow */}

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-50">
              </div>


              {/* Image */}

              <img
                src={profile}
                alt="Alisha"
                className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10"
              />

            </div>



            {/* ================= FLOATING REACT ================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-5 left-0 sm:-left-10 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-2xl shadow-xl"
            >

              <FaReact className="text-3xl sm:text-4xl text-cyan-400" />

            </motion.div>



            {/* ================= JAVASCRIPT ================= */}

            <motion.div
              animate={{
                y: [0, 12, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-16 right-0 sm:-right-10 bg-slate-900/90 backdrop-blur-xl border border-white/10 p-3 sm:p-4 rounded-2xl shadow-xl"
            >

              <FaJs className="text-3xl sm:text-4xl text-yellow-400" />

            </motion.div>



            {/* ================= TAILWIND ================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 right-0 sm:-right-8 bg-slate-900/90 backdrop-blur-xl border border-white/10 px-3 sm:px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2"
            >

              <SiTailwindcss className="text-2xl sm:text-3xl text-cyan-400" />

              <span className="text-xs sm:text-sm text-gray-300">
                Tailwind
              </span>

            </motion.div>



            {/* ================= AVAILABLE BADGE ================= */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-0 sm:-left-16 bg-slate-900/90 backdrop-blur-xl border border-white/10 px-3 sm:px-4 py-3 rounded-2xl shadow-xl"
            >

              <div className="flex items-center gap-2">

                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse">
                </span>

                <span className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                  Available for work
                </span>

              </div>

            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;