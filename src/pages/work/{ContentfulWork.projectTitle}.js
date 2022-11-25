import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'

const WorkTemplate
 = ({data}) => {
  const {year, description: {description}, projectTitle, projectImage, summary, url} = data.contentfulWork;

  console.log({data})
  return (
  
  <>
  <Layout>
    <h2>
      {projectTitle}
    </h2>
    <h5>{year}</h5>
    <p>
      {description}
    </p>
    <p>
      {summary}
    </p>
    <a href={url} target='_blank'>
      {projectTitle}
    </a>
    

                { projectImage.map((image) => {
                   const {gatsbyImageData} = image;
                   return (   
                     <GatsbyImage image={gatsbyImageData}/>
              )
               }) }
 
  </Layout>                     
  </>
  )
}

export default WorkTemplate

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
        gatsbyImageData(placeholder: DOMINANT_COLOR, width: 300)
      }
    }
  }
  `
