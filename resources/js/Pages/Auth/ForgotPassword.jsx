import React, { useState, useRef, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import iroLogo from '@/assets/IROLogo.png';

const ForgotPassword = () => {
    // Assuming 6-digit OTP input based on the image
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]); // To manage focus for each OTP input

    // Inertia.js useForm hook for handling form submission
    const { data, setData, post, processing, errors, reset } = useForm({
        code: '', // This will hold the concatenated OTP
    });

    // Effect to concatenate OTP digits into the form data
    useEffect(() => {
        setData('code', otp.join(''));
    }, [otp, setData]);

    // Function to handle OTP input changes
    const handleChange = (e, index) => {
        const value = e.target.value;

        // Only allow a single digit
        if (value.length > 1) {
            e.target.value = value.charAt(0); // Keep only the first character
        }

        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Move focus to the next input if a digit was entered
        if (e.target.value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Function to handle backspace key for OTP inputs
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // The 'code' is already updated via useEffect, so just post
        post(route('password.verify.code'), { // Assuming a route for OTP verification
            onSuccess: () => {
                // Handle success, e.g., redirect to password reset form
                console.log('Code verified successfully!');
            },
            onError: (formErrors) => {
                console.error('Verification failed:', formErrors);
                // Optionally reset OTP if verification fails
                setOtp(['', '', '', '', '', '']);
                // Display errors if needed (Inertia handles this with `errors` prop)
            }
        });
    };

    // Handle back button click
    const handleBack = () => {
        // Assuming you want to go back to the email input page
        window.history.back(); // Or Inertia.visit(route('password.request'));
    };

    return (
        <>
            <Head title="Reset Account Password" />
        
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col items-center">
                        
                        <img src={iroLogo} alt="Logo" className="h-16 w-16 mb-4" />

                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                            <span className="text-blue-600">Reset</span> Account password
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Forgot your password?
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="otp-code" className="sr-only">Verification Code</label>
                                <p className="text-sm text-gray-700 mb-4">
                                    We sent the code to your email address to reset your password
                                </p>
                                <div className="flex justify-center space-x-2">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            className={`w-12 h-12 text-center text-2xl font-bold rounded-lg border-2
                                                        ${errors.code ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}
                                                        focus:ring-blue-500 focus:outline-none`}
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            ref={(el) => (inputRefs.current[index] = el)} // Assign ref
                                            required
                                            inputMode="numeric" // Suggests numeric keyboard on mobile
                                            autoComplete="one-time-code" // Helps browsers suggest OTPs
                                        />
                                    ))}
                                </div>
                                {errors.code && (
                                    <p className="mt-2 text-sm text-red-600 text-center">{errors.code}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                                disabled={processing}
                            >
                                {processing ? 'Verifying...' : 'Verify Code'}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <button
                            onClick={handleBack}
                            className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        >
                            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                            Back
                        </button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default ForgotPassword;