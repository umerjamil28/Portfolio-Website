import { useRef, useEffect, useState } from "react";

export default function SkillsTicker() {
  const skills = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "SQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "/n8n.svg", alt: "N8N" },
    { src: "/make.svg", alt: "Make.com" },
  ];

  return (
    <section className="max-w-6xl mx-auto py-18 px-4" id="skills">
      <h3 className="text-4xl font-bold mb-4 text-center">Technical Skills</h3>
      <div className="w-full overflow-hidden bg-white py-8">
        <div className="relative w-full">
          <div className="ticker-track flex items-center" style={{ animation: 'ticker 40s linear infinite' }}>
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '110px', marginRight: '3rem' }}>
                <div style={{ background: '#fff', padding: '0.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                  <img
                    src={skill.src}
                    alt={skill.alt}
                    className="h-18 w-18 object-contain hover:grayscale-0 transition flex-shrink-0"
                  />
                </div>
                <span style={{ marginTop: '0.5rem', fontSize: '1rem', fontWeight: 500, color: '#333', textAlign: 'center' }}>{skill.alt}</span>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .ticker-track {
            width: max-content;
          }
        `}</style>
      </div>
    </section>
  );
} 