import { Header } from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-24">
        <div className="flex items-center justify-center bg-[#59981A] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#4a8518] transition-all h-32 w-64">
          <span className="mr-2 text-xl font-semibold">Book an Appointment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default page;