import { Button } from "../ui/button";
import Container from "../ui/container";

const HeroBanner = () => {
  return (
    <div className="relative bg-carsun-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg"
          alt="Автомобили из Японии, Кореи и Китая"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <Container className="relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Надежный импорт автомобилей из Азии
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Мы привозим качественные автомобили из Японии, Кореи и Китая напрямую под заказ. 
            Полное таможенное оформление и доставка до вашего города.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-carsun-red hover:bg-red-700 text-white">
              Подобрать автомобиль
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Наши услуги
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 backdrop-blur-sm rounded-lg">
              <div className="text-carsun-red text-2xl font-bold">7+</div>
              <div className="text-white">лет опыта</div>
            </div>
            <div className="bg-white/10 p-4 backdrop-blur-sm rounded-lg">
              <div className="text-carsun-red text-2xl font-bold">1000+</div>
              <div className="text-white">довольных клиентов</div>
            </div>
            <div className="bg-white/10 p-4 backdrop-blur-sm rounded-lg">
              <div className="text-carsun-red text-2xl font-bold">100%</div>
              <div className="text-white">гарантия качества</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
