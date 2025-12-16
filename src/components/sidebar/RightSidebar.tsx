import { Button } from "@/components/ui/button";

const suggestions = [
  {
    id: "1",
    username: "creative_studio",
    name: "Creative Studio",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=150",
    mutual: 12,
  },
  {
    id: "2",
    username: "tech_innovations",
    name: "Tech Innovations",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
    mutual: 8,
  },
  {
    id: "3",
    username: "nature_explorer",
    name: "Nature Explorer",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150",
    mutual: 5,
  },
  {
    id: "4",
    username: "music_vibes",
    name: "Music Vibes",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150",
    mutual: 15,
  },
];

export const RightSidebar = () => {
  return (
    <aside className="hidden xl:block fixed right-0 top-0 w-80 h-screen border-l border-border bg-sidebar p-6">
      {/* Current User */}
      <div className="flex items-center gap-3 mb-8">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
          alt="Your profile"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-foreground">your_username</p>
          <p className="text-sm text-muted-foreground">John Doe</p>
        </div>
        <Button variant="link" className="text-primary text-sm p-0">
          Switch
        </Button>
      </div>

      {/* Suggestions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Suggested for you
          </span>
          <Button variant="link" className="text-foreground text-xs p-0">
            See All
          </Button>
        </div>

        <div className="space-y-4">
          {suggestions.map((user) => (
            <div key={user.id} className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">
                  {user.username}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Followed by {user.mutual} mutual
                </p>
              </div>
              <Button variant="link" className="text-primary text-xs p-0">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-xs text-muted-foreground/50">
          © 2024 SocialeX · About · Help · Privacy · Terms
        </p>
      </div>
    </aside>
  );
};
