import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head, Link } from '@inertiajs/react';
import { GraduationCap, Globe, Users } from 'lucide-react'; 
import iroLogo from '@/assets/IROLogo.png'; 


const SelectUserType = () => {
    const [selectedUserType, setSelectedUserType] = useState(null);

    const userTypes = [
        { id: 'bu_students', name: 'BU Students', icon: <GraduationCap size={40} /> },
        { id: 'international_student', name: 'International Student', icon: <Globe size={40} /> },
        { id: 'bu_faculty', name: 'BU Faculty', icon: <Users size={40} /> },
    ];

    const handleContinue = () => {
        const userTypeMap = {
            bu_students: 'bu student',
            international_student: 'foreign student',
            bu_faculty: 'faculty',
        };

        const mappedValue = userTypeMap[selectedUserType] || 'guest';

        Inertia.post('/register/usertype', { usertype: mappedValue });
    };

    const handleBack = () => {
        Inertia.back();
    };

    return (
        <>
            <Head title="Select User Type" /> 
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl w-full bg-white p-10 rounded-2xl shadow-xl">
                    {/* Logo and Title */}
                    <div className="flex flex-col items-center mb-10">
                        <img src={iroLogo} alt="Logo" className="h-16 w-16 mb-4" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
                            Select Your User Type
                        </h2>
                        <p className="text-sm text-gray-500 text-center mt-1">Choose the category that best describes you.</p>
                    </div>

                    {/* User Type Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {userTypes.map((type) => (
                            <div
                                key={type.id}
                                onClick={() =>
                                    setSelectedUserType(prev => (prev === type.id ? null : type.id))
                                }
                                className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-all duration-200 border 
                                    ${selectedUserType === type.id
                                        ? 'bg-orange-50 border-orange-500 text-orange-700 shadow-md'
                                        : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
                                    }`}
                            >
                                <div className="text-blue-600 mb-3">{type.icon}</div>
                                <span className="text-center font-medium text-sm sm:text-base">{type.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 flex justify-end">
                        <button
                            onClick={handleContinue}
                            className={`px-8 py-3 rounded-md shadow-sm text-sm font-medium text-white transition
                                ${selectedUserType
                                    ? 'bg-orange-500 hover:bg-orange-600 focus:ring-orange-400'
                                    : 'bg-gray-500 hover:bg-gray-600 cursor-pointer'
                                }`}
                        >
                            {selectedUserType ? 'Continue' : 'Continue as Guest'}
                        </button>
                    </div>


                </div>
            </div>
        </>
    );
};

export default SelectUserType;