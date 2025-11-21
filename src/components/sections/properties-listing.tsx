"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Maximize, Building2, UtensilsCrossed, Briefcase, Store, Warehouse } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// const properties = [
//   {
//     id: 1,
//     title: "Modern Commercial Building",
//     image: "/Property.jpeg",
//   },
//   {
//     id: 2,
//     title: "Brand Factory Retail Complex",
//     image: "/BrandFactory.jpeg",
//   },
//   {
//     id: 3,
//     title: "MassMutual & Medtronic Office Tower",
//     image: "/MassMutual.jpeg",
//   },
//   {
//     id: 4,
//     title: "MPM Times Square Retail",
//     image: "/MPMTimesSquare.jpeg",
//   },
//   {
//     id: 5,
//     title: "Ratnadeep Retail Outlet",
//     image: "/Ratnadeep.jpeg",
//   },
//   {
//     id: 6,
//     title: "AU Infra Commercial Project",
//     image: "/AUInfra.jpeg",
//   },
//   {
//     id: 7,
//     title: "F-Studio Fashion Showroom",
//     image: "/FStudio.jpeg",
//   },
// ];

const properties = [
  {
    id: 1,
    title: "Tech Hub Office Spaces",
    location: "Kokapet, Financial District, Nanakramguda, Hitech City, Begumpet",
    areaRange: "500 sq.ft to 5 Lakhs sq.ft",
    propertyType: "office",
    typeLabel: "Office Space",
    image: "/co-working.jpg",
    featured: true,
    icon: Building2,
  },
  {
    id: 2,
    title: "Restaurant Space",
    location: "Banjara Hills, Gachibowli, Jubilee Hills, Hitech City, Kondapur",
    areaRange: "500 to 50,000 sq.ft",
    propertyType: "restaurant",
    typeLabel: "Restaurant",
    image: "/Hospitality.jpg",
    featured: true,
    icon: UtensilsCrossed,
  },
  {
    id: 3,
    title: "Corporate Headquarters",
    location: "Banjara Hills, Financial District, Nanakramguda, Kokapet, Narsingni",
    areaRange: "3,000 to 5 Lakhs sq.ft",
    propertyType: "corporate",
    typeLabel: "Corporate Office",
    image: "/commercial.webp",
    featured: true,
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Retail Spaces",
    location: "Banjara Hills, Jubilee Hills, Kokapet, Nanakramguda, Narsingni, Gachibowli, Hitech City, Madhapur, Begumpet, Secunderabad",
    areaRange: "500 to 50,000 sq.ft",
    propertyType: "retail",
    typeLabel: "Retail Space",
    image: "/Property.jpeg",
    featured: false,
    icon: Store,
  },
  {
    id: 5,
    title: "Warehouses & Industrial Shed",
    location: "Balanagar, Shamsabad, Bholaram, Shameerpet, Patancheru, Kuthur, City Outskirts",
    areaRange: "10,000 to 20 Lakhs sq.ft",
    propertyType: "warehouse",
    typeLabel: "Warehouse",
    image: "/warehouse.jpg",
    featured: false,
    icon: Warehouse,
  },
  {
    id: 6,
    title: "Premium Retail Complex",
    location: "Banjara Hills, Hyderabad",
    areaRange: "2,000 to 15,000 sq.ft",
    propertyType: "retail",
    typeLabel: "Retail Space",
    image: "/PremiumRetailComplex.png",
    featured: true,
    icon: Store,
  },
];

export default function PropertiesListing() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

  // Filter properties based on search and filters
  const filteredProperties = properties.filter((property) => {
    // Search filter
    const matchesSearch = 
      searchTerm === "" ||
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.typeLabel.toLowerCase().includes(searchTerm.toLowerCase());

    // Property type filter
    const matchesType = propertyType === "all" || property.propertyType === propertyType;

    // Size range filter (simplified - checking if area range overlaps)
    let matchesSize = true;
    if (priceRange !== "all") {
      const areaRange = property.areaRange.toLowerCase();
      if (priceRange === "0-5000") {
        matchesSize = areaRange.includes("500") || areaRange.includes("5,000") || areaRange.includes("5000");
      } else if (priceRange === "5000-50000") {
        matchesSize = areaRange.includes("5,000") || areaRange.includes("50,000") || areaRange.includes("50000");
      } else if (priceRange === "50000+") {
        matchesSize = areaRange.includes("lakhs") || areaRange.includes("20 lakhs") || areaRange.includes("5 lakhs");
      }
    }

    return matchesSearch && matchesType && matchesSize;
  });

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-dark mb-3 sm:mb-4">
            Available <span className="text-primary">Properties</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Explore premium commercial and industrial spaces across Hyderabad's prime locations
          </p>
        </div>

        {/* Search and Filters */}
        <div className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search by location, property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary"
              />
            </div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary"
            >
              <option value="all">All Sizes</option>
              <option value="0-5000">Up to 5,000 sq.ft</option>
              <option value="5000-50000">5,000 - 50,000 sq.ft</option>
              <option value="50000+">Above 50,000 sq.ft</option>
            </select>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary"
            >
              <option value="all">All Types</option>
              <option value="office">Office Space</option>
              <option value="restaurant">Restaurant</option>
              <option value="corporate">Corporate Office</option>
              <option value="retail">Retail Space</option>
              <option value="warehouse">Warehouse</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full text-center py-8 sm:py-12">
              <p className="text-base sm:text-lg text-muted-foreground px-4">No properties found matching your criteria.</p>
            </div>
          ) : (
            filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms' }}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {property.featured && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-primary text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    Available
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  {property.icon && <property.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />}
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">{property.typeLabel}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {property.title}
                </h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-3 sm:mb-4">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground">
                    <Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-medium">{property.areaRange}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                  <div className="w-full sm:w-auto">
                    <p className="text-xs sm:text-sm text-muted-foreground">Available</p>
                    <p className="text-base sm:text-lg font-bold text-primary">Contact for Pricing</p>
                  </div>
                  <button className="w-full sm:w-auto bg-primary text-white px-5 sm:px-6 py-2 text-sm sm:text-base rounded-full hover:bg-button-hover transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
            ))
          )}
        </div>

        {/* Load More */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-full hover:bg-primary hover:text-white transition-colors font-semibold">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
}



