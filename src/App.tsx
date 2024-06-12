
import { Main } from './styles/Main'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Tecnologias } from './pages/Tecnologias'
import { Projetos } from './pages/Projetos'
import { Contato } from './pages/Contato'
import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'


import GlobalStyle from './styles/GlobalStyle'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function App() {
  
  



  return (
    <div className="App">
      
      <GlobalStyle/>
        <Main style={{ overflowY:"hidden"}}>
            <Header/>

            <Sidebar/>
            
            <Element name="home" >
              <Home />
            </Element>

            <Element name="Tecnologias">
              <Tecnologias/>
            </Element>

            <Element name="Projetos">
              <Projetos/>  
            </Element>

            <Element name="Contato">
              <Contato/>
            </Element>

            <Footer/>
        </Main>
    </div>
  )
  Events.scrollEvent.register('begin', function () {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function () {
    console.log("end", arguments);
  });
}

export default App
