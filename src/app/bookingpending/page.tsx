"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BookingPendingPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-white text-black">
      {/* Back Arrow Button */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-8 left-8 text-lg focus:outline-none"
      >
        <FaArrowLeft className="text-2xl text-black hover:opacity-80 transition-opacity" />
      </button>

      <div className="flex justify-start gap-x-4 items-center">
        <Image src="/assets/logo.png" alt="Main Logo" className="h-16 w-16 mb-6" width={200} height={200} />
        <h1 className="text-2xl font-bold text-gray-900 mb-2 drop-shadow-lg">
          Agrisense
        </h1>
      </div>

      {/* Main */}
      <div className="p-8 rounded-lg w-96 bg-gray-100 shadow-sm shadow-[#59981A]">
        <p className="text-gray-800 mt-4 text-center text-lg font-bold px-4">
          Your booking request has been sent<br />
          <button
            onClick={() => router.push("/")}
            className="text-[#59981A] hover:underline border-none bg-transparent focus:outline-none"
          >
            Go back to home page!
          </button>
        </p>
      </div>
    </div>
  );
};

export default BookingPendingPage;
