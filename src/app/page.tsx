"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MediaShowcase } from "@/components/MediaShowcase";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

/**
 * Главная страница портфолио — порядок секций: hero, about, навыки / skills,
 * проекты / projects, галерея / showcase, контакты.
 * Main portfolio page — section order as above, with animations.
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <MediaShowcase />
      <Contact />
    </main>
  );
}
