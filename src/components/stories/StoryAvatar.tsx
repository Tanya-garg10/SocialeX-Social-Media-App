import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryAvatarProps {
  username: string;
  avatar: string;
  hasStory?: boolean;
  seen?: boolean;
  isAdd?: boolean;
}

export const StoryAvatar = ({ username, avatar, hasStory, seen, isAdd }: StoryAvatarProps) => {
  return (
    <button className="flex flex-col items-center gap-2 min-w-[72px] group">
      <div className={cn(
        "relative rounded-full p-[3px] transition-transform duration-200 group-hover:scale-105",
        hasStory && !seen && "story-ring",
        hasStory && seen && "story-ring-seen",
        !hasStory && !isAdd && "bg-border"
      )}>
        <div className="relative h-16 w-16 overflow-hidden rounded-full bg-secondary">
          <img
            src={avatar}
            alt={username}
            className="h-full w-full object-cover"
          />
          {isAdd && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/60">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Plus className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
      </div>
      <span className="max-w-[72px] truncate text-xs text-muted-foreground">
        {username}
      </span>
    </button>
  );
};
