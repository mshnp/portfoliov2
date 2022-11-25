import * as React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, StaticImage} from "gatsby-plugin-image"
import { graphql, Link } from "gatsby"
import Projects from "../components/Projects"
import slugify from "react-slugify"
import AllProjects from "../components/AllProjects"

export const query = graphql`
  {
    allContentfulWork(sort: {order: ASC, fields: projectTitle}) {
      nodes {
        id
        projectTitle
      }
    }
  }
`

const IndexPage = ({data}) => {
  const titles = (data.allContentfulWork.nodes)
  return (
      <Layout>
        <StaticImage src="../images/mish.jpg" alt="mishean peiris" placeholder="blurred" layout ='fixed' width={400}
      />
        <h2> 
          Current Stack
        </h2>
        <p>
          HTML / CSS / Styled-Components / Javascript / React / Redux 
        </p>
        <h2>
          Tools 
        </h2>
        <p>
          Gatsby / Contentful / Node.js / Jest / Enzyme / Google Analytics / GitHub / Figma / Google Survey / MailChimp / Adobe Illustrator / Adobe Photoshop / Adobe Premire Pro
        </p>
        <h2>Work</h2>
            <section>
          <AllProjects/>
          </section>
        <h2>Sound Propagation</h2>
        <iframe src="https://open.spotify.com/embed/playlist/4ihTSAlIeFSJqUwQluMJUG?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </Layout>   
  )
}

export default IndexPage
