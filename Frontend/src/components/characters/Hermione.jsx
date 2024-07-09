import React from 'react'
import { Link } from 'react-router-dom'
function Hermione(props) {
    return (
        <>
            <div className={`space-y-3 max-w-screen-2xl container min-h-screen mx-auto md:px-20 px-4 flex items-center
                 ${props.textc} `}>
                <div className='glass mt-5 md:mt-0 border rounded-3xl overflow-hidden bg-opacity-25 ' >
                <div className='flex flex-col md:flex-row '>
                <div><img className='max-w-96' src="https://i.pinimg.com/564x/0b/2a/10/0b2a10924131c5aca320366d4e7becde.jpg" alt="" /></div>
                
                <div className='text-justify   p-5 '>
                <div className=' text-center text-4xl font-semibold'><h1>Hermione Granger</h1>
                </div>
                <p className='p-4 text-xl'>
                Hermione Jean Granger is known for her exceptional intellect and dedication to her studies. Born to Muggle (non-magical) parents, she quickly becomes one of the brightest students at Hogwarts School of Witchcraft and Wizardry. Hermione's vast knowledge of spells, potions, and magical creatures, combined with her analytical mind and quick thinking, make her an invaluable ally in any situation. She is fiercely loyal to her friends Harry and Ron and is often the one to devise plans and solutions to their problems. Hermione is also a passionate advocate for the rights of magical creatures and is involved in numerous efforts to improve their welfare. 
                    </p>
                   <div className='flex justify-end'>
                    <Link onClick={() => { window.scrollTo(0, 0); }} to='/'><button className='btn text-right glass hover:bg-black hover:bg-opacity-40 '>Back</button>
                    </Link>
                    </div>
                    
                    </div>
                    </div>
                    </div>
            </div>
                    
        </>
    )
} export default Hermione
