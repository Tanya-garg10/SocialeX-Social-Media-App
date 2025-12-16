import { MainLayout } from "@/components/layout/MainLayout";
import { Search, Edit, Circle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const conversations = [
  {
    id: "1",
    user: { username: "alex_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    lastMessage: "That sounds great! Let's meet tomorrow.",
    time: "2m",
    unread: true,
    online: true,
  },
  {
    id: "2",
    user: { username: "mike_photo", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" },
    lastMessage: "Check out these new shots 📸",
    time: "15m",
    unread: true,
    online: false,
  },
  {
    id: "3",
    user: { username: "sarah_dev", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    lastMessage: "The code looks good!",
    time: "1h",
    unread: false,
    online: true,
  },
  {
    id: "4",
    user: { username: "emma_art", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    lastMessage: "Thanks for the feedback!",
    time: "3h",
    unread: false,
    online: false,
  },
  {
    id: "5",
    user: { username: "john_music", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
    lastMessage: "New track dropping soon 🎵",
    time: "1d",
    unread: false,
    online: false,
  },
];

const Messages = () => {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Messages</h1>
          <Button variant="ghost" size="icon">
            <Edit className="h-5 w-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            className="pl-10 h-10 bg-secondary border-border rounded-lg"
          />
        </div>

        {/* Conversations */}
        <div className="space-y-1">
          {conversations.map((convo) => (
            <button
              key={convo.id}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-xl transition-colors",
                "hover:bg-secondary",
                convo.unread && "bg-secondary/50"
              )}
            >
              <div className="relative">
                <img
                  src={convo.user.avatar}
                  alt={convo.user.username}
                  className="h-14 w-14 rounded-full object-cover"
                />
                {convo.online && (
                  <Circle className="absolute bottom-0 right-0 h-4 w-4 fill-green-500 text-green-500" />
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "font-medium",
                    convo.unread ? "text-foreground" : "text-foreground"
                  )}>
                    {convo.user.username}
                  </span>
                  <span className="text-xs text-muted-foreground">{convo.time}</span>
                </div>
                <p className={cn(
                  "text-sm truncate",
                  convo.unread ? "text-foreground font-medium" : "text-muted-foreground"
                )}>
                  {convo.lastMessage}
                </p>
              </div>
              {convo.unread && (
                <div className="h-2 w-2 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Messages;
