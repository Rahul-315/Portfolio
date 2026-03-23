import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto glass p-10 rounded-2xl shadow-xl"
      >
        <p className="text-lg leading-8 text-gray-300">
          I am an <span className="text-indigo-400 font-semibold">Associate Software Engineer </span> 
          at Atenas Code Pvt Ltd, specializing in{" "}
          <span className="text-indigo-400 font-semibold">
            Java Full Stack Development
          </span>.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          I build scalable and secure web applications using{" "}
          <span className="text-indigo-400">Spring Boot</span>,{" "}
          <span className="text-indigo-400">React</span>, and{" "}
          <span className="text-indigo-400">MySQL</span>, focusing on clean architecture and performance.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          I have hands-on experience in implementing{" "}
          <span className="text-indigo-400">JWT authentication</span>,{" "}
          <span className="text-indigo-400">Google OAuth</span>, and building{" "}
          <span className="text-indigo-400">RESTful APIs</span> for real-world applications.
        </p>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          Additionally, I explore{" "}
          <span className="text-indigo-400">AI-powered solutions</span> and continuously
          improve my skills to build modern, user-centric applications.
        </p>
      </motion.div>

    </section>
  );
};

export default About;
