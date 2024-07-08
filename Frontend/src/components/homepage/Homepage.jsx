import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

import SimpleSlider from '../homepage/Slider.jsx'
import Characters from '../characters/Characters.jsx';
import Hero from '../homepage/Hero.jsx'
import Travelanimation from '../animation/Travelanimation.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Jk from '../characters/Jk.jsx';
import Travelanimation2 from '../animation/Travelanimation2.jsx';

import '../animation/Travelanimation.css'

function Homepage(props) {

  const [character, setcharacter] = useState([]);
  useEffect(() => {
    const getmaincharacter = async () => {
      try {
        const res = await axios.get('http://localhost:4001/maincharacter');
        console.log(res.data);
        setcharacter(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getmaincharacter();
  }, []);


  return (
    <>
      <div id='Homepage' className={` space-y-5 max-w-screen-2xl container min-h-screen mx-auto md:px-20 px-4 ${props.textc}`}>

        <div className='hero'>
          <Hero mode={props.mode} />
        </div>
        <div className=''>
          <Travelanimation />
        </div>
        <div>
          <Jk />
        </div>
        <div >
          <div className=' p-2 rounded-md shadow-2xl mb-7 shadow-black text-center'  >
            <p className='text-l md:text-3xl glass rounded-md font-extrabold'>MAIN CHARACTERS OF HARRY POTTER </p>
            <div className='cardbox '>
            </div>
            <div className='absolute '>
              <Travelanimation2 />
            </div>

            {character.map((hero) => (
              <Characters hero={hero} key={hero} />
            ))}

           
          

          </div>
        </div >


        <SimpleSlider />


      </div>

    </>
  )
}

export default Homepage
