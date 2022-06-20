import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
    <meta name="description" content="Computer Science and Engineering student at OSU"></meta>
      <Head>
        <title>Anna Hjerpyn</title>
      </Head>
      <main>
        <Header title="ANNA HJERPYN*" />
        <div className="links">
          <span><a href="https://www.linkedin.com/in/anna-hjerpyn-707806212" target="_blank">LINKEDIN</a></span>
          <span><a href="https://github.com/AnnaHjerpyn" target="_blank">GITHUB</a></span>
          <span><a href="mailto:hjerpyn.2@osu.edu" target="_blank">EMAIL</a></span>
        </div>
        <div className="info">
          <p className="description">
            I'm currently a student at the Ohio State University studying Computer Science and Engineering with interests in Web Development and Bioinformatics.
          </p>
        </div>
      </main>
    </div>
  )
}
