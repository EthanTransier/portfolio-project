import React from 'react'
import Image from 'next/image'

const FeaturedProjects = () => {
  return (
    <div className='featured-projects'>
        <Image src="/images/featured.svg" alt="featured" height={100} width={1000} className='featured-image'></Image>
        <Image src="/images/projects.svg" alt="projects" height={100} width={1000} className='projects-image'></Image>
    </div>
  )
}

export default FeaturedProjects