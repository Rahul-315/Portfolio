import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume.pdf";
import introVideo from "../assets/portfolio_intro.mp4";

const Hero = () => {
  return (
    <section className="relative z-20 min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="blob pointer-events-none top-10 left-10"></div>
      <div className="blob pointer-events-none bottom-20 right-10 bg-purple-500"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full relative z-20">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Hi, I'm{" "}
            <span className="text-indigo-400">Rahul</span>
          </motion.h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300">
            <Typewriter
              words={[
                "Java Full Stack Developer",
                "Spring Boot Architect",
                "Web Developer",
                "JWT Security Expert",
              ]}
              loop
              cursor
            />
          </p>

          {/* Buttons */}
          <div className="mt-10 flex gap-6 flex-wrap justify-center md:justify-start">
            
            <a
              href="https://github.com/Rahul-315"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg hover:bg-indigo-600"
            >
              🚀 View Projects
            </a>

            <a
              href={resume}
              download="Rahul_Resume.pdf"
              className="border border-green-500 px-8 py-3 rounded-xl hover:bg-green-500 transition hover:scale-105"
            >
              📄 Download Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE - INTRO VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-xl">
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-indigo-500 blur-3xl opacity-20 rounded-3xl"></div>

            {/* Video */}
          <video
  controls
  preload="metadata"
  className="relative w-full rounded-3xl border-2 border-indigo-500 shadow-2xl"
>
  <source src={introVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
