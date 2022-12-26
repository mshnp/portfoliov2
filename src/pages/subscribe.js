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
            Subscribe for a weekly mailing list consisting of: found images, new sites, opnion pieces, reviews, playsits... ( basically whatever im interested in at the time)
          </p>
        </section>
      </main>
    </Layout>
    </>
  )
}



export const Head = () => (
  <SEO title="MISHEAN | SUBSCRIBE"/>
)


export default Subscribe