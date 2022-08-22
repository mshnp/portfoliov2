import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import slugify from 'react-slugify'
import { GatsbyImage } from 'gatsby-plugin-image'


const Work = ({data: {allContentfulWork: {nodes}}}) => {

    
  return (
   
    <>
    <Layout>
      <main>
        <section>
          <article>
            {nodes.map((node) => {
              const {id, projectTitle, summary } = node;
              const slug = slugify(projectTitle, {lower:true})
                return (
                  <div>
                   
           
                {  node.projectImage.map((image) => {
                   const {gatsbyImageData} = image;
                   return (   
                     <GatsbyImage image={gatsbyImageData}/>
              )
               }) }
              <Link key={id} to={`/work/${slug}`}>
               <h3>
              {projectTitle}
            </h3>
              <p>
              {summary}
            </p>
             </Link> </div>
               )
                }
               )
               }

          </article>
          
             
        </section>
        <section>
          <p>sign up for my weekly newsletter</p>
        </section>
      </main>
    </Layout>
    </>
  )
}



export const query = graphql`
    {
      allContentfulWork {
        nodes {
          id
          description {
            description
          }
          summary 
          projectImage {
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FIXED, width: 300)
          }
          projectTitle
        }
      }
    }

`

export default Work 