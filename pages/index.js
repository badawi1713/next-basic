import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
const Home = () => {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninja' />
      </Head>
      <>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum...</p>
        <p className={styles.text}>Lorem ipsum...</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </>
    </>
  )
}

export default Home
