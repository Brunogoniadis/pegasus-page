import { Container } from "./styles";

import { Card } from "../../components/Card";
import react from "../../assets/react.svg"
import figma from "../../assets/figma.svg"
import github from "../../assets/github.svg"
import restApi from "../../assets/rest-api-icon.png"
import bootstrap from "../../assets/Bootstrap.svg"
import css from "../../assets/CSS.svg"
import js from "../../assets/JS.svg"
import sharepoint from "../../assets/Sharepoint.svg"
import node from "../../assets/node-js.svg"
import express from "../../assets/express.svg"
import mongoDB from "../../assets/mongoDB.svg"
import scrum from "../../assets/scrum.svg"

export const Tecnologias = () => {

    return (
        <Container>
            <div className="title">
                <h2>Tecnologias</h2>
            </div>

            <div className="grid-card-container">
                <Card
                    img={react}
                    title="ReactJs"
                    type1="Lib"
                    type2="Front-End"
                />


                <Card
                    img={js}
                    title="Java Script"
                    type1="Language"
                    type2="Full-Stack"
                />


                <Card
                    img={bootstrap}
                    title="Bootstrap"
                    type1="Front-End"
                    type2="Design"
                />

                <Card
                    img={css}
                    title="CSS 3"
                    type1="Front-End"
                    type2="Design"
                />
                <Card
                    img={node}
                    title="Node Js"
                    type1="Back-End"
                    type2="Ambient"
                />
                <Card
                    img={express}
                    title="Express"
                    type1="Back-End"
                    type2="Framework"
                />

                <Card
                    img={mongoDB}
                    title="Mongo DB"
                    type1="Database"
                    type2="Data Model"
                />

                <Card
                    img={restApi}
                    title="Rest Api"
                    type1="Tool"
                    type2="Management"
                />

                <Card
                    img={sharepoint}
                    title="Sharepoint spfx"
                    type1="Client Front end"
                    type2="Framework"
                />

                <Card
                    img={figma}
                    title="Figma"
                    type1="Tool"
                    type2="Design"
                />

                <Card
                    img={github}
                    title="Github"
                    type1="Tool"
                    type2="Management"
                />

                <Card
                    img={scrum}
                    title="Process"
                    type1="Process"
                    type2="Agile"
                />

            </div>




        </Container>
    )


}