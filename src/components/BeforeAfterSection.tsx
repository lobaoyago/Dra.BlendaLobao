import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "./ImageLightbox";
import before1 from "@/assets/before-harmonizacao-nova.jpg";
import after1 from "@/assets/after-harmonizacao-nova.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import beforeMasculina from "@/assets/before-harmonizacao-masculina.jpg";
import afterMasculina from "@/assets/after-harmonizacao-masculina.jpg";
import beforeMasculina2 from "@/assets/before-harmonizacao-masculina-2.jpg";
import afterMasculina2 from "@/assets/after-harmonizacao-masculina-2.jpg";
import beforeMasculina3 from "@/assets/before-harmonizacao-masculina-3.jpg";
import afterMasculina3 from "@/assets/after-harmonizacao-masculina-3.jpg";

const beforeAfterData = [
  {
    before: before1,
    after: after1,
    title: "Harmonização Facial Completa Feminina",
    description: "Preenchimento com ácido hialurônico e toxina botulínica",
  },
  {
    before: before2,
    after: after2,
    title: "Harmonização Facial Completa Feminina",
    description: "Preenchimento labial e definição de contorno facial",
  },
  {
    before: beforeMasculina,
    after: afterMasculina,
    title: "Harmonização Facial Completa Masculina",
    description: "Preenchimento com ácido hialurônico e definição de contorno",
  },
  {
    before: beforeMasculina2,
    after: afterMasculina2,
    title: "Harmonização Facial Completa Masculina",
    description: "Refinamento nasal e harmonização dos terços faciais",
  },
  {
    before: beforeMasculina3,
    after: afterMasculina3,
    title: "Harmonização Facial Completa Masculina",
    description: "Definição de mandíbula e harmonização dos traços masculinos",
  },
];

const BeforeAfterSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(false);
  const [zoom, setZoom] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setIsAfter(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setIsAfter(false);
  };

  const currentItem = beforeAfterData[currentIndex];

  // Pré-carrega todas as imagens (antes e depois) de todos os slides para evitar atraso ao trocar
  const preloadImages = beforeAfterData.flatMap((item) => [item.before, item.after]);

  return (
    <section className="py-20 bg-gradient-warm relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Preload invisível das imagens para troca instantânea */}
        <div aria-hidden="true" className="hidden">
          {preloadImages.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Procedimentos{" "}
            <span className="text-primary">Especializados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados excepcionais em procedimentos avançados de harmonização facial
          </p>
        </div>

        {/* Before/After Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-elegant bg-card">
              <img
                src={isAfter ? currentItem.after : currentItem.before}
                alt={isAfter ? "Depois do procedimento" : "Antes do procedimento"}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onClick={() => setZoom(true)}
                className="w-full h-full object-contain transition-all duration-500 cursor-zoom-in"
              />
              
              {/* Before/After Label */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-sm font-semibold text-foreground">
                  {isAfter ? "Depois" : "Antes"}
                </span>
              </div>

              <button
                onClick={() => setZoom(true)}
                aria-label="Ver em tela cheia"
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              >
                <Expand className="w-5 h-5 text-foreground" />
              </button>

              {/* Toggle Button */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <Button
                  onClick={() => setIsAfter(!isAfter)}
                  variant="secondary"
                  size="lg"
                  className="shadow-xl hover:shadow-2xl"
                >
                  {isAfter ? "Ver Antes" : "Ver Depois"}
                </Button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Resultado anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Próximo resultado"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Procedure Info */}
          <div className="mt-8 text-center animate-fade-in">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
              {currentItem.title}
            </h3>
            <p className="text-muted-foreground">{currentItem.description}</p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAfter(false);
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
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic max-w-xl mx-auto">
            "Os resultados podem variar de acordo com as características individuais de cada paciente. 
            Fotos reais de procedimentos realizados pela Dra. Blenda Lobão."
          </p>
        </div>
      </div>
      {zoom && (
        <ImageLightbox
          src={isAfter ? currentItem.after : currentItem.before}
          alt={currentItem.title}
          onClose={() => setZoom(false)}
        />
      )}
    </section>
  );
};

export default BeforeAfterSection;
