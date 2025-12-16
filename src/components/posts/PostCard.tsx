import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PostCardProps {
  id: string;
  author: {
    username: string;
    avatar: string;
    verified?: boolean;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

export const PostCard = ({ author, image, caption, likes, comments, timeAgo }: PostCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <article className="animate-slide-up rounded-xl border border-border bg-card overflow-hidden shadow-card">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="story-ring">
            <img
              src={author.avatar}
              alt={author.username}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-foreground">{author.username}</span>
              {author.verified && (
                <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <span className="text-xs text-muted-foreground">{timeAgo}</span>
          </div>
        </div>
        <Button variant="ghost" size="icon-sm">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-secondary">
        <img
          src={image}
          alt="Post"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          onDoubleClick={handleLike}
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLike}
              className={cn(
                "hover:bg-transparent",
                isLiked && "animate-like-pop"
              )}
            >
              <Heart
                className={cn(
                  "h-6 w-6 transition-colors",
                  isLiked ? "fill-destructive text-destructive" : "text-foreground"
                )}
              />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <MessageCircle className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-transparent">
              <Send className="h-6 w-6" />
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSaved(!isSaved)}
            className="hover:bg-transparent"
          >
            <Bookmark
              className={cn(
                "h-6 w-6 transition-colors",
                isSaved && "fill-foreground"
              )}
            />
          </Button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-foreground mb-2">
          {likeCount.toLocaleString()} likes
        </p>

        {/* Caption */}
        <p className="text-foreground">
          <span className="font-semibold mr-2">{author.username}</span>
          {caption}
        </p>

        {/* Comments */}
        <button className="text-muted-foreground text-sm mt-2 hover:text-foreground transition-colors">
          View all {comments} comments
        </button>
      </div>
    </article>
  );
};
