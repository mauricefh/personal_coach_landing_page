import { hero } from "@/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[url(/hero.jpg)] bg-cover bg-center ">
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          {hero.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {hero.subTitle}
        </p>
        <a
          href="#cta"
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
        >
          {hero.action}
        </a>
      </div>
    </section>
  );
}
