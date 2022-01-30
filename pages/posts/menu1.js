import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Dian Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Dian</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
