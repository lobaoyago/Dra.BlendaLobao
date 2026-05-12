import { Droplet, Zap, Scissors, Syringe, Sparkles, Wind, Layers, Leaf, Cpu } from "lucide-react";

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
      description: "Estimulo de colágeno, lifting facial e fox eyes com um procedimento minimamente invasivo."
    },
    {
      icon: Syringe,
      title: "Toxina Botulínica",
      description: "Melhora das linhas de expressão, prevenção de envelhecimento e correção de assimetrias."
    },
    {
      icon: Zap,
      title: "Microagulhamento",
      description: "Entrega de ativos para melhoria da qualidade de pele, tratamento de manchas e estimulo de colágeno."
    },
    {
      icon: Wind,
      title: "Lipo de Papada Enzimática",
      description: "Realça o contorno facial sem cirurgias."
    },
    {
      icon: Leaf,
      title: "Mesoterapia",
      description: "Aplicação de ativos diretamente na pele para revitalização, hidratação profunda e melhora da firmeza."
    },
    {
      icon: Layers,
      title: "Peeling",
      description: "Renovação celular para tratar manchas, cicatrizes e melhorar a textura e luminosidade da pele."
    },
    {
      icon: Cpu,
      title: "Tecnologias",
      description: "Equipamentos de última geração para rejuvenescimento, firmeza e tratamentos faciais avançados."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-secondary mb-3 sm:mb-4">
            Procedimentos e Tratamentos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Técnicas avançadas para realçar sua beleza natural e devolver sua autoestima
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {procedures.map((procedure, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-3 sm:mb-4">
                <div className="inline-flex p-2.5 sm:p-3 bg-gradient-primary rounded-lg shadow-md group-hover:scale-110 transition-transform">
                  <procedure.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 font-serif">
                {procedure.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {procedure.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-muted-foreground italic font-light">
            "Resultados personalizados e naturais — porque cada rosto é único."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
