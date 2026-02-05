import React from 'react';

const Skills = ({ skills }) => {
    if (!skills) return null;

    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2 border-slate-100">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-slate-50 text-slate-700 rounded-md text-sm font-medium border border-slate-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
