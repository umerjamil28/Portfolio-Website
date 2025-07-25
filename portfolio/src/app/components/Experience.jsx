export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto py-18 px-4" id="experience">
      <h3 className="text-4xl font-bold mb-4 text-center">Experience</h3>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-6 shadow">
          <div className="flex justify-between items-start w-full">
            <h4 className="text-2xl font-semibold">Associate Software Engineer</h4>
            <span className="text-xl text-gray-700">Jan 2025 – May 2025</span>
          </div>
          <div className="flex justify-between items-center w-full mt-1">
            <span className="italic text-lg">SnackOut</span>
            <span className="italic text-lg">Lahore, Punjab</span>
          </div>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
            <li>Designed and developed scalable web applications with React and Next.js.</li>
            <li>Collaborated with designers to deliver pixel-perfect UI/UX.</li>
            <li>Optimized performance and accessibility for diverse users.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 