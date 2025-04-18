import { useState } from "react";
import Container from "../ui/container";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  position: string;
  testimonial: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, position, testimonial, rating, image }: TestimonialProps) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <img
              src={image}
              alt={name}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-gray-500 text-sm">{position}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 flex-grow">{testimonial}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      name: "Алексей Петров",
      position: "Владелец Toyota Land Cruiser",
      testimonial: "Очень доволен работой CARSUNTRADE. Помогли привезти автомобиль из Японии, все оформили быстро и без проблем. Теперь езжу на отличной машине без переплат.",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Екатерина Иванова",
      position: "Владелец KIA Sorento",
      testimonial: "Привезли KIA Sorento из Кореи в идеальном состоянии. Очень порадовала прозрачность всех этапов сделки и отношение к клиенту. Рекомендую!",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Сергей Кузнецов",
      position: "Владелец Chery Tiggo 8 Pro",
      testimonial: "Заказывал китайский автомобиль, беспокоился о качестве, но компания все сделала на высшем уровне. Машина пришла вовремя, все в полном порядке.",
      rating: 4,
      image: "/placeholder.svg",
    },
    {
      name: "Ольга Смирнова",
      position: "Владелец Nissan X-Trail",
      testimonial: "Профессиональный подход на всех этапах. Помогли с выбором, проверили автомобиль по всем параметрам. Очень довольна своим Nissan!",
      rating: 5,
      image: "/placeholder.svg",
    },
    {
      name: "Максим Николаев",
      position: "Владелец Hyundai Tucson",
      testimonial: "Уже второй раз обращаюсь в CARSUNTRADE и опять все на высшем уровне. Быстро, четко и без лишних проблем.",
      rating: 5,
      image: "/placeholder.svg",
    },
  ];

  const testimonialsPerPage = 3;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pageCount);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Более 1000 довольных клиентов уже получили свои автомобили. 
            Вот что они говорят о сотрудничестве с нами.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {Array.from({ length: pageCount }).map((_, i) => (
                <Button
                  key={i}
                  variant={i === currentPage ? "default" : "outline"}
                  size="icon"
                  className={`w-8 h-8 rounded-full ${
                    i === currentPage ? "bg-carsun-red hover:bg-red-700" : ""
                  }`}
                  onClick={() => setCurrentPage(i)}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Testimonials;
