import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
export default function Home() {
  return (
    <main>  
      <div className="min-h-screen bg-black">
        <div className="max-w-7xl mx-auto ">
          <Navbar />
        </div>
        
        <HeroSection />
      </div>
      
      
    </main>
  );
}
