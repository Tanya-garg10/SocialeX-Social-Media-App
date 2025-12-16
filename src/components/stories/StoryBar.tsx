import { Plus } from "lucide-react";
import { StoryAvatar } from "./StoryAvatar";

const stories = [
  { id: "add", username: "Your story", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150", isAdd: true },
  { id: "1", username: "alex_design", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", hasStory: true },
  { id: "2", username: "sarah_dev", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", hasStory: true },
  { id: "3", username: "mike_photo", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", hasStory: true },
  { id: "4", username: "emma_art", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150", hasStory: true, seen: true },
  { id: "5", username: "john_music", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150", hasStory: true },
  { id: "6", username: "lisa_travel", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150", hasStory: true, seen: true },
];

export const StoryBar = () => {
  return (
    <div className="mb-6 rounded-xl border border-border bg-card p-4 shadow-card">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {stories.map((story) => (
          <StoryAvatar
            key={story.id}
            username={story.username}
            avatar={story.avatar}
            hasStory={story.hasStory}
            seen={story.seen}
            isAdd={story.isAdd}
          />
        ))}
      </div>
    </div>
  );
};
