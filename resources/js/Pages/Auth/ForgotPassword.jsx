import React, { useState, useRef, useEffect } from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import iroLogo from '@/assets/IROLogo.png';

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // Step 1 = email input, Step 2 = verify code
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const { props } = usePage();
    const queryEmail = new URLSearchParams(window.location.search).get('email') || '';

    const { data, setData, post, processing, errors, reset } = useForm({
        email: queryEmail,
        code: '',
    });


    useEffect(() => {
        setData('code', otp.join(''));
    }, [otp]);

    // Handle OTP changes
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (value.length > 1) e.target.value = value.charAt(0);

        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    // Step 1: Send Verification Code
    const handleSendCode = (e) => {
        e.preventDefault();
        post(route('password.send.code'), {
            onSuccess: () => {
                setStep(2); // Move to step 2 if email was sent successfully
            }
        });
    };

    // Step 2: Verify OTP
    const handleVerifyCode = (e) => {
        e.preventDefault();
        post(route('password.verify.code'), {
            onSuccess: () => {
                window.location.href = route('password.reset.form', {
                    email: data.email,
                    reset_code: otp.join(''), // ✅ Use reset_code
                });
            },
            onError: () => {
                setOtp(['', '', '', '', '', '']);
            }
        });
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1); // Go back to email input
        } else {
            window.history.back();
        }
    };

    return (
        <>
            <Head title="Reset Account Password" />
            <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex flex-col items-center">
                        <img src={iroLogo} alt="Logo" className="h-16 w-16 mb-4" />
                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
                            <span className="text-blue-600">Reset</span> Account Password
                        </h2>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={step === 1 ? handleSendCode : handleVerifyCode}>
                        {step === 1 && (
                            <>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    />
                                    {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                                >
                                    {processing ? 'Sending...' : 'Send Verification Code'}
                                </button>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <p className="text-sm text-gray-700 mb-4 text-center">
                                    We sent a 6-digit verification code to your email address
                                </p>

                                <div className="flex justify-center space-x-2">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            className={`w-12 h-12 text-center text-2xl font-bold rounded-lg border-2
                                                        ${errors.code ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}
                                                        focus:ring-blue-500 focus:outline-none`}
                                            value={digit}
                                            onChange={(e) => handleChange(e, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            ref={(el) => (inputRefs.current[index] = el)}
                                            required
                                            inputMode="numeric"
                                            autoComplete="one-time-code"
                                        />
                                    ))}
                                </div>
                                {errors.code && (
                                    <p className="mt-2 text-sm text-red-600 text-center">{errors.code}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full py-2 px-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
                                >
                                    {processing ? 'Verifying...' : 'Verify Code'}
                                </button>
                            </>
                        )}
                    </form>

                    <div className="mt-6">
                        <button
                            onClick={handleBack}
                            className="w-full py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 flex justify-center items-center"
                        >
                            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7 7-7" />
                            </svg>
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
