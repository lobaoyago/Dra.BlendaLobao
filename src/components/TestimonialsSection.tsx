import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Recuperei minha autoestima. A Dra. Blenda me fez enxergar o melhor de mim.",
      author: "Maria S."
    },
    {
      text: "Natural, leve e exatamente como eu queria. Atendimento impecável.",
      author: "Juliana R."
    },
    {
      text: "Finalmente me sinto confiante ao tirar fotos. Resultado incrível!",
      author: "Carolina M."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">
            Depoimentos de Pacientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de transformação e confiança
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-semibold text-primary">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
