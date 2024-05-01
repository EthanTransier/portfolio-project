import React from 'react'
import Image from 'next/image'

const ProjectCard = ({num, title, date, link, url}) => {
  if(title != ""){
    return (
      <div className='project-card' id={`card-${num}`} style={{backgroundImage: `url(${url})`}}>
        <div className='cover'>
          <div className='title-container'>
            <h1 className='title'>{title}</h1>
            <h4 className='date'>{date}</h4>
          </div>
          <Image src={'/images/github.svg'} width={7} height={7} alt='github'></Image>
        </div>
      </div>
    )
  }
  return (
    <div className='project-card project-not-found' id={`card-${num}`}>
        <div className="add-project">
          <p className='notfound'>404</p>
          <p>PROJECT NOT FOUND</p>
        </div>
    </div>
  )
}

export default ProjectCard