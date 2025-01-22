import { Header } from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import BookAppointment from "@/components/BookAppointment";

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-12 pb-20">
        <BookAppointment/>
      </main>
      <Footer/>
    </>
  );
};

export default page;