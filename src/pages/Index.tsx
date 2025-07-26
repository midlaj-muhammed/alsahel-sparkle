import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Excellence from '@/components/Excellence';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Excellence />
        <About />
        <Gallery />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
