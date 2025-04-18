import { useState } from "react";
import Container from "../ui/container";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-gray-600 mb-6">
              Заполните форму, и наш менеджер свяжется с вами в ближайшее время для консультации
              и подбора автомобиля по вашим параметрам.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Наши контакты</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Владивосток, ул. Примостская, 15А</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span>
                  <a href="tel:+79001234567" className="hover:text-carsun-red">
                    +7 (900) 123-45-67
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  <a href="mailto:info@carsuntrade.ru" className="hover:text-carsun-red">
                    info@carsuntrade.ru
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">
                    Ваше имя <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Телефон <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Укажите параметры автомобиля или другую информацию"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-carsun-red hover:bg-red-700 text-white"
                  disabled={loading}
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                </Button>

                <p className="text-xs text-gray-500 mt-2">
                  Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности и обработки персональных данных
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
