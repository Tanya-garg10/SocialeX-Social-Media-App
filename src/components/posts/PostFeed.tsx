import { PostCard } from "./PostCard";

const posts = [
  {
    id: "1",
    author: {
      username: "alex_design",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      verified: true,
    },
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800",
    caption: "Lost in the beauty of nature 🌿 Sometimes you just need to disconnect to reconnect.",
    likes: 2847,
    comments: 142,
    timeAgo: "2h ago",
  },
  {
    id: "2",
    author: {
      username: "mike_photo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    },
    image: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?w=800",
    caption: "Golden hour hits different ☀️ #photography #sunset #landscape",
    likes: 5621,
    comments: 283,
    timeAgo: "5h ago",
  },
  {
    id: "3",
    author: {
      username: "emma_art",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      verified: true,
    },
    image: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=800",
    caption: "Creating magic one brushstroke at a time ✨ New collection dropping soon!",
    likes: 8934,
    comments: 567,
    timeAgo: "8h ago",
  },
  {
    id: "4",
    author: {
      username: "sarah_dev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
    caption: "Late night coding sessions 💻 Building something amazing. Stay tuned! #developer #coding",
    likes: 3456,
    comments: 198,
    timeAgo: "12h ago",
  },
];

export const PostFeed = () => {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
