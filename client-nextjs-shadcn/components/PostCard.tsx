import Link from 'next/link';
export type Post = { _id?: string; title: string; excerpt?: string; author?: any; createdAt?: string };
export default function PostCard({post}:{post:Post}){
  return (
    <article className="card">
      <Link href={`/posts/${post._id ?? "1"}`} className="block">
        {/* //<a className='block'> */}
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{post.author?.name ?? "Unknown"}</span>
          <time>
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString()
              : ""}
          </time>
        </div>
        {/* //</a> */}
      </Link>
    </article>
  );
}
