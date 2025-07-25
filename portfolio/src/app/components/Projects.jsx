import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS, showcasing modern design and clean code.",
      image: "/next.svg",
      tags: ["React", "Tailwind CSS", "Next.js"],
      link: "#",
    },
    {
      title: "UI Design System",
      description: "A reusable component library and design system for rapid prototyping and consistent UI/UX.",
      image: "/figma.svg",
      tags: ["Figma", "React", "Storybook"],
      link: "#",
    },
    {
      title: "Automation Platform",
      description: "Automated workflows using n8n and Make.com for business process optimization.",
      image: "/n8n.svg",
      tags: ["n8n", "Make.com", "Automation"],
      link: "#",
    },
    {
      title: "Python Data Tool",
      description: "A Python-based tool for data analysis and visualization.",
      image: "/python.svg",
      tags: ["Python", "Pandas", "Matplotlib"],
      link: "#",
    },
    {
      title: "Fullstack App",
      description: "A fullstack web application using Node.js, Express, and MongoDB.",
      image: "/node.svg",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "SQL Dashboard",
      description: "A dashboard for visualizing SQL database metrics.",
      image: "/mysql.svg",
      tags: ["SQL", "MySQL", "Dashboard"],
      link: "#",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-18 px-4 text-center" id="projects">
      <h3 className="text-4xl font-bold mb-8">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg shadow p-6 flex flex-col items-start transition-transform duration-200 hover:scale-105 cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <div className="w-full h-52 mb-6 relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'contain' }}
                className="transition duration-300 group-hover:grayscale group-hover:brightness-75"
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">{project.title}</h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 