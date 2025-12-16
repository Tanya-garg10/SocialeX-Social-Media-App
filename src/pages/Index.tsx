import { MainLayout } from "@/components/layout/MainLayout";
import { StoryBar } from "@/components/stories/StoryBar";
import { PostFeed } from "@/components/posts/PostFeed";
import { RightSidebar } from "@/components/sidebar/RightSidebar";

const Index = () => {
  return (
    <MainLayout>
      <div className="xl:mr-80">
        <StoryBar />
        <PostFeed />
      </div>
      <RightSidebar />
    </MainLayout>
  );
};

export default Index;
