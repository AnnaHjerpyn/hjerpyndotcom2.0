import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anna Hjerpyn!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Work in Progress!" />
        <p className="description">
          Updates coming soon <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
