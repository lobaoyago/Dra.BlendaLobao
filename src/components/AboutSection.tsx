import { Heart, Shield, Sparkles, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Heart,
      title: "Atendimento humanizado e exclusivo",
      description: "Cada paciente é único e merece atenção personalizada"
    },
    {
      icon: Sparkles,
      title: "Resultados naturais e elegantes",
               description: "Harmonia facial que realça sua beleza "
    },
    {
      icon: Shield,
      title: "Procedimentos de alto padrão",
      description: "Segurança e técnicas avançadas em cada atendimento"
    },
    {
      icon: Users,
      title: "Foco em autoestima e bem-estar",
      description: "Transformação que vem de dentro para fora"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-secondary mb-4 sm:mb-6">
              Sobre a Dra. Blenda Lobão
            </h2>
             <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
               Cada rosto conta uma história — meu propósito é realçar a sua beleza  
               e devolver a confiança que vem de dentro. Atendo cada paciente de forma única, 
               com empatia, técnica e sensibilidade, buscando resultados harmônicos e naturais.
             </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-hero rounded-xl p-5 sm:p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-lg shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
