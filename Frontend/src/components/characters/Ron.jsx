import React from 'react'
import { Link } from 'react-router-dom'
function Ron(props) {
    return (
        <>
            <div className={`space-y-3 max-w-screen-2xl container min-h-screen mx-auto md:px-20 px-4 flex items-center
                 ${props.textc} `}>
                <div className='glass mt-5 md:mt-0 border rounded-3xl overflow-hidden bg-opacity-25 ' >
                    <div className='flex flex-col md:flex-row '>
                        <div><img className='max-w-96' src="https://i.pinimg.com/564x/bf/8b/d6/bf8bd6619971eba074d0de27d790c565.jpg" alt="" /></div>

                        <div className='text-justify   p-5 '>
                            <div className=' text-center text-4xl font-semibold'><h1>Ron Weasley</h1>
                            </div>
                            <p className='p-4 text-xl'>
                                Ronald Bilius Weasley, commonly known as Ron, comes from a large, loving wizarding family that often struggles financially. He is known for his loyalty, bravery, and sense of humor, which provide much-needed support and comic relief to his friends Harry and Hermione. Despite feeling overshadowed by his accomplished siblings and friends, Ron's courage and strategic thinking are crucial in their battles against dark forces. His deep loyalty to Harry and Hermione is evident in their numerous adventures, where he often plays a key role in their success. Ron's resourcefulness and bravery frequently come to the fore in critical moments, proving his worth as a true friend and ally.
                            </p>
                            <div className='flex justify-end'>
                                <Link onClick={() => { window.scrollTo(0, 0); }}
                                    to='/'><button className='btn text-right glass hover:bg-black hover:bg-opacity-40 '>Back</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
} export default Ron
