import { useState } from "react";
import { Sparkles, Award, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "./ImageLightbox";
import pizane1 from "@/assets/pizane-1.jpg";
import pizane2 from "@/assets/pizane-2.jpg";
import pizane3 from "@/assets/pizane-3.jpg";

const views = [
  { src: pizane1, label: "Vista Frontal" },
  { src: pizane2, label: "Vista Oblíqua" },
  { src: pizane3, label: "Vista de Perfil" },
];

const FeaturedCaseSection = () => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const current = views[index];

  const next = () => setIndex((i) => (i + 1) % views.length);
  const prev = () => setIndex((i) => (i - 1 + views.length) % views.length);

  return (
    <section className="py-14 sm:py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Preload */}
        <div aria-hidden className="hidden">
          {views.map((v) => (
            <img key={v.src} src={v.src} alt="" />
          ))}
        </div>

        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Caso Destaque
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Lucas Pizane
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Harmonização facial masculina com resultado natural e marcante,
            valorizando os traços individuais do paciente
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
          {/* Image Carousel */}
          <div className="lg:col-span-3 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elegant bg-card">
              <img
                src={current.src}
                alt={`Lucas Pizane - ${current.label} - antes e depois`}
                loading="eager"
                decoding="async"
                onClick={() => setZoom(true)}
                className="w-full h-full object-contain transition-all duration-500 cursor-zoom-in"
              />
              <div className="absolute top-4 left-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-sm font-semibold text-foreground">
                  {current.label}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-soft">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Antes • Depois
                </span>
              </div>
              <button
                onClick={() => setZoom(true)}
                aria-label="Ver em tela cheia"
                className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              >
                <Expand className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <button
              onClick={prev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Vista anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Próxima vista"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {views.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setIndex(i)}
                  className={`h-3 rounded-full transition-all ${
                    i === index ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground w-3"
                  }`}
                  aria-label={`Ver ${v.label}`}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            <div className="bg-card rounded-2xl p-6 shadow-soft border border-border">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-serif font-bold text-foreground">
                  Procedimentos Realizados
                </h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Definição de mandíbula com ácido hialurônico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Projeção de mento para harmonia do perfil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Toxina botulínica para correção de assimetria</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-primary rounded-2xl p-6 shadow-elegant text-primary-foreground">
              <p className="font-serif italic text-lg leading-relaxed">
                "Um trabalho de precisão para potencializar a masculinidade do
                rosto, com resultado natural e equilibrado em três vistas."
              </p>
              <p className="mt-4 text-sm opacity-90 font-semibold">
                — Dra. Blenda Lobão
              </p>
            </div>

            <Button asChild variant="hero" size="lg" className="w-full">
              <a
                href="https://wa.me/5571999850764"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero um resultado assim
              </a>
            </Button>
          </div>
        </div>
      </div>
      {zoom && (
        <ImageLightbox
          src={current.src}
          alt={`Lucas Pizane - ${current.label}`}
          onClose={() => setZoom(false)}
        />
      )}
    </section>
  );
};

export default FeaturedCaseSection;