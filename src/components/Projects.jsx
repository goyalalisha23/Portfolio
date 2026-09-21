import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaFileAlt,
  FaMoneyBillWave,
  FaNewspaper,
  FaLock,
  FaFilm,
  FaBoxOpen,
  FaEdit,
} from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-24 px-5 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 mb-2">
            03. My Work
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Things I've
            <span className="text-purple-400">
              {" "}built.
            </span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl text-sm sm:text-base leading-7">
            A collection of projects I've built while learning and
            developing my skills in frontend and full-stack web development.
          </p>
        </motion.div>


        {/* ================= FEATURED PROJECT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-14"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

            {/* ================= AI RESUME BUILDER PREVIEW ================= */}

            <div className="relative group">

              {/* GLOW */}
              <div className="absolute -inset-3 bg-purple-600/20 blur-3xl rounded-3xl">
              </div>

              {/* RESUME BUILDER PREVIEW */}
              <div className="relative rounded-3xl bg-slate-900 border border-white/10 p-4 sm:p-6 shadow-2xl group-hover:border-purple-500/40 transition duration-300">

                {/* TOP BAR */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">

                  <div className="flex gap-2">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full">
                    </span>

                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full">
                    </span>

                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full">
                    </span>
                  </div>

                  <span className="text-[10px] sm:text-xs text-gray-600">
                    ai-resume-builder
                  </span>

                </div>


                {/* HEADER */}
                <div className="flex justify-between items-center gap-4">

                  <div>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      AI Powered
                    </p>

                    <h3 className="text-base sm:text-xl font-bold mt-1">
                      Resume Builder
                    </h3>
                  </div>

                  <FaFileAlt className="text-2xl sm:text-3xl text-purple-400 shrink-0" />

                </div>


                {/* RESUME PREVIEW */}
                <div className="mt-5 sm:mt-6 p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5">

                  <div className="flex items-center gap-3 mb-4">

                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <FaFileAlt className="text-purple-400" />
                    </div>

                    <div>
                      <div className="h-2.5 w-28 bg-white/20 rounded">
                      </div>

                      <div className="h-2 w-20 bg-white/10 rounded mt-2">
                      </div>
                    </div>

                  </div>


                  <div className="space-y-2">

                    <div className="h-2 bg-white/10 rounded w-full">
                    </div>

                    <div className="h-2 bg-white/10 rounded w-11/12">
                    </div>

                    <div className="h-2 bg-white/10 rounded w-4/5">
                    </div>

                  </div>


                  <div className="grid grid-cols-2 gap-3 mt-5">

                    <div className="h-12 rounded-xl bg-purple-500/10 border border-purple-500/10">
                    </div>

                    <div className="h-12 rounded-xl bg-purple-500/10 border border-purple-500/10">
                    </div>

                  </div>

                </div>


                {/* AI STATUS */}
                <div className="flex justify-between mt-4 sm:mt-5">

                  <span className="text-[10px] sm:text-xs text-gray-500">
                    AI Resume Generation
                  </span>

                  <span className="text-[10px] sm:text-xs text-green-400">
                    Powered by Gemini
                  </span>

                </div>

              </div>
            </div>


            {/* ================= PROJECT INFORMATION ================= */}

            <div>

              <p className="text-purple-400 text-xs sm:text-sm">
                ⭐ FEATURED PROJECT
              </p>


              <h3 className="text-3xl sm:text-4xl font-bold mt-3">
                AI Resume Builder
              </h3>


              <p className="text-gray-400 leading-7 mt-5 text-sm sm:text-base">
                A full-stack AI-powered resume builder that helps users
                create professional resumes with an easy-to-use interface
                and AI-assisted content generation.
              </p>


              {/* FEATURES */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">

                <Feature text="AI Resume Generation" />

                <Feature text="Resume Customization" />

                <Feature text="User Data Management" />

                <Feature text="Professional Resume Output" />

              </div>


              {/* TECHNOLOGIES */}

              <div className="flex flex-wrap gap-2 mt-7">

                <Tech name="React" />

                <Tech name="Tailwind CSS" />

                <Tech name="Node.js" />

                <Tech name="Express.js" />

                <Tech name="MongoDB" />

                <Tech name="Gemini AI" />

              </div>


              {/* BUTTONS */}

              <div className="flex flex-wrap gap-3 sm:gap-4 mt-8">

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 sm:px-5 py-3 rounded-xl transition duration-300 text-sm sm:text-base"
                >
                  Live Demo
                  <FaExternalLinkAlt className="text-xs" />
                </a>


                <a
                  href="#"
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-purple-500 px-4 sm:px-5 py-3 rounded-xl transition duration-300 text-sm sm:text-base"
                >
                  GitHub
                  <FaGithub />
                </a>

              </div>

            </div>

          </div>
        </motion.div>


        {/* ================= OTHER PROJECTS ================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-14 md:mt-16">


          {/* CURRENCY CONVERTER */}

          <ProjectCard
            number="01"
            icon={<FaMoneyBillWave />}
            title="Currency Converter"
            description="A responsive currency converter that fetches exchange rates using an API and provides quick currency conversion."
            technologies="React • Tailwind • API"
          />


          {/* TEXT EDITOR */}

          <ProjectCard
            number="02"
            icon={<FaEdit />}
            title="Text Editor"
            description="A simple and responsive text editor built with React that provides useful text editing features."
            technologies="React • Tailwind"
          />


          {/* NEWS HEADLINES */}

          <ProjectCard
            number="03"
            icon={<FaNewspaper />}
            title="News Headlines"
            description="A responsive news website that fetches and displays latest headlines using an API."
            technologies="React • Tailwind • API"
          />


          {/* PASSWORD GENERATOR */}

          <ProjectCard
            number="04"
            icon={<FaLock />}
            title="Password Generator"
            description="A password generator that creates secure and customizable passwords with a clean user interface."
            technologies="React • Tailwind"
          />


          {/* MOVIE EXPLORER */}

          <ProjectCard
            number="05"
            icon={<FaFilm />}
            title="Movie Explorer"
            description="A movie discovery application that allows users to explore movies and view useful movie information."
            technologies="React • API"
          />


          {/* INVENTRA */}

          <ProjectCard
            number="06"
            icon={<FaBoxOpen />}
            title="Inventra"
            description="A smart inventory and sales management system currently under development for managing products, stock, sales and business data."
            technologies="React • Node • Express • MongoDB"
            status="In Development"
          />

        </div>


        {/* ================= VIEW MORE ================= */}

        <div className="flex justify-center mt-10 md:mt-12">

          <button
            type="button"
            className="flex items-center gap-2 text-sm sm:text-base text-gray-400 hover:text-purple-400 transition"
          >
            View More Projects
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
}


/* =====================================================
   FEATURE
===================================================== */

function Feature({ text }) {

  return (
    <div className="flex items-center gap-2 text-sm text-gray-400">

      <span className="text-purple-400 shrink-0">
        ✓
      </span>

      <span>
        {text}
      </span>

    </div>
  );
}


/* =====================================================
   TECHNOLOGY
===================================================== */

function Tech({ name }) {

  return (
    <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:border-purple-500/30 transition">
      {name}
    </span>
  );
}


/* =====================================================
   PROJECT CARD
===================================================== */

function ProjectCard({
  number,
  icon,
  title,
  description,
  technologies,
  status,
}) {

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      whileHover={{
        y: -8,
      }}

      transition={{
        duration: 0.5,
      }}

      viewport={{
        once: true,
      }}

      className="group bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 hover:border-purple-500/40 transition duration-300"
    >

      {/* TOP */}

      <div className="flex justify-between items-center">

        <span className="text-purple-400 text-sm">
          {number}
        </span>

        <div className="text-2xl text-purple-400 group-hover:scale-110 transition duration-300">
          {icon}
        </div>

      </div>


      {/* TITLE */}

      <h3 className="text-xl sm:text-2xl font-bold mt-7">
        {title}
      </h3>


      {/* STATUS */}

      {status && (
        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
          {status}
        </span>
      )}


      {/* DESCRIPTION */}

      <p className="text-gray-500 leading-7 mt-4 text-sm sm:text-base">
        {description}
      </p>


      {/* TECHNOLOGIES */}

      <p className="text-purple-400 text-xs mt-6">
        {technologies}
      </p>


      {/* EXPLORE */}

      <button
        type="button"
        className="flex items-center gap-2 mt-6 text-sm sm:text-base text-gray-300 hover:text-purple-400 transition"
      >
        Explore
        <FaArrowRight />
      </button>

    </motion.div>

  );
}


export default Projects;