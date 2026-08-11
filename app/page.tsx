import Hero from "@/src/sections/Hero";
import About from "@/src/sections/About";
import Skills from "@/src/sections/Skills";
import Projects from "@/src/sections/Projects";
import Github from "@/src/sections/Github";
import Journey from "@/src/sections/Journey";
import Certificates from "@/src/sections/Certificates";
import Contact from "@/src/sections/Contact";
import Footer from "@/src/components/Footer";
import ScrollReveal from "@/src/components/ScrollReveal";

export default function Home() {
  return (
    <main className="w-full">
      <ScrollReveal direction="pop" threshold={0.05} once={false}>
        <Hero />
      </ScrollReveal>
      <About />
      <Skills />
      <Projects />
      <Github />
      <Journey />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
