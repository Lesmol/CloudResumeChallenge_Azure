import React from "react";
import Navbar from "../Components/Navbar";
import ResumeHeader from "../Components/CloudResume/ResumeHeader";
import Project from "../Components/CloudResume/Project";
import Education from "../Components/CloudResume/Education";

import { motion } from "framer-motion";

function CloudResume() {
  return (
    <div className="container mx-auto max-w-2xl items-center">
      <Navbar />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ResumeHeader />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Project />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Education
          title="CTU Training Solutions"
          duration="2022-Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores
        exercitationem recusandae, sit dicta aspernatur veritatis atque facilis,
        quaerat repellat necessitatibus! Nisi corporis error repudiandae est
        praesentium atque deleniti quis."
        />
      </motion.div>
    </div>
  );
}

export default CloudResume;