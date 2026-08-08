'use client';

export default function ScrollIndicator() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full flex justify-center py-6 bg-black relative z-20 select-none">
      <button
        onClick={scrollToAbout}
        className="group p-2 cursor-pointer focus:outline-none transition-transform hover:scale-110"
        aria-label="Scroll to About section"
      >
        {/* Simple Animated Mouse Icon */}
        <div className="w-5 h-8 rounded-full border-2 border-zinc-700 group-hover:border-[#13ec7b] flex justify-center p-1.5 transition-colors duration-300">
          <div className="w-1 h-2 bg-[#13ec7b] rounded-full animate-bounce shadow-[0_0_6px_#13ec7b]" />
        </div>
      </button>
    </div>
  );
}
