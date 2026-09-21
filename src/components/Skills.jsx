import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* SECTION HEADING */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 mb-2">
            02. My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Technologies I
            <span className="text-purple-400"> work with.</span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl">
            Technologies and tools I use to build modern,
            responsive and interactive web applications.
          </p>
        </motion.div>


        {/* SKILLS CATEGORIES */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-12 md:mt-14">


          {/* FRONTEND */}

          <SkillCategory
            title="Frontend"
            subtitle="Creating beautiful user interfaces"
            skills={[
              {
                name: "HTML5",
                icon: <FaHtml5 />,
              },
              {
                name: "CSS3",
                icon: <FaCss3Alt />,
              },
              {
                name: "JavaScript",
                icon: <FaJs />,
              },
              {
                name: "React",
                icon: <FaReact />,
              },
              {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />,
              },
            ]}
          />


          {/* BACKEND */}

          <SkillCategory
            title="Backend"
            subtitle="Building APIs and server-side applications"
            skills={[
              {
                name: "Node.js",
                icon: <FaNodeJs />,
              },
              {
                name: "Express.js",
                icon: <SiExpress />,
              },
              {
                name: "MongoDB",
                icon: <SiMongodb />,
              },
            ]}
          />


          {/* TOOLS */}

          <SkillCategory
            title="Tools"
            subtitle="Tools I use during development"
            skills={[
              {
                name: "Git",
                icon: <FaGitAlt />,
              },
              {
                name: "GitHub",
                icon: <FaGithub />,
              },
              {
                name: "Postman",
                icon: <SiPostman />,
              },
              {
                name: "Vite",
                icon: <SiVite />,
              },
            ]}
          />

        </div>

      </div>
    </section>
  );
}


/* ================= SKILL CATEGORY ================= */

function SkillCategory({
  title,
  subtitle,
  skills,
}) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-purple-500/40 transition overflow-hidden"
    >

      {/* BACKGROUND GLOW */}

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl"></div>


      {/* TITLE */}

      <h3 className="relative text-2xl font-bold">
        {title}
      </h3>

      <p className="relative text-sm text-gray-500 mt-2 mb-7">
        {subtitle}
      </p>


      {/* SKILLS */}

      <div className="relative space-y-3">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            whileHover={{
              x: 5,
            }}
            className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/40 border border-white/5 hover:border-purple-500/30 transition"
          >

            {/* ICON */}

            <div className="text-2xl text-purple-400">

              {skill.icon}

            </div>


            {/* SKILL NAME */}

            <span className="text-gray-300">
              {skill.name}
            </span>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}


export default Skills;