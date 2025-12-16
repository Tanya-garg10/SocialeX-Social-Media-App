import { MainLayout } from "@/components/layout/MainLayout";
import { Heart, MessageCircle, UserPlus, AtSign } from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    id: "1",
    type: "like",
    user: { username: "alex_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    content: "liked your photo",
    time: "2m ago",
    postImage: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=100",
    isNew: true,
  },
  {
    id: "2",
    type: "follow",
    user: { username: "mike_photo", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
    content: "started following you",
    time: "15m ago",
    isNew: true,
  },
  {
    id: "3",
    type: "comment",
    user: { username: "sarah_dev", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    content: "commented: 'This is amazing! 🔥'",
    time: "1h ago",
    postImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=100",
    isNew: true,
  },
  {
    id: "4",
    type: "mention",
    user: { username: "emma_art", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    content: "mentioned you in a comment",
    time: "3h ago",
    isNew: false,
  },
  {
    id: "5",
    type: "like",
    user: { username: "john_music", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    content: "and 24 others liked your photo",
    time: "5h ago",
    postImage: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=100",
    isNew: false,
  },
  {
    id: "6",
    type: "follow",
    user: { username: "lisa_travel", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" },
    content: "started following you",
    time: "1d ago",
    isNew: false,
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "like":
      return <Heart className="h-4 w-4 text-destructive fill-destructive" />;
    case "comment":
      return <MessageCircle className="h-4 w-4 text-primary" />;
    case "follow":
      return <UserPlus className="h-4 w-4 text-green-500" />;
    case "mention":
      return <AtSign className="h-4 w-4 text-accent" />;
    default:
      return null;
  }
};

const Notifications = () => {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">Notifications</h1>

        {/* New Section */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">New</h2>
          <div className="space-y-1">
            {notifications
              .filter((n) => n.isNew)
              .map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="relative">
                    <img
                      src={notif.user.avatar}
                      alt={notif.user.username}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-card">
                      {getIcon(notif.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{notif.user.username}</span>{" "}
                      {notif.content}
                    </p>
                    <span className="text-xs text-muted-foreground">{notif.time}</span>
                  </div>
                  {notif.postImage && (
                    <img
                      src={notif.postImage}
                      alt="Post"
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Earlier Section */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3">Earlier</h2>
          <div className="space-y-1">
            {notifications
              .filter((n) => !n.isNew)
              .map((notif) => (
                <div
                  key={notif.id}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors"
                >
                  <div className="relative">
                    <img
                      src={notif.user.avatar}
                      alt={notif.user.username}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-card">
                      {getIcon(notif.type)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{notif.user.username}</span>{" "}
                      {notif.content}
                    </p>
                    <span className="text-xs text-muted-foreground">{notif.time}</span>
                  </div>
                  {notif.postImage && (
                    <img
                      src={notif.postImage}
                      alt="Post"
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Notifications;
