import React from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    imageUrl: "/images/project1.png",
    url: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    imageUrl: "/images/project2.png",
    url: "#",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <a
            key={project.id}
            href={project.url}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
          >
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
