import '../globals.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }