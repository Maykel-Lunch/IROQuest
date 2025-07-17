import { Link } from '@inertiajs/react';
import buLogo from '@/assets/BULogo.png';
import { useState } from 'react';

export default function NavBar({ auth }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

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

                {/* Authenticated: Profile Dropdown */}
                <div className="relative">
                    {auth?.user ? (
                        <div>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition focus:outline-none"
                            >
                                <span className="rounded-full bg-white text-blue-600 w-8 h-8 flex items-center justify-center font-bold">
                                    {/* Profile Icon: Initial */}
                                    {auth.user.first_name.charAt(0)}
                                </span>
                                <span>{auth.user.first_name}</span>
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                    <Link href="/notifications" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Notifications</Link>
                                    <Link href="/messages" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Messaging</Link>
                                    <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            href={route('register')}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}