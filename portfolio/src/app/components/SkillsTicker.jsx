import { TsLogo } from "@/svg/typescript";

export default function SkillsTicker() {
  return (
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
          {/* <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-12 w-12 object-contain grayscale hover:grayscale-0 transition" /> */}
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
  );
} 