import Link from 'next/link';
export default function Header(){
  return (
    <header className="border-b border-white/6">
      <div className="container flex items-center justify-between py-6">
        <Link href="/" className="text-2xl font-bold">
          Aurora Blog
        </Link>
        <nav className="flex gap-4 items-center">
          <Link href="/" className="text-sm text-gray-300 hover:text-white">
          Home  {/* Home <a></a> */}
          </Link>
          <Link
            href="/editor"
            className="text-sm text-gray-300 hover:text-white"
          >
           New Post {/*    <a></a> */}
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-gray-300 hover:text-white"
          >
         Dashboard {/* Dashboard  <a></a> */}
          </Link>
        </nav>
      </div>
    </header>
  );
}
