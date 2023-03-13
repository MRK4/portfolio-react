import { Urbanist } from 'next/font/google'
import '@/styles/globals.css'

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${urbanist.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
