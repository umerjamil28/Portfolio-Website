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

  const rowRef = useRef(null);
  const [rowWidth, setRowWidth] = useState(0);

  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.offsetWidth);
    }
  }, [skills.length]);

  return (
    <section className="w-full flex justify-center items-center mt-12 py-8 bg-white overflow-hidden">
      <div className="relative w-full">
        <div
          className="flex gap-18"
          style={{
            width: rowWidth ? rowWidth * 2 : 'auto',
            animation: rowWidth ? `scroll ${10}s linear infinite` : 'none',
            display: 'flex',
            gap: '3rem',
          }}
        >
          {/* First set of skills */}
          <div ref={rowRef} style={{ display: 'flex', gap: '3rem' }}>
            {skills.map((skill, index) => (
              <img
                key={`first-${index}`}
                src={skill.src}
                alt={skill.alt}
                className="h-18 w-18 object-contain hover:grayscale-0 transition flex-shrink-0"
              />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div style={{ display: 'flex', gap: '3rem' }}>
            {skills.map((skill, index) => (
              <img
                key={`second-${index}`}
                src={skill.src}
                alt={skill.alt}
                className="h-16 w-16 object-contain hover:grayscale-0 transition flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${rowWidth}px);
          }
        }
      `}</style>
    </section>
  );
} 