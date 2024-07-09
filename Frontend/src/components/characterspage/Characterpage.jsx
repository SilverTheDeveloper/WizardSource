
import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import Characters2 from '../characterspage/Characters2.jsx';
function Characterpage() {


const [char, setchar] = useState([]);
useEffect(() => {
    
    const getcharacters= async()=>{
        try {
            const res=await axios.get("https://wizardchamberback-3.onrender.com/characters");
            console.log(res.data);
            setchar(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    getcharacters();

}, []);

    return (

        <div className='space-y-3 lg:space-y-0  flex flex-col justify-center items-center md:flex-row flex-wrap max-w-screen-2xl container min-h-screen mx-auto md:px-20 px-4'>
            
            {char.map((char)=>(
                <Characters2 key={char.id} char={char}/>
            )) }
            {/* <Characters2 name="HARRY POTTER" image="https://i.pinimg.com/564x/a8/35/82/a835820e1925a7bafa0f6c87d5d3ec3d.jpg" details="Harry is an orphan living with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On his eleventh birthday, Harry discovers he is a wizard when Rubeus Hagrid delivers him an acceptance letter to Hogwarts School of Witchcraft and Wizardry." />

            <Characters2 name="HERMIONE GRANGER" image="https://i.pinimg.com/564x/0b/2a/10/0b2a10924131c5aca320366d4e7becde.jpg" details="Hermione's most prominent features include her prodigious intellect and cleverness. She is levelheaded, book-smart, and always very logical. Throughout the series, Hermione uses the skills of a librarian and teacher to gather the information needed to defeat Voldemort, the dark lord " />
          
            <Characters2 name="RON WEASLEY" image="https://i.pinimg.com/564x/bf/8b/d6/bf8bd6619971eba074d0de27d790c565.jpg" details="tall, thin and gangling, with freckles, big hands and feet, and a long nose. Ron has the trademark red hair of the Weasleys and is indeed one of Harry tallest schoolmates, even outgrowing some of his older brothers." />
            <Characters2 name="ALBUS DUMBLEDORE" image="https://i.pinimg.com/564x/a9/6c/b0/a96cb076457f26443bc5189f1086644e.jpg" details="Albus Dumbledore is the wise and powerful headmaster of Hogwarts, guiding Harry Potter with wisdom and courage against dark forces. He's known for his kindness, leadership in the fight against evil, and his profound impact on the wizarding world."/>
            
            <Characters2 name="ALBUS DUMBLEDORE" image="https://i.pinimg.com/564x/a9/6c/b0/a96cb076457f26443bc5189f1086644e.jpg" details="Albus Dumbledore is the wise and powerful headmaster of Hogwarts, guiding Harry Potter with wisdom and courage against dark forces. He's known for his kindness, leadership in the fight against evil, and his profound impact on the wizarding world."/>

            <Characters2 name="GINNY WEASLEY" image="https://i.pinimg.com/564x/fa/02/0f/fa020f46b9ab864eddb309001292da45.jpg" details="Ginny Weasley is a strong and courageous witch, known for her fierce loyalty and determination. As the youngest Weasley, she makes her mark at Hogwarts as a talented Quidditch player and a key member of Dumbledore's Army. Her bravery is evident in her fight against dark forces, and she ultimately becomes Harry Potter's devoted partner, contributing significantly to the wizarding world's triumph over evil."/> */}

        </div>

    );
}

export default Characterpage;
