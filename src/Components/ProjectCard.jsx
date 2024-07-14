import React from 'react'
import Image from 'next/image'

const ProjectCard = ({num, title, date, link, url, link2, info, type}) => {
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
  return (
    <div className="project-card">
      <div className="col-1 col">
        <div className="title-container">
          <h1>{title}</h1>
        </div>
        <div className="info-container">
          <p>{info}</p>
        </div>
      </div>
      <div className="col-2 col">
        <div className="type-container">
          <h3>{type}</h3>
        </div>
        <div className="image-container">
          <div className="image" style={{backgroundImage: `url(${url})`}}>
            {/* <Image src={url} height={1000} width={500} alt="image effect" className='image-effect'></Image> */}
            <div className="filter"></div>
            <div className="image-effect-container">
              <div className="image-effect img-eff-1" style={{backgroundImage: `url(${url})`}}></div>
              <div className="image-effect img-eff-2" style={{backgroundImage: `url(${url})`}}></div>
            </div>
          </div>
          {/* <Image src={url} width={1000} height={1000} alt='image'></Image> */}
        </div>
      </div>
      <div className="col-3 col">
        <div className="actions-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24"><defs><path id="weuiArrowOutlined0" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/></defs><use fill-rule="evenodd" href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)"/></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.5em" height="1em" viewBox="0 0 12 24"><defs><path id="weuiArrowOutlined0" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/></defs><use fill-rule="evenodd" href="#weuiArrowOutlined0" transform="rotate(-180 5.02 9.505)"/></svg>
        </div>
        <div className="github-container">
          <Image src={'/images/github.svg'} width={50} height={50} alt='github'></Image>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard