import { Link } from '@inertiajs/react';
import buLogo from '@/assets/BULogo.png';
import { useState } from 'react';
import { router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { faBell, faEnvelope, faUser, faRightFromBracket, faToolbox } from '@fortawesome/free-solid-svg-icons';

export default function NavBar({ auth }) {
    const { component } = usePage();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const Section = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="my-24"
        >
            {children}
        </motion.div>
    );

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <nav className="bg-[#101f41] px-8 py-3 flex items-center justify-between">
            {/* Left: Logo and Title */}
            <Link href="/" className="flex items-center space-x-4">
                <img src={buLogo} alt="BU Logo" className="h-12 w-12" />
                <div>
                    <div className="flex items-baseline space-x-1">
                        <span className="text-2xl font-bold text-blue-400">BICOL</span>
                        <span className="text-2xl font-bold text-orange-500">UNIVERSITY</span>
                    </div>
                    <div className="text-xs text-white">International Relations Office</div>
                </div>
            </Link>

            {/* Right */}
            <div className="flex items-center space-x-8"> 
                {component === 'Welcome' ? (
                    <>
                        {/* okay na ba ganito yung animation for user accesibility */}
                        <div className="flex space-x-8 text-white text-sm font-bold">
                            <a
                                href="#about"
                                onClick={e => handleSmoothScroll(e, 'about')}
                                className="relative text-white transition-all duration-300
                                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white
                                        hover:after:w-full after:transition-all after:duration-300"
                            >
                                About Us
                            </a>
                            <a
                                href="#achievements"
                                onClick={e => handleSmoothScroll(e, 'achievements')}
                                className="relative text-white transition-all duration-300
                                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white
                                        hover:after:w-full after:transition-all after:duration-300"
                            >
                                Achievements
                            </a>
                            <a
                                href="#news"
                                onClick={e => handleSmoothScroll(e, 'news')}
                                className="relative text-white transition-all duration-300
                                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white
                                        hover:after:w-full after:transition-all after:duration-300"
                            >
                                News
                            </a>
                            <a
                                href="#faqs"
                                onClick={e => handleSmoothScroll(e, 'faqs')}
                                className="relative text-white transition-all duration-300
                                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-white
                                        hover:after:w-full after:transition-all after:duration-300"
                            >
                                FAQ'S
                            </a>
                            </div>


                        {/* Authenticated: Profile Dropdown */}
                        <div className="relative">
                            {auth?.user ? (
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center text-white px-4 py-2 rounded-xl transition space-x-3 relative"
                                    >
                                        
                                        {/* Profile with initial and student label underneath */}
                                        <div className="flex flex-col items-center relative">
                                            {/* Profile Initial Circle */}
                                            <div className="w-10 h-10 rounded-full bg-white text-blue-600 font-bold flex items-center justify-center text-base shadow">
                                                {auth.user.first_name.charAt(0)}
                                            </div>

                                            {/* User Type Badge */}
                                            <span
                                                className={`absolute bottom-0 text-[10px] text-white px-2 py-[1px] rounded-full font-semibold shadow-sm ${
                                                    auth.user.role === 'admin'
                                                        ? 'bg-purple-700'
                                                        : auth.user.usertype === 'guest'
                                                        ? 'bg-orange-500'
                                                        : auth.user.usertype === 'bu student'
                                                        ? 'bg-blue-600'
                                                        : auth.user.usertype === 'foreign student'
                                                        ? 'bg-green-600'
                                                        : auth.user.usertype === 'faculty'
                                                        ? 'bg-yellow-500'
                                                        : 'bg-gray-500'
                                                }`}
                                                style={{ transform: 'translateY(60%)' }}
                                            >
                                                {auth.user.role === 'admin' ? 'ADMIN' : auth.user.usertype.toUpperCase()}
                                            </span>

                                        </div>

                                        {/* Name and dropdown arrow */}
                                        <div className="flex items-center space-x-1">
                                            <span className="font-medium">{auth.user.first_name}</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>

                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                                            {/* Show these only if role is 'client' */}
                                            {auth.user.role === 'client' && (
                                            <>
                                                <Link href="/notifications" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                <FontAwesomeIcon icon={faBell} />
                                                Notifications
                                                </Link>
                                                <Link href="/messages" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                <FontAwesomeIcon icon={faEnvelope} />
                                                Messaging
                                                </Link>
                                            </>
                                            )}

                                            {/* Profile visible for all */}
                                            <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            <FontAwesomeIcon icon={faUser} />
                                            Profile
                                            </Link>

                                            {/* Admin tools visible only to admin */}
                                            {auth.user.role === 'admin' && (
                                            <Link
                                                href={route('admin.dashboard')}
                                                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100"
                                            >
                                                <FontAwesomeIcon icon={faToolbox} />
                                                Admin Tools
                                            </Link>
                                            )}

                                            {/* Logout button for everyone */}
                                            <button
                                            type="button"
                                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                            onClick={() => setShowLogoutModal(true)}
                                            >
                                            <FontAwesomeIcon icon={faRightFromBracket} />
                                            Logout
                                            </button>
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
                    </>
                    ) : (
                        <Link
                            href="/contact"
                            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                        >
                            Contact Us
                        </Link>
                    )}
                
            </div>

            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-200">
                    <div className="bg-white rounded-xl shadow-2xl p-6 w-96 max-w-full animate-fade-in">
                        <h2 className="text-xl font-semibold text-gray-800 mb-3">Confirm Logout</h2>
                        <p className="text-sm text-gray-600 mb-6">Are you sure you want to log out of your account?</p>
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowLogoutModal(false); // Close the modal first
                                    router.post(route('logout')); // Then send logout request
                                }}
                                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Logout
                            </button>


                        </div>
                    </div>
                </div>
            )}

        </nav>
    );
}