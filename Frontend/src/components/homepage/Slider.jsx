import React from "react";
import Slider from "react-slick";


export default function SimpleSlider() {
  var settings = {
    dots: true,   
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,




    
  };



  return (

    <Slider  {...settings}>
  

     
      <div >
        <img className="rounded-t-md"  src="./corsoal pics/1.jpg" alt="" />
        <div className="glass rounded-b-md text-center  font-bold">
        Hogwarts Icon: Enchanted Letter Brings Wizarding World to Life 
        </div>
      </div>
      <div>
        
      <img className="rounded-t-md"  src="./corsoal pics/2.jpg" alt="" />
      <div className="glass rounded-b-md text-center  font-bold">
      Platform 9 3/4: Gateway to Hogwarts Adventure Awaits
      </div>
      </div>
      <div>
      <img className="rounded-t-md"  src="./corsoal pics/3.jpg" alt="" />
      <div className="glass rounded-b-md text-center  font-bold">      Hogwarts Express: Journeying Witches and Wizards to Magical Destiny
      </div>

      </div>
      <div>
       
      <img className="rounded-t-md"  src="./corsoal pics/4.jpg" alt="" />
      <div className="glass rounded-b-md text-center  font-bold">
      Racing Broom Shop: Where Harry's Nimbus 2000 Dreams Took Flight  
      </div>
      </div>
      <div>
        
      <img className="rounded-t-md"   src="./corsoal pics/5.jpg" alt="" />
      <div className="glass rounded-b-md text-center  font-bold">
      Potions Class: From Horace Slughorn to Severus Snape's Mastery  
      </div>
      </div>
      <div>
        
      <img className="rounded-t-md"  src="./corsoal pics/6.jpg" alt="" />
      <div className="glass rounded-b-md text-center  font-bold">
      Mandrake: Baby Tree Holds Cure and Caution in Wizard Medicine
      </div>
      </div>
      
    </Slider>
 
  );
}