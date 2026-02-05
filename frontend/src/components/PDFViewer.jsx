import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { getPdfUrl } from '../api';

const PDFViewer = ({ url, onClose, title }) => {
    const fullUrl = getPdfUrl(url);

    return (
        <div className="fixed inset-0 z-[60] flex flex-col bg-slate-900/95 backdrop-blur-sm animate-in fade-in duration-200">
            {/* Viewer Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800 text-white shadow-md">
                <h2 className="text-lg font-semibold truncate max-w-xl">{title}</h2>
                <div className="flex items-center space-x-4">
                    <a href={fullUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-slate-300 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4 mr-1" /> Open in New Tab
                    </a>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-700 transition-colors">
                        <X className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 w-full bg-slate-200 relative">
                <iframe
                    src={fullUrl}
                    className="w-full h-full border-0"
                    title={title}
                />
            </div>
        </div>
    );
};

export default PDFViewer;
