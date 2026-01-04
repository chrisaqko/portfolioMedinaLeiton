"use client";

import React from "react";
import Iridescence from "@/components/backgroundEffect-iridescence/Iridescence.jsx";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo animado */}
      <Iridescence speed={0.8} amplitude={1} mouseReact={false} />

      {/* Contenido encima del efecto */}
      <header className="absolute top-16 left-0 w-full h-16 flex justify-evenly items-center container max-w-screen-2xl mx-auto px-4 z-20">
        <Header />
      </header>

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