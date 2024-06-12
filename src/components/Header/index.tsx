import { Container } from "./styles";
import { Link } from 'react-scroll'



export const Header = () =>{


    return(
        <Container>
            
            <h3>Pegasus</h3>
            <ol className="descriptionPages">
                <Link className="linkScroll" to="home" spy={true} smooth={true}><p>Home</p></Link>
                <p>•</p>
                <Link className="linkScroll" to="Tecnologias" spy={true} smooth={true}><p>Tecnologias</p></Link>
                <p>•</p>
                <Link className="linkScroll" to="Projetos" spy={true} smooth={true}><p>Projetos</p></Link>
                <p>•</p>
                <Link className="linkScroll" to="Contato" spy={true} smooth={true}><p>Contato</p></Link>
            </ol>

        
        </Container>
    )
}