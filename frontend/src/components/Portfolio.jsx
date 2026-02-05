import React, { useState } from 'react';
import { ExternalLink, FileText, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onClick(project)}
        className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
        <div className="h-48 bg-slate-100 relative overflow-hidden">
            {project.imageUrl ? (
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                    {project.type === 'Document/PDF' ? <FileText className="w-12 h-12" /> : <Code className="w-12 h-12" />}
                </div>
            )}
            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-700 shadow-sm">
                {project.type}
            </div>
        </div>
        <div className="p-5">
            <h3 className="font-bold text-slate-900 group-hover:text-accent transition-colors mb-2">{project.title}</h3>
            <p className="text-slate-500 text-sm line-clamp-2">{project.description}</p>
        </div>
    </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors z-10">
                    <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="h-64 bg-slate-100 relative">
                    {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-slate-500 mb-4">
                        <span className="px-2 py-1 bg-slate-100 rounded text-slate-600 font-medium">{project.type}</span>
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-6">
                        {project.description}
                    </p>

                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md">
                            View Project <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

const Portfolio = ({ projects }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    const handleProjectClick = (project) => {
        if (project.type === 'Document/PDF') {
            navigate(`/project/${project.id}`);
        } else {
            setSelectedProject(project);
        }
    };

    if (!projects) return null;

    return (
        <section className="py-20 bg-white" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Portfolio</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
                    ))}
                </div>
            </div>

            {/* Code/Web Project Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </section>
    );
};

export default Portfolio;
