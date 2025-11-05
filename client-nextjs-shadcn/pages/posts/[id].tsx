import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const PostPage:NextPage = ()=> {
  const router = useRouter(); const { id } = router.query;
  const [post, setPost] = useState<any>(null);
  useEffect(()=>{ if(!id) return; fetch((process.env.NEXT_PUBLIC_API_URL||'') + '/api/posts/' + id).then(r=>r.json()).then(setPost).catch(()=>{}) },[id])
  if(!post) return <div className='card'>Loading...</div>
  return (
    <article className='card max-w-3xl mx-auto'>
      <h1 className='text-3xl font-bold mb-2'>{post.title}</h1>
      <div className='prose' dangerouslySetInnerHTML={{__html: post.content}} />
      <div className='mt-6 text-sm text-gray-400'>By {post.author?.name} • {new Date(post.createdAt).toLocaleDateString()}</div>
    </article>
  )
}
export default PostPage
