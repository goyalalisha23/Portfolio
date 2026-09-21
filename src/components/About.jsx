import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="text-purple-400 mb-2">
            01. About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            More than just
            <span className="text-purple-400"> code.</span>
          </h2>

        </motion.div>


        {/* MAIN CONTENT */}

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mt-12 md:mt-14 items-center">


          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-gray-400 leading-8 text-lg">

              I'm a passionate frontend developer who enjoys
              turning ideas into clean, interactive and
              user-friendly web experiences.

            </p>


            <p className="text-gray-500 leading-8 mt-5">

              I work mainly with React, JavaScript and Tailwind
              CSS. I'm constantly learning new technologies
              and improving my development skills by building
              real-world projects.

            </p>


            <p className="text-gray-500 leading-8 mt-5">

              My goal is simple — create websites that are not
              only functional, but also enjoyable to use.

            </p>


            {/* STATS */}

            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">

              <Stat
                number="10+"
                text="Projects"
              />

              <Stat
                number="5+"
                text="Technologies"
              />

              <Stat
                number="100%"
                text="Passion"
              />

            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* GLOW */}

            <div className="absolute -inset-3 bg-purple-600/10 blur-3xl rounded-3xl">
            </div>


            {/* TIMELINE CARD */}

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-7">

              <h3 className="text-2xl font-bold mb-8">
                My Journey
              </h3>


              {/* TIMELINE */}

              <TimelineItem
                icon={<FaGraduationCap />}
                year="Education"
                title="BCA Student"
                description="Building a strong foundation in computer applications and software development."
              />


              <TimelineItem
                icon={<FaCode />}
                year="Learning"
                title="Frontend Development"
                description="Learning HTML, CSS, JavaScript, React and modern UI development."
              />


              <TimelineItem
                icon={<FaLaptopCode />}
                year="Building"
                title="Real World Projects"
                description="Creating practical projects to improve my development and problem-solving skills."
              />


              <TimelineItem
                icon={<FaRocket />}
                year="Goal"
                title="Become a Professional Developer"
                description="Continuously learning and building better digital experiences."
                last
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}


/* ================= STAT ================= */

function Stat({
  number,
  text,
}) {

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center hover:border-purple-500/40 transition">

      <h3 className="text-2xl font-bold text-purple-400">
        {number}
      </h3>

      <p className="text-xs text-gray-500 mt-1">
        {text}
      </p>

    </div>
  );
}


/* ================= TIMELINE ================= */

function TimelineItem({
  icon,
  year,
  title,
  description,
  last,
}) {

  return (
    <div className="flex gap-4">

      {/* ICON + LINE */}

      <div className="flex flex-col items-center">

        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">

          {icon}

        </div>


        {!last && (
          <div className="w-px h-full bg-white/10 my-2"></div>
        )}

      </div>


      {/* CONTENT */}

      <div className="pb-8">

        <p className="text-purple-400 text-xs">
          {year}
        </p>

        <h4 className="text-lg font-semibold mt-1">
          {title}
        </h4>

        <p className="text-gray-500 text-sm leading-6 mt-2">
          {description}
        </p>

      </div>

    </div>
  );
}


export default About;