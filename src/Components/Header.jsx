import Navbar from './Navbar'
const header = (page) => {
  return (
    <div className="header">
        <div className="top-green-line"></div>
        <Navbar page={page}></Navbar>
    </div>
  )
}

export default header