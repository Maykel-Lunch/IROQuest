import ApplicationLogo from '@/Components/ApplicationLogo';
import NavBar from '@/Components/NavBar'; 
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            
            <NavBar />

            <div className="flex flex-col justify-center items-center flex-1">

                <div className="mt-6 w-full overflow-hidden bg-neutral-100 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg border border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    );
}
