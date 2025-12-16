import { MainLayout } from "@/components/layout/MainLayout";
import { Settings, Grid3X3, Bookmark, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const userPosts = [
  "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400",
  "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=400",
  "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=400",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400",
  "https://images.unsplash.com/photo-1682687218147-9806132dc697?w=400",
  "https://images.unsplash.com/photo-1682686581030-7fa4ea2b96c3?w=400",
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
          <div className="story-ring p-1">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300"
              alt="Profile"
              className="h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <h1 className="text-xl font-semibold text-foreground">your_username</h1>
              <div className="flex items-center gap-2">
                <Button variant="secondary" className="h-9">
                  Edit Profile
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Settings className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-8 mb-4">
              <div className="text-center">
                <span className="font-bold text-foreground">248</span>
                <span className="text-muted-foreground ml-1">posts</span>
              </div>
              <button className="text-center hover:opacity-80 transition-opacity">
                <span className="font-bold text-foreground">14.2K</span>
                <span className="text-muted-foreground ml-1">followers</span>
              </button>
              <button className="text-center hover:opacity-80 transition-opacity">
                <span className="font-bold text-foreground">892</span>
                <span className="text-muted-foreground ml-1">following</span>
              </button>
            </div>

            <div>
              <p className="font-semibold text-foreground">John Doe</p>
              <p className="text-muted-foreground text-sm mt-1">
                Digital creator | Developer | Coffee enthusiast ☕
              </p>
              <p className="text-muted-foreground text-sm">
                Building cool stuff and sharing the journey 🚀
              </p>
              <a href="#" className="text-primary text-sm font-medium hover:underline">
                linktr.ee/johndoe
              </a>
            </div>
          </div>
        </div>

        {/* Story Highlights */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {["Travel", "Code", "Food", "Music"].map((highlight) => (
            <div key={highlight} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="h-16 w-16 rounded-full border-2 border-border flex items-center justify-center bg-secondary">
                <span className="text-2xl">
                  {highlight === "Travel" ? "✈️" : highlight === "Code" ? "💻" : highlight === "Food" ? "🍕" : "🎵"}
                </span>
              </div>
              <span className="text-xs text-foreground">{highlight}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-2 min-w-[80px]">
            <div className="h-16 w-16 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">+</span>
            </div>
            <span className="text-xs text-muted-foreground">New</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-border">
          <div className="flex justify-center gap-12">
            {[
              { id: "posts", icon: Grid3X3, label: "Posts" },
              { id: "saved", icon: Bookmark, label: "Saved" },
              { id: "tagged", icon: Tag, label: "Tagged" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 py-4 border-t-2 -mt-[2px] transition-colors",
                  activeTab === tab.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon className="h-4 w-4" />
                <span className="text-xs font-medium uppercase tracking-wider hidden sm:block">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-3 gap-1 mt-4">
          {userPosts.map((post, index) => (
            <div key={index} className="relative aspect-square overflow-hidden group cursor-pointer">
              <img
                src={post}
                alt={`Post ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-6 text-foreground font-semibold">
                  <span>❤️ 2.4K</span>
                  <span>💬 48</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
