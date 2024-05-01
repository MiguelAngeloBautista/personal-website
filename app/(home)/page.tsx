import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Skills } from "./components/Skills";
export default function Home() {
  return (
    <main>  
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto ">
          <Navbar />
        </div>
        
        <HeroSection />
        <Skills/>
      </div>
      
      
    </main>
  );
}
