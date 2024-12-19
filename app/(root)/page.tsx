import { Footer } from "@/app/(root)/_components/footer";
import { Hero } from "@/app/(root)/_components/landing-sections/hero-section";
import { VisionSection } from "@/app/(root)/_components/landing-sections/vision-section";
import { Testimonials } from "@/app/(root)/_components/landing-sections/testimonials-section";
import { ReatltimeSection } from "@/app/(root)/_components/landing-sections/realtime-section";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <VisionSection />
      <ReatltimeSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
