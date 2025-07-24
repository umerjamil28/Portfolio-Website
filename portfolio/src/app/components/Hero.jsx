export default function Hero() {
  return (
    <>
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
    </>
  );
} 