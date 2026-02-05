import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { getProfile } from '../api';

const Home = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile();
            setProfile(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
        );
    }

    if (!profile) return <div>Error loading profile.</div>;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-accent/20">
            <Header profile={profile} />
            <Hero profile={profile} />
            <Timeline
                experience={profile.experience}
                education={profile.education}
                certifications={profile.certifications}
                languages={profile.languages}
            />
            <Skills skills={profile.skills} />
            <Portfolio projects={profile.portfolio} />
            <Footer />
        </div>
    );
};

export default Home;
