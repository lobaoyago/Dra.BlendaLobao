import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImageLightbox = ({ src, alt = "", onClose }: ImageLightboxProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização em tela cheia"
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-background/90 shadow-soft hover:shadow-md transition-all hover:scale-110 flex items-center justify-center z-10"
      >
        <X className="w-6 h-6 text-foreground" />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-lg shadow-elegant"
      />
    </div>
  );
};

export default ImageLightbox;