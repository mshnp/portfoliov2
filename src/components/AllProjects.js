import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Projects from './Projects'


const AllProjects = () => {

  const data = useStaticQuery(graphql`
    {
      allContentfulWork {
        nodes {
          id
          projectImage {
            description
            gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FIXED, width: 300)
          }
          projectTitle
        }
      }
    }
  `)

    const projects = data.allContentfulWork.nodes
    
  return (
     
    <div><Projects projects={projects}/></div>
  )
}

export default AllProjects