import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "../components/home/Services";
import Skills from "../components/home/Skills";
import Education from "../components/home/Education";
import Projects from "../components/home/Projects";
import Blogs from "@/components/home/Blogs";

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
      {/* <Blogs /> */}
      <Contact />
      <Footer />
    </>
  );
}
