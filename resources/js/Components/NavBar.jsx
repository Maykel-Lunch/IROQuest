import { Link } from '@inertiajs/react';
import buLogo from '@/assets/BULogo.png';

export default function NavBar() {
    return (
        <nav className="bg-[#101f41] px-8 py-3 flex items-center justify-between">
            {/* Left: Logo and Title */}
            <div className="flex items-center space-x-4">
                <img src={buLogo} alt="BU Logo" className="h-12 w-12" />
                <div>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-2xl font-bold text-blue-400">BICOL</span>
                        <span className="text-2xl font-bold text-orange-500">UNIVERSITY</span>
                    </div>
                    <div className="text-xs text-white">International Relations Office</div>
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center space-x-8"> 
                <div className="flex space-x-8 text-white text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="/achievements">Achievements</Link>
                    <Link href="/news">News</Link>
                    <Link href="/faqs">FAQ'S</Link>
                </div>

                {/* Sign In Button */}
                <div>
                    <Link
                        href={route('register')}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </nav>
    );
}