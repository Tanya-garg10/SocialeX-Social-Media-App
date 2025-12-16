import { MainLayout } from "@/components/layout/MainLayout";
import { Image, Video, Smile, MapPin, Users, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Create = () => {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Create Post</h1>

        <div className="rounded-xl border border-border bg-card p-6 shadow-card">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
              alt="Profile"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-foreground">your_username</p>
              <p className="text-sm text-muted-foreground">Posting to everyone</p>
            </div>
          </div>

          {/* Image Upload Area */}
          {!selectedImage ? (
            <div className="border-2 border-dashed border-border rounded-xl p-12 text-center mb-6 hover:border-muted-foreground transition-colors cursor-pointer">
              <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center">
                  <Image className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Drag photos and videos here</p>
                  <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
                </div>
                <Button variant="gradient" className="mt-2">
                  Select from computer
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative mb-6">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full rounded-xl object-cover max-h-96"
              />
              <Button
                variant="secondary"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Quick Add Buttons */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setSelectedImage("https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800")}
              className="p-3 rounded-lg bg-secondary hover:bg-muted transition-colors"
            >
              <Image className="h-5 w-5 text-green-500" />
            </button>
            <button className="p-3 rounded-lg bg-secondary hover:bg-muted transition-colors">
              <Video className="h-5 w-5 text-destructive" />
            </button>
            <button className="p-3 rounded-lg bg-secondary hover:bg-muted transition-colors">
              <Users className="h-5 w-5 text-primary" />
            </button>
            <button className="p-3 rounded-lg bg-secondary hover:bg-muted transition-colors">
              <MapPin className="h-5 w-5 text-accent" />
            </button>
            <button className="p-3 rounded-lg bg-secondary hover:bg-muted transition-colors">
              <Smile className="h-5 w-5 text-yellow-500" />
            </button>
          </div>

          {/* Caption */}
          <div className="mb-6">
            <Textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="min-h-[120px] bg-secondary border-border resize-none text-foreground placeholder:text-muted-foreground"
            />
            <div className="flex items-center justify-between mt-2">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Smile className="h-5 w-5" />
              </button>
              <span className="text-xs text-muted-foreground">{caption.length}/2,200</span>
            </div>
          </div>

          {/* Post Button */}
          <Button variant="gradient" className="w-full" size="lg">
            Share Post
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Create;
