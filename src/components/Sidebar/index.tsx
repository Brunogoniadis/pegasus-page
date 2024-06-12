import { Container } from "./styled";

import  { useEffect, useState } from 'react';
import {RxHamburgerMenu} from "react-icons/rx";
import {AiFillHome} from "react-icons/ai";
import {GiTechnoHeart} from "react-icons/gi"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"

import { Link } from 'react-scroll'


export const Sidebar = () =>{

    const [statusSidebar, setStatusSidebar] = useState(false);


    return(

    <Container>
        <button className="revealSideButton" onClick={()=>setStatusSidebar(true)}><RxHamburgerMenu/></button>
        
        <div className="sidebarContainer" onClick={()=>{setStatusSidebar(false)}} style={{display: `${statusSidebar ? 'flex' : 'none'}` }}>
            

        
        </div>

        <div className="sidebar" style={{transform: `translateX(${statusSidebar ? '0' : '-100%'})`}}>
                <h2>Portfólio</h2>

                <div className="linkContainer">
                    <Link className="linkScroll" to="home" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>

                        <h3>Home</h3>
                        <AiFillHome style={{ fontSize: '22px' }}/>

                    </Link>

                    <Link className="linkScroll" to="Tecnologias" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>
                        <h3>Tecnologias</h3> <GiTechnoHeart style={{ fontSize: '22px' }}/>
                    </Link>

                    <Link className="linkScroll" to="Projetos" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>
                        <h3>Projetos</h3> <AiOutlineFundProjectionScreen style={{ fontSize: '22px' }}/>
                    </Link>

                    <Link className="linkScroll" to="Contato" spy={true} smooth={true} onClick={()=>{setStatusSidebar(false)}}>
                        <h3>Contato</h3> <AiOutlineMail style={{ fontSize: '22px' }}/>
                    </Link>
                </div>
        </div>
        
    </Container>    


    )

        
    
}