"use client";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsTicker from "./components/SkillsTicker";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  // Enable smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />

    
      
      <Hero />  
      <SkillsTicker />
      
      
      {/* <div style={{backgroundImage: "url('/background.png')",backgroundSize: 'contain',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}}> */}
      
      
      {/* <Education /> */}
      <Experience />
      
      {/* </div> */}

      <div style={{backgroundImage: "url('/background.png')",backgroundSize: 'contain',backgroundPosition: 'center',backgroundRepeat: 'no-repeat',}}>
      <Projects />
      <Contact />
      
      </div>
      
      
    </div>
  );
}
