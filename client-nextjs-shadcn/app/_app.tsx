import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Protected'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className="container py-10"><Component {...pageProps} /></main>
    </div>
  )
}
