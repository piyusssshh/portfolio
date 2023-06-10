import '@/styles/globals.scss'
import HeadTag from '@/components/head'


export default function App({ Component, pageProps }) {
  return(
    <>
    <HeadTag/>
    <Component {...pageProps} />
    </>
    ) 
}
