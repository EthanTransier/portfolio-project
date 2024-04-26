import React from 'react'
import FeatProjectCard from './FeatProjectCard'

const FeatProjectSlider = () => {
  return (
    <div className='feat-project-slider'>
        <FeatProjectCard name={'GAME PROJECT'} time={'February 2024 - March 2024'} url1={"/images/game.png"} url2={'/images/game-project.png'} link={'test link'}></FeatProjectCard>
    </div>
  )
}

export default FeatProjectSlider