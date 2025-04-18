import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "../components/layout/Layout";
import Container from "../components/ui/container";

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
          <h1 className="text-8xl font-bold text-carsun-red">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-6">Страница не найдена</h2>
          <p className="text-gray-600 mb-8 text-center max-w-md">
            Страница, которую вы ищете, не существует или была перемещена.
          </p>
          <Link to="/">
            <Button className="bg-carsun-red hover:bg-red-700 text-white">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default NotFound;
