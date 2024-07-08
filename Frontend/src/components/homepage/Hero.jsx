import React from 'react'
function Hero(props) {

    return (

        <>
            <div className=' mt-5 space-y-4 md:grid grid-flow-row grid-cols-2
            md:space-x-4  '>

                <div className=' '>
                    <img className='h-11' src="../../../hero/smallhero.png" alt="" />

                    <img src="../../../hero/hero.png" alt="" />

                </div>

                <div className='text-wrap  font-semibold '>
                    <p className='hidden md:block '>Step into the enchanting world of Harry Potter! Explore the magic behind the movies, dive deep into the characters we love, and uncover the secrets of the books. Here at the Wizard Chamber, we celebrate the wonders of the Harry Potter franchise with detailed insights, fascinating trivia, and a community of fans just like you. Whether you're a longtime fan or new to the wizarding world, there's always something magical to discover.
                    </p>
                    <p className={`block md:hidden p-2 ${props.mode ? 'bg-black bg-opacity-60 ' : 'bg-slate-100 bg-opacity-60'} rounded-lg `}>
                        Explore the magic of Harry Potter with character insights, and book secrets.

                        Join our fan community and discover something enchanting today!

                    </p>
                </div>

            </div>
        </>
    )
}

export default Hero
