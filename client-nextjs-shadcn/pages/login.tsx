import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login:NextPage = ()=> {
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const router = useRouter();
  const submit = async ()=>{
    const res = await fetch((process.env.NEXT_PUBLIC_API_URL||'')+'/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
    const data = await res.json();
    if(res.ok){ localStorage.setItem('token', data.token); router.push('/'); } else alert(data.message || 'Login failed');
  }
  return (
    <div className='max-w-md mx-auto card'>
      <h2 className='text-2xl font-semibold mb-4'>Login</h2>
      <input value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email' className='w-full mb-3 p-3 bg-transparent border border-white/6 rounded' />
      <input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password' className='w-full mb-3 p-3 bg-transparent border border-white/6 rounded' />
      <div className='flex justify-end'><button onClick={submit} className='px-4 py-2 rounded bg-white/6 hover:bg-white/10'>Login</button></div>
    </div>
  )
}
export default Login
