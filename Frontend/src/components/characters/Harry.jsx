import React from 'react'
import { Link } from 'react-router-dom'
function Harry(props) {
    return (
        <>
            <div className={`space-y-3 max-w-screen-2xl container min-h-screen mx-auto md:px-20 px-4 flex items-center
                 ${props.textc} `}>
                <div className='glass mt-5 md:mt-0 border rounded-3xl overflow-hidden bg-opacity-25 shadow-xl shadow-black ' >
                <div className='flex flex-col md:flex-row '>
                <div><img className='max-w-96' src="https://i.pinimg.com/564x/a8/35/82/a835820e1925a7bafa0f6c87d5d3ec3d.jpg" alt="" /></div>
                
                <div className='text-justify   p-5 '>
                <div className=' text-center text-4xl font-semibold'><h1>Harry Potter</h1>
                </div>
                <p className='p-4 text-xl'>
                Harry James Potter is a significant figure in the wizarding world, famous for surviving a deadly curse from the dark wizard Lord Voldemort as an infant. Raised by his neglectful Aunt Petunia and Uncle Vernon, Harry learns on his eleventh birthday that he is a wizard and enrolls at Hogwarts School of Witchcraft and Wizardry. There, he discovers his parents' magical legacy, forms close friendships with Hermione Granger and Ron Weasley, and realizes his destiny involves confronting and defeating Voldemort. Harry's courage, loyalty, and determination are central to his character, as he navigates the challenges of growing up while battling dark forces.
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
} export default Harry
