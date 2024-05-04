import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import About from "@/pages/home/About";
import Hero from "@/pages/home/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div className="h-screen"></div>
      <Footer />
    </>
  );
}
