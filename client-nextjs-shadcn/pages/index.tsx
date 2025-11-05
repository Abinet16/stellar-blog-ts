import type { NextPage } from 'next'
import PostCard from '../components/PostCard'
import { useEffect, useState } from 'react'

const Home:NextPage = ()=> {
  const [posts, setPosts] = useState<any[]>([])
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/posts')
      .then(r=>r.json())
      .then(data=>setPosts(data))
      .catch(()=>{})
  },[])
  return (
    <div className='grid gap-6'>
      <header className='mb-6'>
        <h1 className='text-4xl font-extrabold'>Aurora — where words take flight</h1>
        <p className='text-gray-300 mt-2'>A modern, fast blog scaffold — TypeScript, Next.js, Tailwind — connected to your typed backend.</p>
      </header>
      <section className='grid md:grid-cols-2 gap-6'>
        {posts.length ? posts.map(p=> <PostCard key={p._id} post={p} />) : <div className='card'>No posts yet</div>}
      </section>
    </div>
  )
}
export default Home
