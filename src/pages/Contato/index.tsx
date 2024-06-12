import { ButtonSocial } from "../../components/ButtonSocial";
import { PostIt } from "../../components/PostIt";
import { Input } from "../../components/Input";
import { Container } from "./styles";

import {BiSend} from "react-icons/bi"

import { IRegisterData } from "./types";

import { useForm } from "react-hook-form";


export const Contato = () =>{

    
    const { register, handleSubmit, formState} = useForm<IRegisterData>({});

    function registerUser(data: IRegisterData) {
        console.log(data);
    }


    return(
        <Container>
            {/* 
            <h2>Deixe seu recado!</h2>
            <p>Quer deixar um elogio, tem sugestões de melhorias  no portfólio ou já participou de algum projeto comigo? Comenta aqui!</p>
            
            
            <div className="pinContainer">

                <PostIt />

                <PostIt/>

                <PostIt/>

                <PostIt/>

                <PostIt/>

                <PostIt/>

                <PostIt/>

            </div>

            <form className="formContainer" onSubmit={handleSubmit(registerUser)}>


                    <div className="inputUserNameData">
                        <Input id="name" className="inputName" label="Nome completo" type="required" {...register("name",{required:true}) }> </Input>
                        <Input id="office" className="inputCargo" label="Cargo(Opcional)" type="text" {...register('office')}></Input>
                        <Input id= "message" className="inputMensager" label="Sua Mensagem" type="message" {...register('message')}>
                        <button type="submit"><BiSend/></button>

                        </Input>
                        
                    </div>


            </form>
*/}
            <h2>Contato</h2>

            <div className="buttonContainer">
                <ButtonSocial 
                    background="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-2.png"
                    link="https://github.com/Brunogoniadis/"  
                />

                <ButtonSocial
                    background="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    link="https://www.linkedin.com/in/brunogoniadislima/"
                />

                <ButtonSocial
                    background="https://cdn-icons-png.flaticon.com/512/3059/3059474.png"
                    link="mailto:brunogoniadislima.com@gmail.com"
                />
                <ButtonSocial
                    background="https://icons-for-free.com/iconfiles/png/512/share+social+whatsapp+icon-1320193664187333524.png"
                    link="https://api.whatsapp.com/send?phone=5521981475465"
                />


            </div>
        </Container>


    )
}