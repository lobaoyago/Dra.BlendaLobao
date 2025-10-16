import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Por diversas vezes, acompanhava antes e depois de várias pessoas na internet mas nunca tive aquela vontade real de voltar a me cuidar. Até que, acompanhando Blenda eu senti que precisava despertar a Jamille antiga, e com ela eu poderia encontrar conforto, segurança no procedimento e coragem para dar o primeiro passo. Eu só tenho uma coisa a dizer, conheçam o trabalho dessa mulher. Obrigada por fazer esse reencontro lindo na melhor fase da minha vida.",
      author: "Jamille Alves"
    },
    {
      text: "Você deixou exatamente como eu sonhava: natural, delicado e do meu jeito. Até minha mãe, que morre de medo dessas coisas, disse que ficou lindo! Obrigada pelo atendimento incrível, pela paciência e por explicar cada detalhe com tanto cuidado, algo tão raro hoje em dia. Você arrasa!",
      author: "Victoria Santiago"
    },
    {
      text: "Fiquei extremamente satisfeito com a minha experiência na clínica! O profissionalismo foi notável, desde o primeiro contato até o final do procedimento, o que me deu muita segurança. O resultado ficou incrível e natural, superando todas as minhas expectativas!",
      author: "Dermeval Camara"
    },
    {
      text: "Fazer a harmonização com você foi um divisor de águas pra mim. Eu tinha medo de ficar diferente demais, mas você entendeu exatamente o que eu queria, o resultado ficou super natural, do jeitinho que eu sonhava. Além de todo o cuidado e profissionalismo, o que mais me marcou foi o carinho com que você faz o seu trabalho. Dá pra sentir que você coloca amor em cada detalhe. Hoje me sinto mais confiante, mais leve e com a autoestima lá em cima. Obrigada por realçar o que eu já tinha de bonito e me fazer sentir ainda mais eu.",
      author: "Rafaella Souza"
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
