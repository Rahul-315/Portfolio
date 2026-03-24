import { motion } from "framer-motion";
const certifications = [
  {
    title: "Java - Scalar",
    link: "https://drive.google.com/file/d/17Jsd5hosHED4C39wQuXBaNgsGcdVkl_x/view?usp=drivesdk",
  },
  {
    title: "Tera IOT - NIT Warangal",
    link: "https://drive.google.com/file/d/1f-Bsm3c2DrkpTP71GnULW-sDEJUkDj26/view?usp=drivesdk",
  },
  {
    title: "Cyber Security Job Simulation - Forage",
    link: "https://drive.google.com/file/d/1-7gdEKFsOXdIa2jn_YtrvCk5HTz7wlFT/view?usp=drivesdk",
  },
  {
    title: "Web Development - Internshala",
    link: "https://drive.google.com/file/d/1_U0SCY9eTZrwpE_RRQi8FtPwSbJll9YA/view?usp=drivesdk",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-28 px-6 text-center">
      
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-16"
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 rounded-2xl text-lg font-semibold hover:text-indigo-400 hover:scale-105 transition shadow-lg"
          >
            📜 {cert.title}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
