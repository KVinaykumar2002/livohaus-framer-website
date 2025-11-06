import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import AboutHero from "@/components/sections/about-hero";
import AboutSection from "@/components/sections/about";
import StatsSection from "@/components/sections/stats";
import TeamSection from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[88px]">
        <AboutHero />
        <StatsSection />
        <AboutSection />
        <TeamSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
