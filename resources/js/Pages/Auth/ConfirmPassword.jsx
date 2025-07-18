import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import TextInput from '@/Components/TextInput';
import iroLogo from '@/assets/IROLogo.png';


export default function ConfirmPassword() {

    const { email, reset_code } = usePage().props;


    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        reset_code: reset_code, // This should be the 6-digit code from the URL/props
        email: email,
        password: '',
        password_confirmation: '',
    });


    const submit = (e) => {
        e.preventDefault();
        
        post(route('password.store'), {
            reset_code: reset_code,
            email: email,
            password: data.password,
            password_confirmation: data.password_confirmation
        }, {
            onSuccess: () => {
                // Force reload auth state
                Inertia.reload({
                    only: ['auth.user'],
                    onFinish: () => {
                        window.location.href = route('welcome');
                    }
                });
            }
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Head title="Reset Account Password" />

            <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-md">
                
                <img
                    src={iroLogo} 
                    alt="Logo"
                    className="w-20 mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    <span className="text-blue-600">Reset</span> Account Password
                </h1>
                

                <form onSubmit={submit}>
                    
                    <div className="relative mb-6">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="peer placeholder-transparent mt-1 block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            autoComplete="new-password"
                            required
                            placeholder="New Password"
                        />
                        <label
                            htmlFor="password"
                            className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            New Password
                        </label>
                        {errors.password && (
                            <div className="text-red-600 text-sm mt-1 text-left">{errors.password}</div>
                        )}
                    </div>


                    <div className="relative mb-6">
                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="peer placeholder-transparent mt-1 block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            autoComplete="new-password"
                            required
                            placeholder="Confirm Password"
                        />
                        <label
                            htmlFor="password_confirmation"
                            className="absolute left-3 top-2 text-gray-500 text-sm transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
                        >
                            Confirm Password
                        </label>
                        {errors.password_confirmation && (
                            <div className="text-red-600 text-sm mt-1 text-left">{errors.password_confirmation}</div>
                        )}
                    </div>


                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {processing ? 'Updating' : 'Update password'}
                    </button>
                </form>

                <div className="mt-5">
                    <a
                        href={route('login')} 
                        className="inline-flex items-center justify-center px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition duration-300 text-base"
                    >
                        &larr; Back
                    </a>
                </div>
            </div>
        </div>
    );
}