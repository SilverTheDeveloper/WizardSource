import React,{useState} from 'react'

function Characters2({char}) {
    const [isHovered, setIsHovered] = useState(false);
    const [hide, sethide] = useState("f");
    const showDetails = () => {
        setIsHovered(true)
        sethide("blur-md")
    }
    
    const hideDetails = () => {
        setIsHovered(false)
        sethide("")
    }

    return (

        
        <div
            className=' border text-center mt-4 md:m-3 bg-customColor relative   rounded-md overflow-hidden max-w-80'
            onMouseEnter={showDetails}
            onMouseLeave={hideDetails}
            onTouchStart={showDetails}
            onTouchEnd={hideDetails}
        >
            <img
                src={char.image}
                alt=""
                className={`w-full  transition-all duration-300 ${isHovered ? "blur-md" : ""}`}
            />

            {isHovered && (<div className="absolute top-0 left-0 bottom-0 right-0 details flex flex-col p-5 text-center items-center justify-center text-white text-xl bg-black bg-opacity-50">
                <span className='absolute top-9'>
                {char.name} 
                </span>
                <span className='font-light text-xl  '> {char.details}
                </span>
            </div>)}
            
            <div className={`name ${hide} relative bottom-3 text-white font-bold`}  > {char.name} </div>
        </div>
      
    )
}

export default Characters2
