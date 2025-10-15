import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
const HeroSection = () => {
  return <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary leading-tight tracking-tight">
                  Dra Blenda Lobão
                </h1>
                <div className="h-1 w-24 bg-primary rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
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
                <span className="text-primary font-semibold">CRO BA 24485</span> • 
                Cirurgiã-Dentista
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-3 relative animate-scale-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] md:aspect-[3/4]">
                <img 
                  src={heroImage} 
                  alt="Dra. Blenda Lobão - Cirurgiã-dentista especialista em estética facial" 
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl -z-10"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;