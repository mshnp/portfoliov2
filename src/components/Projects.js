import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'react-slugify'

const Projects = ({ projects = [] }) => {
  return (
    <div>
        <div>
      {projects.map(project => {
            const {id, projectImage:[{gatsbyImageData}], projectTitle} = project;
            const slug = slugify(projectTitle, {lower:true})
            return (
                <Link key={id} to={`/work/${slug}`}>
            <GatsbyImage
              image={gatsbyImageData}
              alt={projectTitle}
            />
            <h5>{projectTitle}</h5>
          </Link>
            )
        })}

    </div>
    </div>
  )
}

export default Projects



 
