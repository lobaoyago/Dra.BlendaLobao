import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Por diversas vezes, acompanhava antes e depois de várias pessoas na internet mas nunca tive aquela vontade real de voltar a me cuidar. Até que, acompanhando Blenda eu senti que precisava despertar a Jamille antiga, e com ela eu poderei encontrar conforto, segurança no procedimento e coragem para dar o primeiro passo. Eu só tenho uma coisa a dizer, conheçam o trabalho dessa mulher. Obrigada por fazer esse reencontro lindo na melhor fase da minha vida.",
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
    },
    {
      text: "Eu jamais entregaria meu rosto pra ninguém além de você, confio de olhos fechados no seu trabalho! Posso dizer com propriedade que você tem o dom de fazer o que faz, obrigado por todo o carinho e atenção nesse processo!",
      author: "Lucca Mauad"
    },
    {
      text: "Tive a melhor experiência do mundo com a Dra. Blenda. Ela é extremamente atenciosa, te ouve com atenção, mas mais do que isso, te explica tudo desde o início. Ela te faz entender realmente o procedimento que você pretende fazer e te explica exatamente como e para o que serve. Além disso, é muito honesta com o olhar técnico dela para falar o que ela não mexeria e o que ela não aconselharia fazer. Foi uma verdadeira aula. Senti muita confiança desde o começo, os procedimentos foram feitos de forma super indolor e o suporte no pós é incrível! Ela e a equipe dão todo o suporte, mandam mensagem pra saber como você está e realmente se preocupam. Hoje sou completamente apaixonada pelo meu rostinho e mal posso esperar para voltar! Foi uma escolha muito especial e bem feita. Recomendo de olhos fechados!",
      author: "Renata Ferrari"
    },
    {
      text: "Dra. Blenda, eu PRECISO dizer: estou simplesmente apaixonada pelo resultado da minha harmonização! Mesmo com o rostinho ainda um pouquinho inchado, já sinto toda a diferença. Minha autoestima foi lá pra cima, minha confiança tá brilhando e, pra completar, ainda fez um MILAGRE 🙌🏼 🤣 levantou meu olho de peixe morto kkkkkk que até minha visão melhorou! Obrigada por todo o carinho, cuidado, paciência e atenção comigo. Você não é só uma médica maravilhosa… é oficialmente responsável pela minha nova fase, e face!! E já vou avisando: não te largo nunca mais! Se prepareeee, porque agora você ganhou uma cliente grudada igual glitter no carnaval!",
      author: "Ianara Tissian"
    },
    {
      text: "Blenda foi incrível e superou todas as minhas expectativas. Sempre tive muito receio de procedimentos estéticos, especialmente no rosto. Mas o meu sorriso gengival me incomodava bastante e queria uma solução para isso. Blenda resolveu não somente o meu sorriso… fez muito mais ao meu rosto! Realçando minha beleza natural de forma sútil e delicada, respeitando meus traços. Indico de olhos fechados e com certeza retornarei.",
      author: "Lorena Luduvice"
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

        {/* Testimonials Scrollable Container */}
        <div className="max-h-[500px] overflow-y-auto pr-2 max-w-6xl mx-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 100}ms` }}
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
