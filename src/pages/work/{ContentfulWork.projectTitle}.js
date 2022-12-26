import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import { SEO } from '../../components/SEO'

const WorkTemplate
 = ({data}) => {
  const {year, description: {description}, projectTitle, projectImage, summary, url} = data.contentfulWork;

  console.log({data})
  return (
  
  <>
  <Layout>
    <section className='flex flex-col items-center justify-center sticky min-h-[calc(100vh-168px)]'>
    <main className='flex flex-col items-center'>
    <h2>
      {projectTitle}
    </h2>
    <p className='pt-2'>
      {summary}
    </p>
    <p className='pt-2'>
      {year}
    </p>
    <a className='underline pt-2' href={url} target='_blank'>
      {projectTitle}
    </a>
    

                { projectImage.map((image) => {
                   const {gatsbyImageData} = image;
                   const {description} = image;
                   return (   
                    
                     <GatsbyImage className="mt-2" image={gatsbyImageData} alt={description} title={description}/>
              )
               }) }
  </main>            
  </section>
  </Layout>                     
  </>
  )
}

export default WorkTemplate

export const Head = ({data}) => {
  const {projectTitle} = data.contentfulWork;
return (
  <SEO title={`MISHEAN | ${projectTitle}`}/>
)
}


export const query = graphql`
  query getWork($projectTitle:String){
    contentfulWork(projectTitle: {eq: $projectTitle}) {
      year
      description {
        description
      }
      summary
      url
      projectTitle
      projectImage {
        description
        gatsbyImageData(placeholder: DOMINANT_COLOR, width: 300)
      }
    }
  }
  `
