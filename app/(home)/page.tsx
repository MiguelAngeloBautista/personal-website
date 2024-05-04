import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>  
      <div className="min-h-screen bg-white dark:bg-black text:black dark:text-white">
        <div className="max-w-7xl mx-auto ">
          <Navbar />
        </div>
        
        <HeroSection />
        <Skills/>
        <Projects/>
        <Footer />
        
        
      </div>
      
      
    </main>
  );
}
