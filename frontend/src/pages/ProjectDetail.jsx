import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProfile } from '../api';
import { getPdfUrl } from '../api';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile();
            setProfile(data);
            if (data) {
                const found = data.portfolio.find(p => p.id === id);
                setProject(found);
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (!project) return <div className="p-10 text-center">Project not found.</div>;

    const fullPdfUrl = project.documentUrl ? getPdfUrl(project.documentUrl) : '';

    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header profile={profile} />

            <main className="flex-grow flex flex-col">
                <div className="bg-white shadow-sm border-b border-slate-200 py-4 px-6 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Portfolio
                    </button>
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold text-slate-800">{project.title}</h1>
                        {project.documentUrl && (
                            <a href={fullPdfUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center text-sm">
                                <ExternalLink className="w-4 h-4 mr-1" /> Open Source PDF
                            </a>
                        )}
                    </div>
                </div>

                <div className="flex-1 bg-slate-200 relative min-h-[80vh]">
                    {(project.type === 'Document/PDF' || project.type === 'Document/HTML') && project.documentUrl ? (
                        <iframe src={fullPdfUrl} className="w-full h-full absolute inset-0 border-0" title={project.title} />
                    ) : (
                        <div className="flex items-center justify-center h-full text-slate-500">
                            Details not available or not a PDF project.
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
