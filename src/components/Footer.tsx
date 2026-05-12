import { Instagram, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return <footer className="bg-secondary text-secondary-foreground py-10 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">
              Dra. Blenda Lobão
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">Transformando autoestima com naturalidade e cuidado.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/5571999850764" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+55 71 99985-0764</span>
              </a>
              <a href="https://www.instagram.com/drablendalobao/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
                <span className="text-sm">@drablendalobao</span>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Localização</h4>
            <div className="flex items-start gap-2 text-secondary-foreground/80">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p>Hangar Business Park</p>
                <p>Salvador — Bahia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            CRO BA 24485 • © {new Date().getFullYear()} Dra. Blenda Lobão. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;