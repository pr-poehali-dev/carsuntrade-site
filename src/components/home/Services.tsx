import { Link } from "react-router-dom";
import Container from "../ui/container";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface ServiceProps {
  title: string;
  description: string;
  icon: string;
  linkTo: string;
}

const ServiceCard = ({ title, description, icon, linkTo }: ServiceProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link to={linkTo}>
          <Button variant="link" className="text-carsun-red p-0 font-medium">
            Подробнее
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      title: "Автомобили из Японии",
      description: "Привоз качественных японских автомобилей с аукционов Японии напрямую под ваш заказ.",
      icon: "🇯🇵",
      linkTo: "/services/japan",
    },
    {
      title: "Автомобили из Кореи",
      description: "Поставка новых и б/у автомобилей корейского производства по выгодным ценам.",
      icon: "🇰🇷",
      linkTo: "/services/korea",
    },
    {
      title: "Автомобили из Китая",
      description: "Современные китайские автомобили с гарантией качества и полным таможенным оформлением.",
      icon: "🇨🇳",
      linkTo: "/services/china",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональный подбор и доставка автомобилей из Азии под ваш заказ. 
            Прозрачность процесса и гарантия качества.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              linkTo={service.linkTo}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button className="bg-carsun-red hover:bg-red-700 text-white">
              Все услуги
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Services;
