import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "./ImageLightbox";
import beforePerfiloplastia from "@/assets/before-perfiloplastia.jpg";
import afterPerfiloplastia from "@/assets/after-perfiloplastia.jpg";
import beforePerfiloplastia2 from "@/assets/before-perfiloplastia-2.jpg";
import afterPerfiloplastia2 from "@/assets/after-perfiloplastia-2.jpg";
import beforePerfiloplastia3 from "@/assets/before-perfiloplastia-3.jpg";
import afterPerfiloplastia3 from "@/assets/after-perfiloplastia-3.jpg";
import beforePerfiloplastia4 from "@/assets/before-perfiloplastia-4.jpg";
import afterPerfiloplastia4 from "@/assets/after-perfiloplastia-4.jpg";

type Stage = { src: string; label: string };

type Procedure = {
  stages: Stage[];
  title: string;
  description: string;
  highlight?: { badge: string; note?: string };
};

const proceduresData: Procedure[] = [
  {
    stages: [
      { src: beforePerfiloplastia, label: "Antes" },
      { src: afterPerfiloplastia, label: "Depois" },
    ],
    title: "Perfiloplastia",
    description: "Rinoplastia e mentoplastia para harmonização do perfil facial",
  },
  {
    stages: [
      { src: beforePerfiloplastia2, label: "Antes" },
      { src: afterPerfiloplastia2, label: "Depois" },
    ],
    title: "Perfiloplastia",
    description: "Harmonização do perfil masculino com definição de mandíbula e mento",
  },
  {
    stages: [
      { src: beforePerfiloplastia3, label: "Antes" },
      { src: afterPerfiloplastia3, label: "Depois" },
    ],
    title: "Perfiloplastia",
    description: "Harmonização do perfil masculino com refinamento nasal e projeção do mento",
  },
  {
    stages: [
      { src: beforePerfiloplastia4, label: "Antes" },
      { src: afterPerfiloplastia4, label: "Depois" },
    ],
    title: "Perfiloplastia",
    description: "Definição da linha mandibular e projeção do mento com resultado natural",
  },
];

const SpecializedProceduresSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % proceduresData.length);
    setStageIndex(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + proceduresData.length) % proceduresData.length);
    setStageIndex(0);
  };

  const currentItem = proceduresData[currentIndex];
  const safeStage = Math.min(stageIndex, currentItem.stages.length - 1);
  const currentStage = currentItem.stages[safeStage];
  const nextStage = () =>
    setStageIndex((s) => (s + 1) % currentItem.stages.length);

  // Pré-carrega todas as imagens para troca instantânea
  const preloadImages = proceduresData.flatMap((item) => item.stages.map((s) => s.src));

  return (
    <section className="py-14 sm:py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Preload invisível das imagens */}
        <div aria-hidden="true" className="hidden">
          {preloadImages.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Resultados Naturais e{" "}
            <span className="text-primary">Transformadores</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada resultado é único, porque cada rosto conta uma história diferente
          </p>
        </div>

        {/* Before/After Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Image Display */}
            <div
              className={`relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-card transition-all ${
                currentItem.highlight
                  ? "shadow-2xl ring-2 ring-primary/40"
                  : "shadow-elegant"
              }`}
            >
              <img
                src={currentStage.src}
                alt={`${currentStage.label} do procedimento`}
                loading="eager"
                decoding="async"
                onClick={() => setZoom(true)}
                className="w-full h-full object-contain transition-all duration-500 cursor-zoom-in"
              />
              
              {/* Stage Label */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 items-start">
                <div className="px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft">
                  <span className="text-sm font-semibold text-foreground">
                    {currentStage.label}
                  </span>
                </div>
                {currentItem.highlight && (
                  <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="text-xs font-semibold tracking-wide">
                      {currentItem.highlight.badge}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => setZoom(true)}
                aria-label="Ver em tela cheia"
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              >
                <Expand className="w-5 h-5 text-foreground" />
              </button>

              {/* Stage Toggle */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                <Button
                  onClick={nextStage}
                  variant="secondary"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl"
                >
                  Ver {currentItem.stages[(safeStage + 1) % currentItem.stages.length].label}
                </Button>
                {currentItem.stages.length > 2 && (
                  <div className="hidden sm:flex gap-1.5 px-3 py-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft">
                    {currentItem.stages.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === safeStage ? "bg-primary w-5" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Resultado anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Próximo resultado"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Procedure Info */}
          <div className="mt-8 text-center animate-fade-in">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-2">
              {currentItem.title}
            </h3>
            <p className="text-muted-foreground">{currentItem.description}</p>
            {currentItem.highlight?.note && (
              <p className="mt-4 text-sm text-primary/90 italic max-w-2xl mx-auto">
                {currentItem.highlight.note}
              </p>
            )}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {proceduresData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setStageIndex(0);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Ir para resultado ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-sm text-muted-foreground italic max-w-xl mx-auto">
            "Os resultados podem variar de acordo com as características individuais de cada paciente. 
            Fotos reais de procedimentos realizados pela Dra. Blenda Lobão."
          </p>
        </div>
      </div>
      {zoom && (
        <ImageLightbox
          src={currentStage.src}
          alt={currentItem.title}
          onClose={() => setZoom(false)}
        />
      )}
    </section>
  );
};

export default SpecializedProceduresSection;
