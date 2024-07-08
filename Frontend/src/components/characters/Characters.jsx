import React from 'react'
import { Link } from 'react-router-dom';
function Characters({hero}) {


  


    return (
        <>
    
            <div  className="card items-center md:items-start my-4 p-3 cardbox flex flex-col lg:flex-row rounded-md glass ">

                <img className='lg:w-4/12 md:w-full  border-transparent border-solid outline-0 rounded-md'
                    src={hero.image} />

                <div className="card-body lg:w-3/5 md:w-full items-center ">
                    <p className="card-title text-xl
                     md:text-3xl ">{hero.name}</p>
                    <p className=' hidden md:block text-xxl text-justify'>{hero.desc}</p>
                    
                    
                    
                    <div className=" md:hidden card-actions justify-end">
                        <Link onClick={() => { window.scrollTo(0, 0); }} to={hero.link}> <button 
                        className="btn btn-primary">
                            Learn more!</button>
                            </Link>
                    </div>
                    
                </div>
            </div>  
        </>
    );
}

export default Characters

