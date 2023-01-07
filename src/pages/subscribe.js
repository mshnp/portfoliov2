import React from 'react'
import Layout from '../components/Layout'
import Form from '../components/Form'
import { SEO } from "../components/SEO"

const Subscribe = () => {


  return (
    <>
    <Layout>
      <main className='flex flex-col items-center justify-center min-h-[calc(100vh-168px)]'>
        <section className='w-full'>
          <Form/>
        </section> 
        <section>
          <p className='max-w-4xl text-center px-5'>
            Subscribe for a weekly mailing list consisting of: images, new sites, opnion pieces, playlists...
          </p>
        </section>
      </main>
    </Layout>
    </>
  )
}



export const Head = () => (
  <SEO title="MSHN | SUBSCRIBE"/>
)


export default Subscribe