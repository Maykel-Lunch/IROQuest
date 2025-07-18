import NavBar from '@/Components/NavBar';
import HeroSection from '@/Components/Home_Page/HeroSection';
import { Head, Link } from '@inertiajs/react';
import AboutSection from '@/Components/Home_Page/AboutSection';
import AchievementsSection from '@/Components/Home_Page/AchievementSection';
import ServiceSection from '@/Components/Home_Page/ServiceSection';
import NewsSection from '@/Components/Home_Page/NewsSection';
import FAQSection from '../Components/Home_Page/FAQSection';
import FooterSection from '@/Components/Home_Page/FooterSection';


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
            <NavBar auth={auth} />
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
