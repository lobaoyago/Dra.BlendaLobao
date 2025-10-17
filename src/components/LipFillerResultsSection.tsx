import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lipFiller1 from "@/assets/lip-filler-1.png";
import lipFiller2 from "@/assets/lip-filler-2.png";
import lipFiller3 from "@/assets/lip-filler-3.png";
import lipFiller4 from "@/assets/lip-filler-4.png";

const lipFillerResults = [
  {
    image: lipFiller1,
    title: "Preenchimento Labial Natural",
    description: "Volume e definição com ácido hialurônico",
  },
  {
    image: lipFiller2,
    title: "Harmonização Labial Completa",
    description: "Contorno e projeção labial",
  },
  {
    image: lipFiller3,
    title: "Lábios Naturais com Volume",
    description: "Resultado sutil e elegante",
  },
  {
    image: lipFiller4,
    title: "Preenchimento Labial com Definição",
    description: "Volume equilibrado e contorno marcado",
  },
];

const LipFillerResultsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % lipFillerResults.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + lipFillerResults.length) % lipFillerResults.length);
  };

  const currentItem = lipFillerResults[currentIndex];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Resultados de{" "}
            <span className="text-primary">Preenchimento Labial</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lábios naturais, harmoniosos e cheios de vida
          </p>
        </div>

        {/* Results Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Image Display */}
            <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-elegant bg-card">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                loading="lazy"
                className="w-full h-full object-contain transition-all duration-500"
              />
              
              {/* Result Label */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-primary/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-sm font-semibold text-primary-foreground">
                  Resultado
                </span>
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
            {lipFillerResults.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
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
            "Resultados reais de preenchimento labial realizados pela Dra. Blenda Lobão. 
            Cada resultado é único e personalizado."
          </p>
        </div>
      </div>
    </section>
  );
};

export default LipFillerResultsSection;
