import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
function Footer(props) {
    return (

        <>

            <footer className={` glass w-screen text-neutral-content p-5 ${props.textc}`  }>
                <div className='flex justify-around'>
                    <div className=' flex items-center flex-col lg:flex-row'>
                        <img  className='w-48 ' src="./footericon.png" alt="" />
                        <div className='text-lg  w-3/5'>&copy; 2024 Wizard Chamber. All rights reserved.</div>
                    </div>
                  
                    <div className=' lg:w-8/12  flex justify-end items-center'>
                    <Link to='/contactme'> <img   src="./contactme.png" alt="" />
                    </Link>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
