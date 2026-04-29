import { Button } from "@/components/ui/button";
import { Instagram, MessageCircle } from "lucide-react";
import blendaHero from "@/assets/blenda-hero-new.jpg";
import blendaHeroMobile from "@/assets/blenda-hero-mobile.jpg";
import blendaHeroWebP from "@/assets/blenda-hero-new.webp";
import blendaHeroMobileWebP from "@/assets/blenda-hero-mobile.webp";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={`${blendaHeroMobileWebP} 800w, ${blendaHeroWebP} 1920w`} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw" type="image/webp" />
          <img src={blendaHero} srcSet={`${blendaHeroMobile} 800w, ${blendaHero} 1920w`} sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw" alt="Dra. Blenda Lobão - Cirurgiã-dentista especialista em harmonização orofacial" className="w-full h-full object-cover object-[50%_25%] sm:object-[60%_25%] md:object-[55%_25%] lg:object-[50%_25%]" loading="eager" fetchPriority="high" />
        </picture>
        {/* Dark overlay for text readability - positioned to not cover the doctor */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-transparent sm:from-black/80 sm:via-black/60 md:from-black/75 md:via-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 sm:py-24 md:py-32 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight">
                   Dra. Blenda Lobão
                </h1>
                <div className="h-1 w-24 sm:w-32 bg-primary rounded-full"></div>
              </div>
               <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed">Atendimento especializado e resultados  que realçam a sua beleza com harmonia e segurança.</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Button variant="hero" size="lg" asChild className="group w-full sm:w-auto shadow-2xl">
                <a href="https://wa.me/5571999850764" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
                  <span className="text-sm sm:text-base">Agende sua avaliação</span>
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white shadow-xl backdrop-blur-sm">
                <a href="https://www.instagram.com/drablendalobao/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  <Instagram className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">Conheça meu Instagram</span>
                </a>
              </Button>
            </div>

            {/* Credibility Badge */}
            <div className="pt-4 sm:pt-6 border-t border-white/30">
              <p className="text-xs sm:text-sm text-white/80 font-medium">
                <span className="text-primary font-semibold">CRO BA 24485</span> • 
                Cirurgiã-Dentista
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;