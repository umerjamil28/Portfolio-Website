export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4" id="contact">
      <h3 className="text-4xl font-bold mb-4 text-center">Contact</h3>
      <p className="text-lg text-gray-700 mb-6">Let's connect! Feel free to reach out for collaboration or just a friendly hello.</p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <a href="mailto:your.email@example.com" className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-pink-500 transition">Email Me</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold shadow hover:bg-gray-700 transition">GitHub</a>
      </div>
    </section>
  );
} 