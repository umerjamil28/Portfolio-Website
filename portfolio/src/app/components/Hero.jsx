import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    { text: "Software Engineer", color: "#2563eb" }, // blue-600
    { text: "UI/UX Designer", color: "#db2777" },   // pink-600
    { text: "AI Automation Engineer", color: "#059669" }, // emerald-600
  ];
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = roles[current].text;
    if (!deleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 110); // slower typing
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length - 1));
      }, 60); // slower deleting
    } else if (!deleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setDeleting(true), 1600); // longer pause
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setCurrent((prev) => (prev + 1) % roles.length);
      }, 500);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, current, roles]);

  return (
    <>
      {/* Centered Avatar above intro */}
      <div className="flex flex-col items-center justify-center pt-32 pb-0">
        <img
          // src="https://i.imgur.com/1Q9Z1Zm.png"
          src="/myimg.png"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow mb-4 bg-blue-100"
        />
        <h2 className="text-xl font-medium text-gray-900 mb-2">Hi, This is Umer<span className="ml-2">🤘</span></h2>
      </div>

      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center text-center px-0" id="intro">
        <h1 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight mb-2 relative inline-block">
          <span className="relative z-10">
            <span className="text-3xl">I am a </span>
            <span
              style={{ color: roles[current].color, minWidth: 180, display: 'inline-block' }}
              className="text-4xl"
            >
              {displayed}
            </span>
          </span>
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-2">
        I’m a versatile tech enthusiast who brings ideas to life through code, design, and AI automation. I build clean web solutions, craft intuitive user experiences, and love making workflows smarter with automation.
        I enjoy working end-to-end — from planning and design to development and optimization. Outside of work, I’m always exploring new tech, design trends, and ways to make everyday tasks more efficient with AI.
        If you’re looking for someone who connects the dots between technology, usability, and innovation, let’s build something great together!
        </p>
        <div className="flex flex-row gap-4">
          <a href="#contact" className="mt-4 px-8 py-3 bg-black text-white rounded-full font-medium text-base shadow hover:bg-gray-800 transition">Connect with me</a>
          <a href="#contact" className="mt-4 px-8 py-3 bg-black text-white rounded-full font-medium text-base shadow hover:bg-gray-800 transition">Download my CV</a>
        </div>
      </section>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 1s steps(1) infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </>
  );
} 