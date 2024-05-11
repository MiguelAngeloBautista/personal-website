// ./frontend/src/app/[lang]/components/PageHeader.tsx

import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import React from "react";

interface PageHeaderProps {
  heading: string,
  text?: string,
}

export default function PageHeader({ heading, text } : PageHeaderProps) {
  const words = heading.split(" ").map((word) => ({ text: word })) ?? [];

  return (
    <div className="my-16 w-full text-center">
      { text && <span className="text-violet-400 font-bold">{text}</span> }
      {/* { text && <span className="text-violet-400 font-bold"><TypewriterEffect words={words}/></span> } */}

      {/* <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">{heading}</h2> */}
      <div className="text-4xl my-4 lg:text-5xl font-bold font-heading flex justify-center">
        <TypewriterEffect words={words}/>
        
      </div>
  </div>
  );
}