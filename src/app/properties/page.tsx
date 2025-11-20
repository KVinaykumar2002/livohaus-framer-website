import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import PropertiesListing from "@/components/sections/properties-listing";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main className="pt-[120px] overflow-x-hidden">
        <PropertiesListing />
      </main>
      <Footer />
    </div>
  );
}
