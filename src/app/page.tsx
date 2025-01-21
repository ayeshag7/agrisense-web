import { Header } from "@/components/Header";
import Footer from "@/components/Layout/Footer";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
          <Hero/>
      </main>
      <Footer/>
    </>
  );
}
