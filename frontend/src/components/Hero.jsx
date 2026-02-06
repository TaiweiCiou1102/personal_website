import React from "react";
import { motion } from "framer-motion";

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            <span className="text-accent">{profile.name}</span>
          </h2>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-sm border border-slate-100 mx-auto max-w-3xl text-left">
            <p className="text-lg text-slate-700 leading-relaxed whitespace-pre-line">
              {profile.summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
