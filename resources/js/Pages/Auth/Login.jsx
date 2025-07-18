import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import iroLogo from '@/assets/IROLogo.png';

import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });


    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout className="max-w-md md:max-w-lg lg:max-w-xl">
            <Head title="Log in" />
            
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 text-center">
                    {status}
                </div>
            )}
            <div className="flex flex-col items-center justify-center mb-6">
                <img src={iroLogo} alt="IRO Logo" className="h-20 w-20 mb-4" />
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                     Login to Your Account
                </h1>
            </div>
            
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        placeholder="Email"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password" 
                        placeholder="Password" 
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData('remember', e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                            Remember me for 14 days
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request', { email: data.email })}
                            className="rounded-md text-sm text-gray-600 underline
                                    hover:text-red-600     
                                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                                    dark:text-gray-400
                                    dark:hover:text-red-500 
                                    dark:focus:ring-offset-gray-800"
                        >
                            Forgot your password?
                        </Link>
                    )}

                </div>

                <PrimaryButton className="mt-6 w-full justify-center" disabled={processing}>
                    Log in
                </PrimaryButton>
            </form>

            {/* OR separator */}
            <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400 text-sm">
                        or with
                </span>
                <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            </div>

            
            <button
                type="button"
                onClick={() => window.location.href = route('google.redirect')}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
                {/* Font Awesome Google icon */}
                <i className="fab fa-google text-lg mr-3"></i> 
                Login with Google
            </button>

            <div className="mt-6 text-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Don't have an account? </span>
                <Link
                    href={route('register')}
                    className="font-semibold text-orange-500 hover:text-orange-600 underline"
                >
                    Sign up
                </Link>
            </div>
        </GuestLayout>
    );
}