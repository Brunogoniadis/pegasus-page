
import { Container, MyAnchor} from "./styles"
import { IButtonSocial } from "./types"


export const ButtonSocial =({background, link}:IButtonSocial) =>{

    return(
        <Container style={{ backgroundImage: `url(${background})`} }>
            <MyAnchor href={link} target="_blank"  rel='noopener noreferrer'> Redirect is Here!</MyAnchor>
        </Container>
    )
}