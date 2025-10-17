import { Droplet, Zap, Scissors, Syringe, Sparkles, Wind } from "lucide-react";

const ProceduresSection = () => {
  const procedures = [
    {
      icon: Droplet,
      title: "Preenchimento com Ácido Hialurônico",
      description: "Realce e equilíbrio facial com resultados naturais e harmoniosos"
    },
    {
      icon: Sparkles,
      title: "Bioestimulador de Colágeno",
      description: "Trata a flacidez e alcança resultados rejuvenescedores, com firmeza e melhora da qualidade de pele."
    },
    {
      icon: Scissors,
      title: "Fios de PDO",
      description: "Sustentação e definição facial com Fox Eyes, Lifting e estímulo de colágeno"
    },
    {
      icon: Syringe,
      title: "Toxina Botulínica",
      description: "Full Face, tratamento de bruxismo e técnica Nefertiti para suavização e harmonia"
    },
    {
      icon: Zap,
      title: "Microagulhamento",
      description: "Estímulo da regeneração celular para luminosidade e textura impecável"
    },
    {
      icon: Wind,
      title: "Lipo de Papada Enzimática",
      description: "Contorno facial definido e leve, sem cirurgia"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            Procedimentos e Tratamentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas avançadas para realçar sua beleza natural e devolver sua autoestima
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {procedures.map((procedure, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="inline-flex p-3 bg-gradient-primary rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <procedure.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 font-serif">
                {procedure.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {procedure.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic font-light">
            "Resultados personalizados e naturais — porque cada rosto é único."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
