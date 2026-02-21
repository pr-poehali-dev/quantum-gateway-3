export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Woman on horse in countryside"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1" id="mission">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наша миссия</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Каждый боец заслуживает знать, что его ждут дома. Мы рядом — с семьёй, с поддержкой, с заботой о тех, кто защищает страну.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-wide mt-1 shrink-0">01</span>
            <p className="text-neutral-700">Психологическая и правовая помощь военнослужащим и их семьям</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-wide mt-1 shrink-0">02</span>
            <p className="text-neutral-700">Материальная поддержка и сбор необходимого снаряжения</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 uppercase text-xs tracking-wide mt-1 shrink-0">03</span>
            <p className="text-neutral-700">Единство общества — волонтёры, письма, встречи и живое участие</p>
          </div>
        </div>
        <button id="help" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Присоединиться
        </button>
      </div>
    </div>
  );
}