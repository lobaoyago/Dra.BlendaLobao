import { useState } from "react";
import { Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "./ImageLightbox";
import beforeRino from "@/assets/before-rinoplastia.jpg";
import afterRino from "@/assets/after-rinoplastia.jpg";
import beforeRino2 from "@/assets/before-rinoplastia-2.jpg";
import afterRino2 from "@/assets/after-rinoplastia-2.jpg";
import beforeRino3 from "@/assets/before-rinoplastia-3.jpg";
import afterRino3 from "@/assets/after-rinoplastia-3.jpg";
import beforeRino4 from "@/assets/before-rinoplastia-4.jpg";
import afterRino4 from "@/assets/after-rinoplastia-4.jpg";

type Stage = { src: string; label: string };

type RhinoCase = {
  stages: Stage[];
  title: string;
  description: string;
};

const casesData: RhinoCase[] = [
  {
    stages: [
      { src: beforeRino4, label: "Antes" },
      { src: afterRino4, label: "Depois" },
    ],
    title: "Rinoplastia",
    description:
      "Refinamento da ponta nasal com perfil mais suave e harmônico.",
  },
  {
    stages: [
      { src: beforeRino, label: "Antes" },
      { src: afterRino, label: "Depois" },
    ],
    title: "Rinoplastia",
    description:
      "Refinamento do dorso e da ponta nasal com resultado natural e harmônico ao perfil.",
  },
  {
    stages: [
      { src: beforeRino3, label: "Antes" },
      { src: afterRino3, label: "Depois" },
    ],
    title: "Rinoplastia",
    description:
      "Harmonização do dorso e projeção da ponta nasal, valorizando os traços naturais.",
  },
];

const RhinoplastySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [zoom, setZoom] = useState(false);

  const currentItem = casesData[currentIndex];
  const safeStage = Math.min(stageIndex, currentItem.stages.length - 1);
  const currentStage = currentItem.stages[safeStage];
  const nextStage = () =>
    setStageIndex((s) => (s + 1) % currentItem.stages.length);

  const goToCase = (index: number) => {
    const total = casesData.length;
    setCurrentIndex((index + total) % total);
    setStageIndex(0);
  };
  const prevCase = () => goToCase(currentIndex - 1);
  const nextCase = () => goToCase(currentIndex + 1);

  const preloadImages = casesData.flatMap((item) => item.stages.map((s) => s.src));

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div aria-hidden="true" className="hidden">
          {preloadImages.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>

        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Rinoplastia <span className="text-primary">Antes e Depois</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados naturais com refinamento do perfil nasal
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden bg-card shadow-elegant">
            <img
              src={currentStage.src}
              alt={`${currentStage.label} — ${currentItem.title}`}
              loading="eager"
              decoding="async"
              onClick={() => setZoom(true)}
              className="w-full h-full object-contain transition-all duration-500 cursor-zoom-in"
            />

            <div className="absolute top-4 left-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft">
              <span className="text-sm font-semibold text-foreground">
                {currentStage.label}
              </span>
            </div>

            <button
              onClick={() => setZoom(true)}
              aria-label="Ver em tela cheia"
              className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
            >
              <Expand className="w-5 h-5 text-foreground" />
            </button>

            {casesData.length > 1 && (
              <>
                <button
                  onClick={prevCase}
                  aria-label="Caso anterior"
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
                >
                  <ChevronLeft className="w-6 h-6 text-foreground" />
                </button>
                <button
                  onClick={nextCase}
                  aria-label="Próximo caso"
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
                >
                  <ChevronRight className="w-6 h-6 text-foreground" />
                </button>
              </>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <Button
                onClick={nextStage}
                variant="secondary"
                size="lg"
                className="shadow-xl hover:shadow-2xl"
              >
                Ver {currentItem.stages[(safeStage + 1) % currentItem.stages.length].label}
              </Button>
            </div>
          </div>

          <div className="mt-8 text-center animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              {currentItem.title}
            </h3>
            <p className="text-muted-foreground">{currentItem.description}</p>
          </div>

          {casesData.length > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {casesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCase(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para caso ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
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

export default RhinoplastySection;