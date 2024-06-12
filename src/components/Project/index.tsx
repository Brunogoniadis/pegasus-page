import { ProjectContainer } from "./styles";
import { IProject } from "./types";


export const Project = ({ image, title, type, lang }: IProject) => {



    return (
        <ProjectContainer>

            <div className="imgContainer">
                <img src={image} alt="" />

                <div className="descriptionContainer">

                    <h3 className="title">
                        {title}
                    </h3>

                    <div className="pContainer">
                        <p>
                        • {type}
                        </p>

                        <p>
                        • {lang}
                        </p>
                    </div>



                </div>

            </div>






        </ProjectContainer>
    )
}