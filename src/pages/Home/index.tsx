import { Container } from "./styles"

import CoverFinal from "../../assets/CoverFinal.jpg"



import { useState } from 'react';


export const Home = () => {


    const [isOpen, setIsOpen] = useState(false);



    return (
        <Container
            style={{
                backgroundImage: `url(${CoverFinal})`
            }}
        >
            <div className="content">

                <div className="textInfo">
                    <h1>Pegasus Sistemas</h1>
                    <h2>Construindo sua ideia com exelencia</h2>

                </div>

                <div className="textInfo">
                    <h3>   </h3>
                    <ul>
                        <li>
                            <h4> Nosso Compromisso</h4>
                            <p>Na Pegasus Sistemas, nosso objetivo é transformar suas ideias em produtos digitais de sucesso.<br />
                                Somos apaixonados pelo o que fazemos,garantimos excelência em cada projeto.
                            </p>
                        </li>

                    </ul>
                </div>



            </div>

        </Container>
    )
}