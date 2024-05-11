import Navbar from "../components/blog/Navbar";
import HeroSection from "../components/blog/HeroSection";
import { Skills } from "../components/blog/Skills";
import Projects from "../components/blog/Projects";
import Footer from "../components/blog/Footer";

export default function Home() {
  return (
    <main>  
      <div className="min-h-screen bg-white dark:bg-black text:black dark:text-white">
          <Navbar />
        
        <HeroSection />
        <Skills/>
        <Projects/>
        {/* <Footer /> */}
        
        
      </div>
      
      
    </main>
  );
}
