import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);


  if (!loading) {
    return null;
  }


  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center"
    >

      <div className="text-center">

        {/* LOGO */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >

          <span className="text-purple-400">
            &lt;
          </span>

          Alisha

          <span className="text-purple-400">
            /&gt;
          </span>

        </motion.h1>


        {/* LOADING TEXT */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 mt-4 text-sm"
        >
          Loading portfolio...
        </motion.p>


        {/* LOADING BAR */}

        <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.3 }}
            className="h-full bg-purple-500 rounded-full"
          ></motion.div>

        </div>

      </div>

    </motion.div>
  );
}

export default Loader;