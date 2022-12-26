import * as React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, StaticImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Projects from "../components/Projects"
import slugify from "react-slugify"
import AllProjects from "../components/AllProjects"
import { SEO } from "../components/SEO"


export const query = graphql`{
  allContentfulWork(sort: {projectTitle: ASC}) {
    nodes {
      id
      projectTitle
    }
  }
}`

const IndexPage = ({data}) => {
  const titles = (data.allContentfulWork.nodes)
  return (
    
      <Layout>
        <section className='flex flex-col items-center'>
        <StaticImage className="mb-2" src="../images/mish.jpg" alt="mishean peiris" placeholder="blurred" layout ='constrained' width={400}
      />
        <h2 className="pt-5"> 
          Current Stack
        </h2>
        <p className="text-center pt-2.5 px-5">
          HTML / CSS / tailwindcss / Javascript / React / Redux 
        </p>
        <h2 className="pt-5">
          Tools 
        </h2>
        <p className='max-w-4xl text-center pt-2.5 px-5'>
          Gatsby / Contentful / Node.js / Jest / Enzyme / Graphql / Google Analytics / GitHub / Figma / Google Survey / MailChimp / Adobe Illustrator / Adobe Photoshop / Adobe Premire Pro
        </p>
        <h2 className="py-5">Work</h2>
            <section>
          <AllProjects/>
          </section>
        <h2 className="py-2.5">Sound Propagation</h2>
        <iframe className="max-w-4xl" src="https://open.spotify.com/embed/playlist/4ihTSAlIeFSJqUwQluMJUG?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </section>
      </Layout>  
  )
}

export const Head = () => (
  <SEO />
)

export default IndexPage
