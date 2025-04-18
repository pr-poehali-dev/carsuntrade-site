import Layout from "../components/layout/Layout";
import HeroBanner from "../components/home/HeroBanner";
import Services from "../components/home/Services";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonials";
import ContactForm from "../components/home/ContactForm";

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
    </Layout>
  );
};

export default Index;
