import { apiGet } from "../../lib/api";
import { Post } from "../../lib/types";
import PostCard from "../../components/PostCard";

export default async function PostsPage() {
  const posts = await apiGet<Post[]>("/posts");

  return (
    <div>
      <h1>All Posts</h1>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}
