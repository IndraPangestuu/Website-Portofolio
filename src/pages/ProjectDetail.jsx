import React from "react";

const dummyProject = {
  title: 'Landing Page Modern',
  overview: 'Website landing page dengan desain modern dan responsif.',
  tools: ['React', 'Tailwind CSS', 'Vite'],
  challenges: 'Membuat layout grid responsif dan animasi smooth scroll.',
  image: '',
  liveUrl: '#',
  githubUrl: '#',
};

const ProjectDetail = () => {
  const p = dummyProject;
  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="mb-6 h-56 bg-gray-100 rounded-lg flex items-center justify-center">
        {/* Header gambar besar */}
        {p.image ? (
          <img src={p.image} alt={p.title} className="object-cover w-full h-full rounded-lg" />
        ) : (
          <span className="text-6xl text-gray-300">📷</span>
        )}
      </div>
      <h2 className="text-3xl font-bold mb-2 text-gray-900">{p.title}</h2>
      <p className="text-gray-600 mb-4">{p.overview}</p>
      <div className="mb-4">
        <strong className="text-gray-800">Tools Used:</strong>
        <ul className="flex gap-3 mt-1">
          {p.tools.map((tool) => (
            <li key={tool} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">{tool}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <strong className="text-gray-800">Challenges Faced:</strong>
        <p className="text-gray-600 mt-1">{p.challenges}</p>
      </div>
      <div className="flex gap-4 mt-6">
        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-semibold">Live Site</a>
        <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition text-sm font-semibold">GitHub</a>
      </div>
    </section>
  );
};

export default ProjectDetail;
