import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { useMediaQuery } from "../../hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { label: "Главная", href: "/" },
    { label: "О компании", href: "/about" },
    { label: "Каталог авто", href: "/catalog" },
    { label: "Услуги", href: "/services" },
    { label: "Контакты", href: "/contacts" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/0ac0a650-173c-4ae1-a9af-8fbf8cd2a868.png" 
                alt="CARSUNTRADE" 
                className="h-12"
              />
              <span className="text-xl font-bold ml-2 hidden md:block">CARSUNTRADE</span>
            </Link>
          </div>

          {!isMobile ? (
            <nav className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-carsun-red font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Phone className="h-5 w-5 text-carsun-red" />
              </Button>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Звоните нам</span>
                <a href="tel:+79001234567" className="font-medium">+7 (900) 123-45-67</a>
              </div>
            </div>

            {isMobile && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleMenu}
                className="md:hidden"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* Мобильное меню */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg z-50">
          <div className="px-4 py-3 space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block py-2 text-gray-700 hover:text-carsun-red font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-3 flex items-center">
              <Phone className="h-5 w-5 text-carsun-red mr-3" />
              <a href="tel:+79001234567" className="font-medium">+7 (900) 123-45-67</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
