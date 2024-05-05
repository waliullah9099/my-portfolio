import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import About from "@/pages/home/About";
import Contact from "@/pages/home/Contact";
import Education from "@/pages/home/Education";
import Hero from "@/pages/home/Hero";
import Projects from "@/pages/home/Projects";
import Services from "@/pages/home/Services";
import Skills from "@/pages/home/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
