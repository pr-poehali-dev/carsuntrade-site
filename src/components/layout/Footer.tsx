import { Link } from "react-router-dom";
import Container from "../ui/container";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-carsun-black text-white pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="https://cdn.poehali.dev/files/0ac0a650-173c-4ae1-a9af-8fbf8cd2a868.png" 
                alt="CARSUNTRADE" 
                className="h-16"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              Профессиональный привоз автомобилей из Японии, Кореи и Китая на заказ
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-carsun-red rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-carsun-red rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Навигация */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">
                  Каталог авто
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Услуги */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/japan" className="text-gray-400 hover:text-white transition-colors">
                  Автомобили из Японии
                </Link>
              </li>
              <li>
                <Link to="/services/korea" className="text-gray-400 hover:text-white transition-colors">
                  Автомобили из Кореи
                </Link>
              </li>
              <li>
                <Link to="/services/china" className="text-gray-400 hover:text-white transition-colors">
                  Автомобили из Китая
                </Link>
              </li>
              <li>
                <Link to="/services/custom" className="text-gray-400 hover:text-white transition-colors">
                  Таможенное оформление
                </Link>
              </li>
              <li>
                <Link to="/services/delivery" className="text-gray-400 hover:text-white transition-colors">
                  Доставка по России
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-carsun-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Владивосток, ул. Примостская, 15А</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-carsun-red flex-shrink-0" />
                <a href="tel:+79001234567" className="text-gray-400 hover:text-white">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-carsun-red flex-shrink-0" />
                <a href="mailto:info@carsuntrade.ru" className="text-gray-400 hover:text-white">
                  info@carsuntrade.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CARSUNTRADE. Все права защищены.
            </p>
            <div className="mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-gray-400 mr-4">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-gray-400">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
