import React from 'react'
import Layout from '../../components/Layout'
import { graphql, Link } from 'gatsby'
import slugify from 'react-slugify'
import { GatsbyImage } from 'gatsby-plugin-image'
import { SEO } from '../../components/SEO'

const Work = ({data: {allContentfulWork: {nodes}}}) => {

  
    
  return (
   
    <>
    <Layout>
      <main className='flex flex-col items-center justify-center min-h-[calc(100vh-168px)]'>
        <section >
          <article>
            {nodes.map((node) => {
              const {id, projectTitle, projectImage:[{gatsbyImageData}], projectImage:[{description}],summary } = node;
              const slug = slugify(projectTitle, {lower:true})
                return (
                  <div>
                    <div className='pb-2.5'> 
                     <GatsbyImage image={gatsbyImageData} alt={description} title={description}/>
                    </div>
            
              <Link key={id} to={`/work/${slug}`}>
               <p className='underline pb-2.5 text-center'>
              {projectTitle}
              
            </p>
            </Link> 
              <p className='pb-5 text-center'>
              {summary}
            </p>
             </div>
               )
                }
               )
               }

          </article>
          
             
        </section>
      </main>
    </Layout>
    </>
  )
}

export const Head = () => (
  <SEO title="MISHEAN | WORK"/>
)


export const query = graphql`
    {
      allContentfulWork {
        nodes {
          id
          summary 
          projectImage {
            description
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FIXED, width: 300)
          }
          projectTitle
        }
      }
    }

`

export default Work 