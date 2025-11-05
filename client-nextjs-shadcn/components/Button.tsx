export default function Button({children, onClick}:{children:React.ReactNode, onClick?:()=>void}){
  return <button onClick={onClick} className='px-4 py-2 rounded bg-white/6 hover:bg-white/10'>{children}</button>
}
