import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>


      {/* PURPLE GLOW */}

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
      ></motion.div>


      {/* PINK GLOW */}

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
      ></motion.div>


      {/* BLUE GLOW */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
      ></motion.div>


      {/* SMALL FLOATING DOTS */}

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-32 left-[20%] w-2 h-2 bg-purple-400 rounded-full"
      ></motion.div>


      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[60%] right-[20%] w-2 h-2 bg-pink-400 rounded-full"
      ></motion.div>


      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-[20%] left-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full"
      ></motion.div>

    </div>
  );
}

export default Background;