import React, { useState } from 'react'
import Navbar from '../src/components/navbar/Navbar.jsx'
import Homepage from '../src/components/homepage/Homepage.jsx'
import Footer from './components/footer/Footer.jsx'
import Books from './components/books/Books.jsx'
import Characterpage from './components/characterspage/Characterpage.jsx'
import About from './components/about/About.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Harry from '../src/components/characters/Harry.jsx'
import Hermione from './components/characters/Hermione.jsx'
import Ron from './components/characters/Ron.jsx'
import Jk from './components/characters/Jk.jsx'
import { ContactMe } from './components/contact/Contactme.jsx'


function App() {




  const [textc, settextc] = useState("text-black");
  const [t, sett] = useState("light");
  const [mode, setmode] = useState(false);
  const [img, setimg] = useState('black');

  const handletheme = () => {

    if (t === "light") {
      console.log(t);

      document.body.style.background = "hsl(240, 13%, 48%)";
      document.body.style.backgroundImage = "url(../background-dark.png)";
      document.body.style.backgroundRepeat = " no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      settextc("text-white")
      sett("dark");
      setmode(true)
      setimg('white')
    } else {
      console.log(t);
      document.body.style.backgroundColor = "hsl(241, 84%, 83%)";
      document.body.style.backgroundImage = "url(../background-light.png)";
      document.body.style.backgroundRepeat = " no-repeat";
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundAttachment = "fixed";
      settextc("text-black")
      setmode(false);
      setimg('black')


      sett("light");

    }

  }



  return (
    <>

      <BrowserRouter>

        <Navbar handletheme={handletheme}  mode={mode} textcolor={textc} img={img} />

        <Routes>
          <Route path='/' element={<Homepage textc={textc} mode={mode} />}/>
          <Route path='/books' element={<Books mode={mode} />} />
          <Route path='/characters' element={<Characterpage />} />
          <Route path='/about' element={< About />} />
          <Route path='/harrypotter' element={< Harry />} />
          <Route path='/hermionegranger' element={< Hermione />} />
          <Route path='/ronweasely' element={< Ron />} />
          <Route path='/jkrowling' element={< Jk />} />
          <Route path='/contactme' element={< ContactMe />} />

        </Routes>
        <br />
        <Footer textc={textc} />
      </BrowserRouter>

    </>
  )
}

export default App
