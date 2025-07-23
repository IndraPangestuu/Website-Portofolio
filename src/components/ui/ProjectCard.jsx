import React from "react";

const ProjectCard = ({ title, description, image, liveUrl, caseUrl }) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col">
      <div className="mb-4 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
        {/* Gambar thumbnail project */}
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full rounded-lg" />
        ) : (
          <span className="text-5xl text-gray-300">📷</span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto flex gap-3">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm font-semibold">Live Demo</a>
        <a href={caseUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition text-sm font-semibold">Case Study</a>
      </div>
    </div>
  );
};

export default ProjectCard;
