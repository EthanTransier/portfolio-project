import React from 'react'
import Image from 'next/image'

const ProjectCard = ({num, title, date, link, url, link2, info, type, increasePosition, decreasePosition, tags}) => {
  // if(title != ""){
  //   return (
  //     <div className='project-card' id={`card-${num}`}>
  //       <div className='cover'>
  //         <div className='title-container'>
  //           <h1 className='title'>{title}</h1>
  //           <h4 className='date'>{date}</h4>
  //         </div>
  //         {
  //           link == "" && link2 == "" ?
  //           <></>
  //           :
  //           <a href={link != "" ? `https://github/com/EthanTransier${link}` : link2}>
  //             <Image src={link != "" ? '/images/github.svg' : "/images/leave.svg"} width={7} height={7} alt='github'></Image>
  //           </a>
  //         }
  //       </div>
  //     </div>
  //   )
  // }
  // return (
  //   <div className='project-card project-not-found' id={`card-${num}`}>
  //       <div className="add-project">
  //         <p className='notfound'>404</p>
  //         <p>PROJECT NOT FOUND</p>
  //       </div>
  //   </div>
  // )
  if(tags){
    tags.sort((a, b) => b.length - a.length);
  }
  console.log(tags)
  return (
    <div className="project-card">
      <div className="title grid-item">
        <h1>{title}</h1>
        <h5>{type}</h5>
      </div>
      <div className="info grid-item">
        <p>{info}</p>
      </div>
      <div className="image-container grid-item">
        <div className="image" style={{backgroundImage: `url(${url})`}}>
            <div className="filter"></div>
            <div className="image-effect-container">
              <div className="image-effect img-eff-1" style={{backgroundImage: `url(${url})`}}></div>
              <div className="image-effect img-eff-2" style={{backgroundImage: `url(${url})`}}></div>
            </div>
          </div>
        </div>
      <div className="icon-link grid-item">
        {
            link == "" && link2 == "" ?
            <></>
            :
            <a href={link != "" ? `https://github.com/EthanTransier/${link}` : link2}>
              <Image src={link != "" ? '/images/github.svg' : "/images/leave.svg"} width={50} height={50} alt='github'></Image>
            </a>
          }
      </div>
      <div className="tags grid-item">
        {
          tags ? 
          tags.map((tag, index) => (
            <div key={index} className="tag">{tag}</div>
          ))
          :
          <></>
        }
      </div>
      <div className="bottom-bar grid-item"> </div>
      <div className="placeholder grid-item"> </div>
      <div className={`${num == 0 ? 'disabled' : ''} left-arrow grid-item`} onClick={decreasePosition}>
        <div className="arrow-container-left">
          <div className="inner-arrow-container">
            <Image src={'/images/arrow.svg'} height={50} width={50} alt='arrow'></Image>
          </div>
        </div>
      </div>
      <div className={`${num == 1 ? 'disabled' : ''} right-arrow grid-item`} onClick={increasePosition}>
        <div className="arrow-container-right">
          <div className="inner-arrow-container">
            <Image src={'/images/arrow.svg'} height={50} width={50} alt='arrow'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard