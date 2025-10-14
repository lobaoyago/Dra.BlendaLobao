import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
            Seu novo olhar sobre si mesma começa aqui.
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-light">
            Agende sua avaliação e descubra como a harmonização facial pode transformar sua autoestima
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              asChild
              className="group shadow-xl hover:shadow-2xl"
            >
              <a 
                href="https://wa.me/5571999850764" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Falar no WhatsApp
              </a>
            </Button>
            
            <Button 
              variant="accent" 
              size="lg"
              asChild
              className="group shadow-xl hover:shadow-2xl"
            >
              <a 
                href="https://www.instagram.com/drablendalobao/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Ver resultados no Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
