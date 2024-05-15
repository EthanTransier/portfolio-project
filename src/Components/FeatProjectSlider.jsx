import React from 'react'
import FeatProjectCard from './FeatProjectCard'

const FeatProjectSlider = () => {
  return (
    <div className='feat-project-slider'>
        <FeatProjectCard num={3} title="WEB PORTFOLIO" url="/images/web-portfolio.png" link="portfolio-project"></FeatProjectCard>
        <FeatProjectCard title="GAME PROJECT" url="/images/game.png" link="unity-project"></FeatProjectCard>
        <FeatProjectCard title="QUIKTEK COMPUTER PROJECTS" url="/images/quiktek.png" link="" link2="http://www.quiktekcomputer.com/index.html"></FeatProjectCard>
    </div>
  )
}

export default FeatProjectSlider