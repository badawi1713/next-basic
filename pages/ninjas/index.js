import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Ninjas.module.css'
export const getStaticProps = async () => {
  // *can't run in the browser? BECAUSE IT'S ONLY STATIC, IF U WANT TO GET DYNAMIC DATA USE getServerSideProps
  // ONLY GETS CALLED AT BUILD TIME
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      ninjas: data
    }
  }
}

const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name='keywords' content='ninja' />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas?.map(item => (
        <Link key={item.id} href={`/ninjas/${item.id}`}>
          <a className={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Ninjas
