import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'react-slugify'

const Projects = ({ projects = [] }) => {
  return (
    <div>
        <div>
      {projects.map(project => {
            const {id, projectImage:[{gatsbyImageData}], projectTitle, projectImage:[{description}]} = project;
            const slug = slugify(projectTitle, {lower:true})
            return (
            <section>
                <Link key={id} to={`/work/${slug}`}>
            <GatsbyImage
              image={gatsbyImageData}
              alt={description}
              title={description}
            />
            <p className='text-center py-2.5 underline'>{projectTitle}</p>
          </Link>
          </section>
            )
        })}

    </div>
    </div>
  )
}

export default Projects



 
