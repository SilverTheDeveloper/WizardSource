import React from "react";
import Slider from "react-slick";
import Bookcard from './Bookcard.jsx'
function  CenterMode() {


    var settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
   
      
   
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  



  };
  return (
    <div className="slider-container m-5 p-5">
      <Slider {...settings}>
        <div>
        <Bookcard img='./bookcover/Harry_Potter_1.jpg'
          pdf="./books/1.pdf"/>
        </div>
        <div>
        <Bookcard img='./bookcover/Harry_Potter_2.jpg'
         pdf="./books/2.pdf"/>
        </div>
        <div>
        <Bookcard img='../bookcover/Harry_Potter_3.jpg'
        pdf="./books/3.pdf"/>

        </div>
        <div>
        <Bookcard img='./bookcover/Harry_Potter_4.jpg'
        pdf="./books/4.pdf"/>
        </div>
        <div>
        <Bookcard img='./bookcover/Harry_Potter_5.jpg'
        pdf="./books/5.pdf"/>
        </div>
        <div>
        <Bookcard img='./bookcover/Harry_Potter_6.jpg'
        pdf="./books/6.pdf"/>
        </div>
        <div>
          <Bookcard img='./bookcover/Harry_Potter_7.jpg'
          pdf="./books/7.pdf"/>
        </div>
       
      </Slider>
    </div>
  );
}

export default CenterMode;
