import Hero from "@/src/sections/Hero";
import About from "@/src/sections/About";
import Skills from "@/src/sections/Skills";
import Projects from "@/src/sections/Projects";
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
    </main>
  );
}
