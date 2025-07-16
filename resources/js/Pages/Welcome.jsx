import NavBar from '@/Components/NavBar';
import HeroSection from '@/Components/HeroSection';
import { Head, Link } from '@inertiajs/react';
import AboutSection from '@/Components/AboutSection';
import AchievementsSection from '@/Components/AchievementSection';
import ServiceSection from '@/Components/ServiceSection';
import NewsSection from '@/Components/NewsSection';
import FAQSection from '../Components/FAQSection';
import FooterSection from '@/Components/FooterSection';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <NavBar />
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ServiceSection />
            <NewsSection />
            <FAQSection />
            <FooterSection />
            
        </>
    );
}
