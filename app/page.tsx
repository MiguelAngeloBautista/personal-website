import Navbar from "../components/blog/Navbar";
import HeroSection from "../components/blog/HeroSection";
import { Skills } from "../components/blog/Skills";
import Projects from "../components/blog/Projects";
import Articles from "@/components/blog/Articles";

export default function Home() {

  return (
    <main>  
      <div className="min-h-screen bg-white dark:bg-black text:black dark:text-white text-center">
        <Navbar />
        
        <HeroSection />
        <Skills/>
        <div className="lg:flex flex-row xl:block xl:mx-16 ">
          <Projects limit={3} />
          <Articles limit={3} loadMore={false}/>
        </div>

        
        {/* <Footer /> */}
        
        
      </div>
      
      
    </main>
  );
}
