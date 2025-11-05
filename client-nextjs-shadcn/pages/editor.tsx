import { NextPage } from 'next'
import { useState } from 'react'

const Editor:NextPage = ()=> {
  const [title,setTitle] = useState(''); const [content,setContent] = useState('');
  const publish = async ()=>{
    const token = localStorage.getItem('token');
    const res = await fetch((process.env.NEXT_PUBLIC_API_URL||'') + '/api/posts', {
      method:'POST', headers: { 'Content-Type':'application/json', Authorization: token?`Bearer ${token}`:'' },
      body: JSON.stringify({ title, content })
    });
    if(res.ok) alert('Published'); else alert('Failed');
  }
  return (
    <div className='max-w-3xl mx-auto card'>
      <h2 className='text-2xl font-semibold mb-4'>New Post</h2>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='Title' className='w-full mb-3 p-3 bg-transparent border border-white/6 rounded' />
      <textarea value={content} onChange={e=>setContent(e.target.value)} rows={12} placeholder='Write your post...' className='w-full p-3 bg-transparent border border-white/6 rounded' />
      <div className='mt-4 flex justify-end'><button onClick={publish} className='px-4 py-2 rounded bg-white/6 hover:bg-white/10'>Publish</button></div>
    </div>
  )
}
export default Editor
