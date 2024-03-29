import Navbar from './Navbar'
import {useState} from 'react'
const header = (page) => {
  const [navState, setNavState] = useState(false)
  
  function openNav(){
    setNavState(!navState)
    console.log(navState)
  }

  return (
    <div className="header">
        <div className="top-green-line"></div>
        <div className={navState ? 'hamburger-nav open' : 'hamburger-nav'} onClick={() => openNav()}>
          <div className='line line-1'></div>
          <div className='line line-2'></div>
          <div className='line line-3'></div>
        </div>
        <Navbar page={page} navState={navState}></Navbar>
    </div>
  )
}

export default header