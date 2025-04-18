import Container from "../ui/container";

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step = ({ number, title, description }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-carsun-red text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Заявка и консультация",
      description: "Вы оставляете заявку, и наш менеджер связывается с вами для консультации по подбору автомобиля."
    },
    {
      number: 2,
      title: "Подбор автомобиля",
      description: "Мы подбираем для вас автомобиль на аукционах и торговых площадках Японии, Кореи или Китая."
    },
    {
      number: 3,
      title: "Доставка и оформление",
      description: "Организуем доставку, таможенное оформление и передаем вам автомобиль в вашем городе."
    }
  ];

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наш процесс работы прозрачен и направлен на максимальное удобство для клиента. 
            От подбора до доставки — мы контролируем каждый этап.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
