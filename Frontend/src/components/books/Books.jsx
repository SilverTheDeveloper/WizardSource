import React from 'react'
import CenterMode from '../books/Bookslider.jsx'
import Bookcard from './Bookcard.jsx'
function Books(props) {
  return (
    <>
      <div className={`text-center font-extrabold ${props.mode ? 'text-white':"text-black"} mt-16 text-3xl`} >
        <p>CLICK ON THE BOOK TO READ !!</p>
        <div className='block lg:hidden p-3'>
          <Bookcard img='../../../bookcover/Harry_Potter_1.jpg'
            pdf="./books/1.pdf" />
          <Bookcard img='../../../bookcover/Harry_Potter_2.jpg'
            pdf="./books/2.pdf" />
          <Bookcard img='../../../bookcover/Harry_Potter_3.jpg'
            pdf="./books/3.pdf" />
          <Bookcard img='../../../bookcover/Harry_Potter_4.jpg'
            pdf="./books/4.pdf" />
          <Bookcard img='../../../bookcover/Harry_Potter_5.jpg'
            pdf="./books/5.pdf" />
          <Bookcard img='../../../bookcover/Harry_Potter_6.jpg'
            pdf="./books/6.pdf" />
          <Bookcard img='../../../bookcover/Harry_Potter_7.jpg'
            pdf="./books/7.pdf" />

        </div>
        <div className='hidden lg:block'>
          <CenterMode />
        </div>
      </div>
    </>


  )
}

export default Books
