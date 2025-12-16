import { MainLayout } from "@/components/layout/MainLayout";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const exploreImages = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400",
  "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=400",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
  "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=400",
  "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=400",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400",
  "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400",
];

const Explore = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for people, tags, or places..."
            className="pl-12 h-12 bg-secondary border-border rounded-xl text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
          {["For You", "Trending", "Art", "Travel", "Food", "Tech", "Music"].map((tab) => (
            <button
              key={tab}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors whitespace-nowrap first:bg-primary first:text-primary-foreground"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2">
          {exploreImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index % 5 === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image}
                alt={`Explore ${index + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Explore;
