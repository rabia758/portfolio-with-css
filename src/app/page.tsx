import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
    <div >
      <Header />
      </div>
      <div className="lg:mx-32 md:mx-4">
      <Hero />
      <About/>
      <Contact/>
      <Footer/>
      </div>
      </>
    
  );
}
