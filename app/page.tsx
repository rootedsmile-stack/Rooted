import CouponPanel from '../components/CouponPanel';
import Header from '../components/Header';
import ProductHero from '../components/ProductHero';
import BenefitsSection from '../components/BenefitsSection';
import IngredientsSection from '../components/IngredientsSection';
import HowToUseSection from '../components/HowToUseSection';
import ProductDetails from '../components/ProductDetails';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <CouponPanel />
      <Header />
      <main>
        <ProductHero />
        <BenefitsSection />
        <IngredientsSection />
        <HowToUseSection />
        <ProductDetails />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
