import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Online Order Management System",
    desc: "Admin, Staff, Customer modules with Full CRUD, JWT Auth, Google Sign-In, Email Service, Cloudinary Upload.",
    url: "https://github.com/Rahul-315/Online-Food-Order-Management-Frontend"
  },
  {
    title: "Grouque AI",
    desc: "AI-powered assistant with Spring Security, chat interface, dashboard & AI API integration.",
    url: "https://github.com/Rahul-315/Ai-Chat-bot-Backend"
  },
  {
    title: "Online Bookstore",
    desc: "Inventory and order management system using REST APIs.",
    url: "https://github.com/Rahul-315/OnlineBookStoreFrontend"
  },
  {
    title: "Employee Management System",
    desc: "Full CRUD employee management system using Spring Boot & MySQL.",
    url: "https://github.com/Rahul-315" // optional (add later if you have repo)
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6">
      <h2 className="text-5xl font-bold text-center mb-20">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-indigo-400 mb-4">
                {p.title}
              </h3>

              <p className="text-gray-300 leading-7 mb-6">
                {p.desc}
              </p>

              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white transition"
                >
                  View Code
                </a>
              )}
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Projects;
