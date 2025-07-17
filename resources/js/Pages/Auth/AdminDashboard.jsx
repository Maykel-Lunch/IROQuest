import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import iroLogo from '@/assets/IROLogo.png';

import {
    LayoutDashboard, MessageSquare, ListChecks, FileText, Settings,
    User, LogOut, ChevronLeft, ChevronRight, BarChart2, TrendingUp, CheckCircle, Clock, PieChart,
    Users, Gauge, Globe, Compass, Home
} from 'lucide-react'; 


export default function AdminDashboard({ auth }) { 
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <>
            <Head title="Dashboard Overview" />

            <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <aside
                    className={`bg-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out
                                ${isSidebarCollapsed ? 'w-20 items-center' : 'w-64'}`}
                >
                    {/* Logo and collapse/expand button */}
                    <div className={`flex items-center justify-between p-4 border-b border-gray-700
                                    ${isSidebarCollapsed ? 'flex-col' : ''}`}>
                        <div className={`flex items-center ${isSidebarCollapsed ? 'mb-2' : ''}`}>
                            <img src={iroLogo} alt="IROQuest Logo" className="h-10 w-auto" />
                            {!isSidebarCollapsed && (
                                <span className="ml-3 text-xl font-semibold">IROQuest</span>
                            )}
                        </div>
                        <button
                            onClick={toggleSidebar}
                            className={`p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500
                                        ${isSidebarCollapsed ? 'transform rotate-180 mt-2' : ''}`}
                            aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                        >
                            {isSidebarCollapsed ? (
                                <ChevronRight size={20} className="text-gray-400" />
                            ) : (
                                <ChevronLeft size={20} className="text-gray-400" />
                            )}
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        <Link href={route('admin.dashboard')} className={`flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200
                                ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                            <LayoutDashboard size={20} />
                            {!isSidebarCollapsed && <span className="ml-3">Admin Dashboard</span>}
                        </Link>
                        <Link href="#" className={`flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200
                                ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                            <MessageSquare size={20} />
                            {!isSidebarCollapsed && <span className="ml-3">Messaging Center</span>}
                        </Link>
                        <Link href="#" className={`flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200
                                ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                            <ListChecks size={20} />
                            {!isSidebarCollapsed && <span className="ml-3">Requirements Checklist</span>}
                        </Link>
                        <Link href="#" className={`flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200
                                ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                            <FileText size={20} />
                            {!isSidebarCollapsed && <span className="ml-3">Arquivo</span>}
                        </Link>
                        <Link href="#" className={`flex items-center px-2 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200
                                ${isSidebarCollapsed ? 'justify-center' : ''}`}>
                            <Settings size={20} />
                            {!isSidebarCollapsed && <span className="ml-3">Settings</span>}
                        </Link>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Top Bar / Header */}
                    <header className="flex items-center justify-between bg-white shadow p-4">
                        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                        <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                            <Home size={24} />
                        </Link>
                    </header>

                    {/* Dashboard Content */}
                    <main className="flex-1 overflow-y-auto p-6 bg-gray-100">

                        {/* Top Metrics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm">Application Volume</p>
                                    <p className="text-3xl font-bold text-gray-900">15</p>
                                </div>
                                <FileText size={48} className="text-blue-500 opacity-20" />
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-sm">User Activity</p>
                                <p className="text-3xl font-bold text-gray-900">89%</p>
                                <div className="flex items-center text-green-500 text-sm mt-1">
                                    <TrendingUp size={16} className="mr-1" />
                                    <span>+5% engagement</span>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-500 text-sm">Completion Rate</p>
                                <p className="text-3xl font-bold text-gray-900">73%</p>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '73%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Charts and Status */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Volume Trends</h3>
                                {/* Bar Chart Placeholder */}
                                <div className="h-64 bg-gray-50 flex items-center justify-center text-gray-400">
                                    {/* This would be your actual chart component (e.g., Recharts, Chart.js) */}
                                    <BarChart2 size={64} />
                                </div>
                                <div className="flex justify-between text-sm text-gray-500 mt-4">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mt-4 text-sm text-gray-700">
                                    <div><span className="font-semibold">Peak Month:</span> May (45 applications)</div>
                                    <div><span className="font-semibold">Average:</span> 32 applications/month</div>
                                    <div><span className="font-semibold">Growth Rate:</span> +18%</div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Status</h3>
                                <div className="flex items-center justify-center h-64 relative">
                                    {/* Donut Chart Placeholder */}
                                    <PieChart size={120} className="text-blue-500 transform rotate-90" /> {/* A simple icon for placeholder */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {/* You'd render your actual donut chart here */}
                                        <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                            {/* Center content if needed */}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>Approved <span className="ml-auto">5%</span></div>
                                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>In Review <span className="ml-auto">60%</span></div>
                                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>Pending <span className="ml-auto">17.5%</span></div>
                                    <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>Rejected <span className="ml-auto">17.5%</span></div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity and Performance Metrics */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Application Activity</h3>
                                <div className="space-y-4">
                                    {/* Activity Item 1 */}
                                    <div className="flex items-center border-b pb-3">
                                        <div className="flex-1">
                                            <p className="font-medium">Exchange program abroad</p>
                                            <p className="text-xs text-gray-500">2 hours ago</p>
                                        </div>
                                        <span className="ml-auto px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Approved</span>
                                    </div>
                                    {/* Activity Item 2 */}
                                    <div className="flex items-center border-b pb-3">
                                        <div className="flex-1">
                                            <p className="font-medium">Foreign Student</p>
                                            <p className="text-xs text-gray-500">Documents submitted for review</p>
                                        </div>
                                        <span className="ml-auto px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">In Review</span>
                                    </div>
                                    {/* Activity Item 3 */}
                                    <div className="flex items-center border-b pb-3">
                                        <div className="flex-1">
                                            <p className="font-medium">Outbound Bicol University Students</p>
                                            <p className="text-xs text-gray-500">1 day ago</p>
                                        </div>
                                        <span className="ml-auto px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                                    </div>
                                    {/* Activity Item 4 */}
                                    <div className="flex items-center">
                                        <div className="flex-1">
                                            <p className="font-medium">Korea-Philippines (OMCS) Partnership Network (KPCPNet)</p>
                                            <p className="text-xs text-gray-500">Partnership application approved</p>
                                        </div>
                                        <span className="ml-auto px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">Completed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Response Time <span className="ml-2 text-green-600 font-semibold">Excellent</span></p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Application Quality <span className="ml-2 text-blue-600 font-semibold">Good</span></p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">User Satisfaction <span className="ml-2 text-purple-600 font-semibold">Very Good</span></p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Time Zones and Quick Actions */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Global Partner Time Zones</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-gray-700">
                                        <div className="flex items-center">
                                            <Globe size={18} className="mr-2 text-blue-500" />
                                            <span>New York</span>
                                        </div>
                                        <span>12:11 PM</span>
                                    </div>
                                    <div className="flex items-center justify-between text-gray-700">
                                        <div className="flex items-center">
                                            <Globe size={18} className="mr-2 text-blue-500" />
                                            <span>London</span>
                                        </div>
                                        <span>05:11 AM</span>
                                    </div>
                                    <div className="flex items-center justify-between text-gray-700">
                                        <div className="flex items-center">
                                            <Globe size={18} className="mr-2 text-blue-500" />
                                            <span>Tokyo</span>
                                        </div>
                                        <span>01:12 AM</span>
                                    </div>
                                    <div className="flex items-center justify-between text-gray-700">
                                        <div className="flex items-center">
                                            <Globe size={18} className="mr-2 text-blue-500" />
                                            <span>Manila</span>
                                        </div>
                                        <span>12:12 PM</span> {/* Updated current time for Manila */}
                                    </div>
                                    <button className="mt-4 w-full text-blue-600 border border-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out">
                                        Add location
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                                <div className="space-y-3">
                                    <button className="w-full text-blue-600 border border-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out">
                                        Generate Report
                                    </button>
                                    <button className="w-full text-blue-600 border border-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out">
                                        View All Partners
                                    </button>
                                    <button className="w-full text-blue-600 border border-blue-600 py-2 rounded-md hover:bg-blue-50 transition duration-150 ease-in-out">
                                        Send Notification
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

