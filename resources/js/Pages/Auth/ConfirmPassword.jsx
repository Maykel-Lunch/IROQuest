import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import TextInput from '@/Components/TextInput';
import iroLogo from '@/assets/IROLogo.png';


export default function ConfirmPassword() {

    const { email, token } = usePage().props;


    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });


    const submit = (e) => {
        e.preventDefault();

        // This route should correspond to your backend's password reset endpoint.
        // In Laravel Fortify, this is typically 'password.store' after the user
        // has clicked a reset link.
        post(route('password.store'), {
            onSuccess: () => {
                reset('password', 'password_confirmation');
                Inertia.visit(route('welcome')); 
            },
            onError: (errors) => {
                console.error("Errors occurred:", errors);
                console.log("Data submitted:", data);
            },
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
                    
                    <div className="mb-6">
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            required
                            placeholder="New Password"
                        />
                        {errors.password && (
                            <div className="text-red-600 text-sm mt-1 text-left">{errors.password}</div>
                        )}

                    </div>

                    <div className="mb-6">
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            required
                            placeholder="Confirm Password"
                        />
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