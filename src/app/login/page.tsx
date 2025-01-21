"use client";

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for the app directory
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { loginUser } from '../../utils/userauth'; // Import the login function

interface FormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null); // State for success message

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (error) {
      setError(null);
    }
    if (success) {
      setSuccess(null); // Reset success message
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = formData;

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Call the login function
      await loginUser(email, password);

      setLoading(false);
      setSuccess("Login successful!");
    } catch (err: any) {
      setLoading(false);
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-white text-black">
      {/* Back Arrow Button */}
      <button
        onClick={() => router.push('/')}
        className="absolute top-8 left-8 text-lg focus:outline-none"
      >
        <FaArrowLeft className="text-2xl text-black hover:opacity-80 transition-opacity" />
      </button>

      <div className="flex justify-start gap-x-4 items-center">
        <Image src="/assets/logo.png" alt="Main Logo" className="h-16 w-16 mb-6" width={200} height={200} />
        <h1 className="text-2xl font-bold text-gray-800 mb-2 drop-shadow-lg">
          Agrisense
        </h1>
      </div>

      {/* Login Form */}
      <div className="p-8 rounded-lg w-96 bg-gray-100 shadow-sm shadow-[#59981A]">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Log In
        </h2>
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
            required
          />
          <div className="relative w-full">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>} {/* Show success message */}
          <button
            type="submit"
            disabled={loading}
            className="py-2 rounded-md font-semibold bg-[#59981A] text-white hover:shadow-lg transition-all"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="text-gray-600 mt-4 text-center">
          Don&apos;t have an account?{' '}
          <button
            onClick={() => router.push('/signup')}
            className="text-gray-800 hover:underline border-none bg-transparent focus:outline-none"
          >
            Signup
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
