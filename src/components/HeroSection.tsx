import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import blendaHero from "@/assets/blenda-hero.jpg";
const HeroSection = () => {
  return <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in order-2 md:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight tracking-tight">
                  Dra Blenda Lobão
                </h1>
                <div className="h-1 w-20 sm:w-24 bg-primary rounded-full"></div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground font-light leading-relaxed">
                Atendimento humanizado e resultados naturais que realçam a sua beleza com harmonia e segurança.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto">
                <a href="https://wa.me/5571999850764" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                  <span className="text-sm sm:text-base">Agende sua avaliação</span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="https://www.instagram.com/drablendalobao/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Instagram className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Conheça meu Instagram</span>
                </a>
              </Button>
            </div>

            {/* Credibility Badge */}
            <div className="pt-3 sm:pt-4 border-t border-border">
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                <span className="text-primary font-semibold">CRO BA 24485</span> • 
                Cirurgiã-Dentista
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in order-1 md:order-2">
            <div className="relative">
              {/* Main Image - Large and Prominent */}
              <div className="relative rounded-3xl md:rounded-[2rem] overflow-hidden shadow-elegant">
                <div className="aspect-[3/4] md:aspect-[4/5]">
                  <img 
                    src={blendaHero} 
                    alt="Dra. Blenda Lobão - Cirurgiã-dentista especialista em harmonização orofacial" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 border-2 border-primary/30 rounded-3xl md:rounded-[2.5rem] pointer-events-none" style={{ zIndex: -1 }}></div>
              
              {/* Decorative Elements - More Vibrant */}
              <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-32 h-32 md:w-48 md:h-48 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ zIndex: -2 }}></div>
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-40 h-40 md:w-56 md:h-56 bg-accent/30 rounded-full blur-3xl pointer-events-none" style={{ zIndex: -2 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;