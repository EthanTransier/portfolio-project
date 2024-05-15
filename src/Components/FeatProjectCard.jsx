import React from 'react'
import Image from 'next/image'

const ProjectCard = ({num, title, date, link, url, link2}) => {
  if(title != ""){
    return (
      <div className='feat-project-card' id={`card-${num}`} style={{backgroundImage: `url(${url})`}}>
        <div className='cover'>
          <div className='title-container'>
            <h1 className='title'>{title}</h1>
            <h4 className='date'>{date}</h4>
          </div>
          {
            link == "" && link2 == "" ?
            <></>
            :
            <a href={link != "" ? `https://github/com/EthanTransier${link}` : link2}>
              <Image src={link != "" ? '/images/github.svg' : "/images/leave.svg"} width={7} height={7} alt='github'></Image>
            </a>
          }
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