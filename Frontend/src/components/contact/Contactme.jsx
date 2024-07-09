import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Travelanimation2 from '../animation/Travelanimation2';
export const ContactMe = () => {

  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sp3thkh', 'template_qceb8d1', form.current, {
        publicKey: 'lbnW3wgKS69o6RFc3',
      })
      .then(
        (value) => { 
          console.log('SUCCESS!');
          form.current.reset();
          alert('message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='absolute mt-14'>
    <Travelanimation2 />
    </div>
    <div className='flex  h-[90vh]  rounded  items-center justify-center w-[100vw]   justify-items-center '>
    <form className='flex space-y-5 flex-col rounded-xl justify-center items-center  glass bg-opacity-60 md:w-2/3 p-5' ref={form} onSubmit={sendEmail}>
      <label className=' lg:text-5xl' >Name</label>
      <input className='w-10/12 rounded-md border border-black px-4' type="text" name="user_name" />
      <label className=' lg:text-5xl' >Email</label>
      <input className='w-10/12 rounded-md border border-black px-4'  type="email" name="user_email" />
      <label className=' lg:text-5xl'>Message</label>
      <input className='w-10/12 h-[20vh] rounded-md border border-black px-4'  name="message" />
      <input type="submit" value="S E N D" className='btn lg:text-5xl border-white border-1 hover:bg-white hover:bg-opacity-35 md:w-10/12  ' />
    </form>
    </div>
   
  
    </>
  );
};