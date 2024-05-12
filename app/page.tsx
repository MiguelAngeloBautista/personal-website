import Navbar from "../components/blog/Navbar";
import HeroSection from "../components/blog/HeroSection";
import { Skills } from "../components/blog/Skills";
import Projects from "../components/blog/Projects";
import Articles from "@/components/blog/Articles";

export default function Home() {

  return (
    <main>  
      <div className="min-h-screen bg-white dark:bg-black text:black dark:text-white">
        <Navbar />
        
        <HeroSection />
        <Skills/>
        <Projects limit={3} loadTitle={true} />
        {/* <Title text="Blog"/> */}
        <Articles limit={3} loadMore={false} loadTitle={true}/>

        
        {/* <Footer /> */}
        
        
      </div>
      
      
    </main>
  );
}
