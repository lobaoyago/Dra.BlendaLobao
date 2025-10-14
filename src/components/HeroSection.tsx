import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
const HeroSection = () => {
  return <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-secondary leading-tight">
                Mais do que estética.{" "}
                <span className="text-primary">
                  Eu devolvo autoestima, confiança e poder.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Atendimento humanizado e resultados naturais que realçam a sua beleza com harmonia e segurança.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="group">
                <a href="https://wa.me/5571999850764" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Agende sua avaliação no WhatsApp
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.instagram.com/drablendalobao/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Instagram className="mr-2 h-5 w-5" />
                  Conheça meu Instagram
                </a>
              </Button>
            </div>

            {/* Credibility Badge */}
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground font-medium">
                <span className="text-secondary font-semibold">CRO BA 24485</span> • 
                Cirurgiã-Dentista Especialista em Estética Facial
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img src={heroImage} alt="Dra. Blenda Lobão - Cirurgiã-dentista especialista em estética facial" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent my-0 mx-0 px-[10px] py-[10px]"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;