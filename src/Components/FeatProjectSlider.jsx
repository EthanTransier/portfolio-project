import React from 'react'
import FeatProjectCard from './FeatProjectCard'

const FeatProjectSlider = () => {
  return (
    <div className='feat-project-slider'>
        <FeatProjectCard title="INTERNSHIP PORTFOLIO" url="/images/sydney-curtis.png" link="" link2="https://scurtisphd.com/home"></FeatProjectCard>
        <FeatProjectCard title="GAME PROJECT" url="/images/game.png" link="unity-project"></FeatProjectCard>
        <FeatProjectCard title="QUIKTEK COMPUTER PROJECTS" url="/images/quiktek.png" link="" link2="http://www.quiktekcomputer.com/index.html"></FeatProjectCard>
    </div>
  )
}

export default FeatProjectSlider