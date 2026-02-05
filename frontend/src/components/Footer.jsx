import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-100 py-8 border-t border-slate-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Taiwei Ciou. All rights reserved.</p>
                <p className="mt-2">Built with FastAPI, React & Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
