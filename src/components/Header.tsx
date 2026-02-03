import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "Про нас" },
    { href: "#properties", label: "Об'єкти" },
    { href: "#news", label: "Новини" },
    { href: "#contact", label: "Контакти" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg 
                viewBox="0 0 40 40" 
                fill="none" 
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path 
                  d="M20 4L4 16V36H16V24H24V36H36V16L20 4Z" 
                  stroke="white" 
                  strokeWidth="2.5" 
                  fill="none"
                />
                <rect x="17" y="12" width="6" height="6" stroke="white" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                ХАТОСФЕРА
              </span>
              <span className="block text-xs text-muted-foreground tracking-widest uppercase">
                Агенція нерухомості
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+380123456789" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+380 12 345 6789</span>
            </a>
            <Button className="btn-primary">
              Консультація
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+380123456789" className="flex items-center gap-2 text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+380 12 345 6789</span>
              </a>
              <Button className="btn-primary w-full mt-2">
                Консультація
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
