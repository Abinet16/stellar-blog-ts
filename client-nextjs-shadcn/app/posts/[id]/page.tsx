import { apiGet } from "../../../lib/api";
import { Post } from "../../../lib/types";
import Comments from "../../../components/Comments";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await apiGet<Post>(`/posts/${params.id}`);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <Comments postId={params.id} />
    </div>
  );
}
