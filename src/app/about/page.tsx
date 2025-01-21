import { Header } from "@/components/Layout/Header";
import { StatisticsSection } from "@/components/StatisticsSection";
import Footer from "@/components/Layout/Footer";

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-2 pb-8 px-2">
        <section className="max-w-6xl mx-auto mt-20 mb-8 text-left pl-10">
          <h1 className="text-4xl font-bold text-[#81B622] mb-4 pt-2">
            Advancing Agriculture Through Technology
          </h1>
          <p className="text-lg text-gray-700">
            At AgriSense, we aim to support farmers by introducing practical and accessible technology solutions for modern farming challenges. By combining AI, IoT, and data-driven insights, we strive to make farming more efficient, sustainable, and productive. Our goal is to provide tools that help farmers make informed decisions and optimize their resources effectively.
          </p>
        </section>
        <StatisticsSection/>
        <p className="text-lg text-gray-700 max-w-6xl mx-auto mt-4 mb-20 text-left pl-10">
          By deploying drone-based multispectral imaging for crop health analysis, IoT-enabled smart irrigation systems for precise water management, and AI-driven disease diagnostics for early detection and intervention, AgriSense minimizes crop losses, optimizes resource utilization, and accelerates the adoption of precision agriculture practices. These innovations collectively enhance productivity, sustainability, and resilience in Pakistan's agricultural landscape.</p>
      </main>
      <Footer/>
    </>
  );
};

export default page;
