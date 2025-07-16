import { Link } from '@inertiajs/react';


export default function AchievementsSection() {
  return (
    <section
        className="
            relative z-10 -mt-24
            flex flex-col md:flex-row justify-around items-center
           bg-[rgba(180,180,248,0.4)]
            py-16 px-8
            shadow-lg rounded-lg
            w-11/12 max-w-6xl mx-auto
            text-center
            font-poppins
        "
        >
        <div className="flex flex-col items-center mx-4 my-4 md:my-0"> 
            <span className="text-5xl font-bold text-gray-800 mb-1">50+</span> 
            <span className="block text-[24px] text-gray-600 font-medium">Global Reach</span>
            <span className="block text-[20px] text-[#FE7800] font-medium">Academic Excellence</span> 
        </div>

        <div className="flex flex-col items-center mx-4 my-4 md:my-0">
            <span className="text-5xl font-bold text-gray-800 mb-1">30+</span>
            <span className="block text-[24px] text-gray-600 font-medium">Partner Universities</span>
            <span className="block text-[20px] text-[#FE7800] font-medium">International Network</span>
        </div>

        <div className="flex flex-col items-center mx-4 my-4 md:my-0">
            <span className="text-5xl font-bold text-gray-800 mb-1">200+</span>
            <span className="block text-[24px] text-gray-600 font-medium">Student Exchange</span>
            <span className="block text-[20px] text-[#FE7800] font-medium">Opportunities Abroad</span>
        </div>

        <div className="flex flex-col items-center mx-4 my-4 md:my-0">
            <span className="text-5xl font-bold text-gray-800 mb-1">10+</span>
            <span className="block text-[24px] text-gray-600 font-medium">Research Opportunities</span>
            <span className="block text-[20px] text-[#FE7800] font-medium">Innovation Focus</span>
        </div>
    </section>
  );
}
