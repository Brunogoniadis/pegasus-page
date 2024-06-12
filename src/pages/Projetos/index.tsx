
import { useState, useRef, useEffect } from 'react'

import { Container, CustomSlider, ItemSlide } from "./styles";
import { Project } from "../../components/Project";
import { Modal } from '../../components/Modal/Modal';
import Slider from "react-slick";
import barbaraCard from "../../assets/projetos/barbaraCard.png"
import barbaraCardModal from "../../assets/projetos/modalImage/barbaraCardModal.png"

import coinValue from "../../assets/projetos/coinValue.png"


import DigitalClockJS from "../../assets/projetos/DigitalClockJS.png"
import DigitalClockJSModal from "../../assets/projetos/modalImage/DigitalClockJSModal.png"


import saldaoMjv from "../../assets/projetos/saldaoMjv.png"

import weatherAppModal from "../../assets/projetos/modalImage/weatherAppModal.png"


import MjvMarkketModal from "../../assets/projetos/modalImage/MjvMarkketModal.png"
import coinValueModal from "../../assets/projetos/modalImage/coinValueModal.png"
import { UseBodyScrollLock } from '../../hooks/useBodyScrollLocker';


export const Projetos = () => {


    const [open, setOpen] = useState(false);
    const [isLocked, toggle] = UseBodyScrollLock();


    const sliderRef = useRef<Slider>(null);




    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 500,

                settings: {
                    autoplay: true, 
                    autoplaySpeed: 200,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const [descriptions, setDescriptions] = useState({
        title: '',
        description: '',
        image: '',
        type: '',
        lang: '',
        linkOfProject: ''
    });

    const ProjectsObject = {
        WeatherApp: {
            title: "Mar Digital",
            image: weatherAppModal,
        },
        TimeJS: {
            title: "Spaiglass",
            image: DigitalClockJSModal,

        },
        SaldaoMjv: {
            title: "Goniadis Advocacia",
            image: MjvMarkketModal,
        },
        CoinValue: {
            title: "Sanches UX-UI",
            image: coinValueModal,
        },

    };


    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };



    return (

        <Container >

            <div className="title">

                <h2>Projetos</h2>

            </div>



            <div
                className="projectContainer"
            >
                <div className="arrowContainer">

                    <button className='arrow' onClick={prevSlide}>

                        <span className="material-icons">arrow_back</span>

                    </button>
                    <button className='arrow' onClick={nextSlide}>

                        <span className="material-icons">arrow_forward</span>

                    </button>
                </div>

                <CustomSlider ref={sliderRef} {...settings}>


                    {Object.values(ProjectsObject).map((project) => (
                        <ItemSlide key={project.title}>
                            <img src={project.image} alt={project.title} />
                        </ItemSlide>
                    ))}
                </CustomSlider>
            </div>
        </Container>
    )
}