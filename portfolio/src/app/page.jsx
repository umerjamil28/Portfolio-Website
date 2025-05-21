"use client";
import { useEffect } from "react";
import { TsLogo } from "@/svg/typescript";

export default function Home() {
  // Enable smooth scrolling for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white flex items-center justify-between px-10 py-6 font-light text-base tracking-wide" style={{boxShadow: 'none', borderBottom: 'none'}}>
        {/* Left: Email */}
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.09 7.09a2.25 2.25 0 01-3.182 0l-7.09-7.09A2.25 2.25 0 012.25 6.993V6.75" />
          </svg>
          <span className="text-gray-900">ujamil905@gmail.com</span>
        </div>
        {/* Right: Nav Links */}
        <ul className="flex gap-10 text-gray-900">
          <li><a href="#projects" className="hover:underline">Works</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Centered Avatar above intro */}
      <div className="flex flex-col items-center justify-center pt-32 pb-4">
        <img
          src="https://i.imgur.com/1Q9Z1Zm.png"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow mb-4 bg-blue-100"
        />
        <h2 className="text-xl font-medium text-gray-900 mb-2">Hi, I'm Umer<span className="ml-2">🤘</span></h2>
      </div>

      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center text-center px-4" id="intro">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 relative inline-block">
          <span className="relative z-10">Building digital<br />products, brands, and<br />experience.</span>
          {/* <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-[70%] h-3 bg-blue-100 rounded-full z-0" style={{filter:'blur(2px)'}}></span> */}
        </h1>
        <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
          a <span className="font-semibold">Product Designer</span> and <span className="font-semibold">Visual Developer</span> in SF.<br />
          I specialize in UI/UX Design, Responsive Web Design, and Visual Development.
        </p>
        <a href="#contact" className="mt-2 px-8 py-3 bg-black text-white rounded-full font-medium text-base shadow hover:bg-gray-800 transition">CONNECT WITH ME</a>
      </section>

      {/* About Section */}
      {/* Ticker Section: Skills Logos */}
      <section className="w-full flex justify-center items-center py-8 bg-white overflow-hidden">
        <div className="relative w-full max-w-4xl">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {/* Next.js */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
            {/* React */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
            {/* Figma */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
            {/* JavaScript */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
            {/* TypeScript */}
            <TsLogo/>
            {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-25 w-25 object-contain grayscale hover:grayscale-0 transition" /> */}
            {/* Tailwind CSS */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
            {/* HTML5 */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
            {/* CSS3 */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" />
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </section>

      {/* Education Section */}
      <section className="max-w-3xl mx-auto py-16 px-4" id="education">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Education</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h4 className="text-xl font-semibold">B.Sc. in Computer Science</h4>
              <p className="text-gray-600">Awesome University</p>
            </div>
            <span className="text-blue-600 font-medium">2018 - 2022</span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-3xl mx-auto py-16 px-4" id="experience">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Experience</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow p-4">
            <h4 className="text-xl font-semibold">Frontend Engineer</h4>
            <p className="text-gray-600">Tech Innovators Inc. | 2022 - Present</p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Designed and developed scalable web applications with React and Next.js.</li>
              <li>Collaborated with designers to deliver pixel-perfect UI/UX.</li>
              <li>Optimized performance and accessibility for diverse users.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-3xl mx-auto py-16 px-4" id="projects">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <h4 className="text-lg font-semibold mb-2">Modern Portfolio Website</h4>
            <p className="text-gray-700 mb-2">A responsive portfolio website built with React and Tailwind CSS, showcasing modern design and clean code.</p>
            <a href="#" className="text-blue-600 hover:underline font-medium mt-auto">View Project</a>
          </div>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col">
            <h4 className="text-lg font-semibold mb-2">UI Design System</h4>
            <p className="text-gray-700 mb-2">A reusable component library and design system for rapid prototyping and consistent UI/UX.</p>
            <a href="#" className="text-blue-600 hover:underline font-medium mt-auto">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto py-16 px-4" id="contact">
        <h3 className="text-3xl font-bold mb-4 text-blue-700">Contact</h3>
        <p className="text-lg text-gray-700 mb-6">Let's connect! Feel free to reach out for collaboration or just a friendly hello.</p>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a href="mailto:your.email@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-pink-500 transition">Email Me</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold shadow hover:bg-gray-700 transition">GitHub</a>
        </div>
      </section>
    </div>
  );
}
