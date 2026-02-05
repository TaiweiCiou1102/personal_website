import React from 'react';
import { Briefcase, GraduationCap, Award, Globe } from 'lucide-react';

const TimelineItem = ({ title, subtitle, period, details, projects, isEducation }) => (
    <div className="relative pl-8 sm:pl-10 py-10 group first:pt-0 last:pb-0">
        {/* Line & Dot */}
        <div className="flex flex-col items-center absolute left-0 top-0 h-full">
            <div className="w-px h-full bg-slate-200 group-last:h-12" />
            <div className="absolute top-10 transform -translate-x-1/2 left-0 w-3 h-3 bg-white border-2 border-accent rounded-full z-10" />
        </div>

        {/* Content */}
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                    {period}
                </span>
            </div>
            <div className="text-lg text-accent font-medium">{subtitle}</div>

            {details && <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{details}</p>}

            {projects && projects.length > 0 && (
                <div className="space-y-6 mt-6">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm hover:border-slate-300 transition-colors">
                            <h4 className="font-bold text-slate-800 mb-3 text-base border-l-4 border-accent pl-3">
                                {proj.title}
                            </h4>
                            <ul className="space-y-2">
                                {proj.items.map((item, i) => (
                                    <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                                        <span className="mr-2 mt-2 w-1 h-1 bg-slate-400 rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
);

const Timeline = ({ experience, education, certifications, languages }) => {
    return (
        <section className="py-24 max-w-4xl mx-auto px-4 space-y-24">

            {/* Experience */}
            <div>
                <h2 className="text-3xl font-bold text-slate-900 flex items-center mb-12">
                    <span className="p-2 bg-accent/10 rounded-lg mr-4">
                        <Briefcase className="w-6 h-6 text-accent" />
                    </span>
                    Work Experience
                </h2>
                <div className="space-y-0">
                    {experience && experience.map((item, idx) => (
                        <TimelineItem
                            key={idx}
                            title={item.role}
                            subtitle={item.company}
                            period={item.period}
                            projects={item.description}
                        />
                    ))}
                </div>
            </div>

            {/* Education */}
            <div>
                <h2 className="text-3xl font-bold text-slate-900 flex items-center mb-12">
                    <span className="p-2 bg-accent/10 rounded-lg mr-4">
                        <GraduationCap className="w-6 h-6 text-accent" />
                    </span>
                    Education
                </h2>
                <div className="space-y-0">
                    {education && education.map((item, idx) => (
                        <TimelineItem
                            key={idx}
                            title={item.degree}
                            subtitle={item.school}
                            period={item.period}
                            details={item.details}
                            isEducation={true}
                        />
                    ))}
                </div>
            </div>

            {/* Additional Sections Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Certifications */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center mb-8">
                        <span className="p-2 bg-accent/10 rounded-lg mr-4">
                            <Award className="w-5 h-5 text-accent" />
                        </span>
                        Certifications
                    </h2>
                    <ul className="space-y-3">
                        {certifications && certifications.map((cert, idx) => (
                            <li key={idx} className="flex items-start text-slate-700 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Languages */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center mb-8">
                        <span className="p-2 bg-accent/10 rounded-lg mr-4">
                            <Globe className="w-5 h-5 text-accent" />
                        </span>
                        Languages
                    </h2>
                    <ul className="space-y-3">
                        {languages && languages.map((lang, idx) => (
                            <li key={idx} className="flex items-start text-slate-700 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                                {lang}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Timeline;
