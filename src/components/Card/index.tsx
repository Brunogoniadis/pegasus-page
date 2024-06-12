import { Container } from "./styles";
import react from "../../assets/react.svg"
import { ICardProps } from "./types";

export const Card = ({ img, title, type1, type2 }: ICardProps) => {
    return (
        <Container>
            <div className="cardContainer">
                <div className="logoContainer">
                    <img src={img}></img>
                </div>

                <div className="textContainer">
                    <h2 className="Title">{title}</h2>

                    <div className="typeContainer">

                        <div className="type">
                            <h3>{type1}</h3>
                        </div>

                        <div className="type">
                            <h3>{type2}</h3>
                        </div>

                    </div>

                </div>

            </div>




        </Container>
    )
}