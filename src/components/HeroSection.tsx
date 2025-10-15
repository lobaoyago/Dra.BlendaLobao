import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import blendaImage1 from "@/assets/blenda-1.jpg";
import blendaImage2 from "@/assets/blenda-2.jpg";
const HeroSection = () => {
  return <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20">
        <div className="grid md:grid-cols-5 gap-6 sm:gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-6 sm:space-y-8 animate-fade-in">
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

          {/* Images Grid */}
          <div className="md:col-span-3 relative animate-scale-in">
            <div className="relative">
              {/* Two Images Side by Side */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {/* Image 1 */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant aspect-[3/4]">
                  <img 
                    src={blendaImage1} 
                    alt="Dra. Blenda Lobão - Cirurgiã-dentista" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Image 2 */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant aspect-[3/4]">
                  <img 
                    src={blendaImage2} 
                    alt="Dra. Blenda Lobão - Especialista em estética facial" 
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 sm:-inset-4 border-2 border-primary/20 rounded-2xl sm:rounded-3xl -z-10"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-28 h-28 sm:w-40 sm:h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;