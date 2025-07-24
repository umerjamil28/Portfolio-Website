export default function Navbar() {
  return (
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
  );
} 