import { apiGet } from "../../../lib/api";
import { Post } from "../../../lib/types";
import Comments from "../../../components/Comments";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await apiGet<Post>(`/posts/${params.id}`);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>{post.title}</h1>
      <p style={{ marginTop: 16, lineHeight: 1.6 }}>{post.content}</p>

      <div style={{ marginTop: 40 }}>
        <Comments postId={params.id} />
      </div>
    </div>
  );
}
