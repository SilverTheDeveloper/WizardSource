import React from 'react'
function Bookcard(props) {
  return (

    <>
     <a  href={props.pdf}>
      <div className='my-9 border glass p-4 rounded-md  hover:scale-105 mx-3 shadow-xl duration-300 ease-in-out'>
        <img src={props.img} alt="" />
      </div>
      </a>
    </>
  )
}

export default Bookcard 
