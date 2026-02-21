import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/mountain-landscape.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-6 opacity-80">
          Вместе — сильнее
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          СВОИХ<br />НЕ БРОСАЕМ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed mb-10">
          Поддержка военнослужащих, участвующих в СВО, и их семей. Укрепляем дух, решаем насущные проблемы, демонстрируем единство общества.
        </p>
        <a
          href="#help"
          className="inline-block bg-white text-neutral-900 px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300"
        >
          Помочь сейчас
        </a>
      </div>
    </div>
  );
}