import * as React from "react"
import Layout from "../components/Layout"
import { SEO } from "../components/SEO"

// markup
const NotFoundPage = () => {
  return (
    <>
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-168px)]">
        <h1>
          404
        </h1>
        <h3>
          Error Page Not Found
        </h3>
      </section>
    </Layout>
    </>
  )
}

export const Head = () => (
  <SEO title="MISHEAN | 404"/>
)


export default NotFoundPage
