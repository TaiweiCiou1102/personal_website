import React from 'react';
import { Github, Mail, Phone, Linkedin, FileText } from 'lucide-react';

const Header = ({ profile }) => {
    if (!profile) return null;

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        {profile.name}
                    </h1>
                </div>

                <div className="flex items-center space-x-6 text-sm font-medium text-slate-600">
                    <div className="hidden md:flex items-center space-x-4">
                        <span className="flex items-center hover:text-accent transition-colors">
                            <Phone className="w-4 h-4 mr-1" />
                            {profile.contact}
                        </span>
                        <a href={`mailto:${profile.email}`} className="flex items-center hover:text-accent transition-colors">
                            <Mail className="w-4 h-4 mr-1" />
                            {profile.email}
                        </a>
                    </div>

                    <div className="flex items-center space-x-3 border-l pl-6 border-slate-300">
                        {profile.links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors" title={link.label}>
                                {link.label === 'Github' && <Github className="w-5 h-5" />}
                                {/*{link.label === 'LinkedIn' && <Linkedin className="w-5 h-5" />}*/}
                                {link.label === 'HackMD' && <FileText className="w-5 h-5" />}
                                {!['Github', 'LinkedIn', 'HackMD'].includes(link.label) && <span className="underline">{link.label}</span>}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
