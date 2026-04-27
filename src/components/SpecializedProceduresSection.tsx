import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import beforeCompleta from "@/assets/before-harmonizacao-completa.jpg";
import afterCompleta from "@/assets/after-harmonizacao-completa.jpg";
import beforePerfiloplastia from "@/assets/before-perfiloplastia.png";
import afterPerfiloplastia from "@/assets/after-perfiloplastia.png";

const proceduresData = [
  {
    before: beforeCompleta,
    beforeWebP: undefined,
    after: afterCompleta,
    title: "Definição de Contorno Facial",
    description: "Bioestimulador de colágeno e contorno mandibular",
  },
  {
    before: beforePerfiloplastia,
    beforeWebP: undefined,
    after: afterPerfiloplastia,
    title: "Perfiloplastia",
    description: "Rinoplastia e mentoplastia para harmonização do perfil facial",
  },
];

const SpecializedProceduresSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAfter, setIsAfter] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % proceduresData.length);
    setIsAfter(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + proceduresData.length) % proceduresData.length);
    setIsAfter(false);
  };

  const currentItem = proceduresData[currentIndex];

  // Pré-carrega todas as imagens (antes e depois) para troca instantânea
  const preloadImages = proceduresData.flatMap((item) => [item.before, item.after]);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Resultados Naturais e{" "}
            <span className="text-primary">Transformadores</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada resultado é único, porque cada rosto conta uma história diferente
          </p>
        </div>

        {/* Before/After Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-elegant bg-card">
              <picture>
                {currentItem.beforeWebP && !isAfter && (
                  <source srcSet={currentItem.beforeWebP} type="image/webp" />
                )}
                <img
                  src={isAfter ? currentItem.after : currentItem.before}
                  alt={isAfter ? "Depois do procedimento" : "Antes do procedimento"}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-contain transition-all duration-500"
                />
              </picture>
              
              {/* Before/After Label */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-sm font-semibold text-foreground">
                  {isAfter ? "Depois" : "Antes"}
                </span>
              </div>

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
            {proceduresData.map((_, index) => (
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
    </section>
  );
};

export default SpecializedProceduresSection;
