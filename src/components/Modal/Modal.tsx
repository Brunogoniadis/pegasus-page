import { ModalContainer } from "./styles"

import { IModal } from "./types";

import { UseBodyScrollLock } from "../../hooks/useBodyScrollLocker"
import { useEffect } from "react";
import { MyAnchor} from "./styles"

export const Modal =({isOpen , setOpen, title, description,image, type, lang, linkOfProject}:IModal)=>{

    if (!isOpen ) return null;



    useEffect(() => {
        document.body.style.overflowY ='hidden'
    }, [])

    function overflowUnlock(){
        document.body.style.overflowY ='auto'
    }

    return(
  

        <ModalContainer >
            <div className="overlay" onClick={()=>{setOpen(false); overflowUnlock()}} >


            </div>
            <div className="content">
                <h2>{title}</h2>
                <img src={image} alt="" />
                
                <div className="pContainer">
                    <p>• {type}</p>
                    <p>• {lang}</p>
                </div>


                <p>{description}</p>

                <div className="containerLink">
                    <MyAnchor href={linkOfProject} target="_blank"  rel='noopener noreferrer'> <p>Link:  {linkOfProject}</p></MyAnchor>
                </div>
            </div>
        </ModalContainer>
    )

}