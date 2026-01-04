"use client";

import Iridescence from "@/components/backgroundEffect-iridescence/Iridescence";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo animado */}
      <Iridescence speed={0.8} amplitude={1} mouseReact={false} />

      {/* Contenido encima del efecto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          Christie Medina Leiton
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Web Developer · React · Next.js · Tailwind
        </p>
        <a
          href="/projects"
          className="mt-6 rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors"
        >
          Ver proyectos
        </a>
      </div>
    </div>
  );
}