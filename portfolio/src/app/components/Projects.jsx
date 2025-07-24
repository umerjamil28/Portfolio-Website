export default function Projects() {
  return (
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
  );
} 