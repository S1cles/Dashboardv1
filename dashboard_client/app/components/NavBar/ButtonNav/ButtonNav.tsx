import { useState } from "react";
import "./ButtonNav.scss";
import dashboard_local from "../../../locals/eng/dashboard";
import  Link  from "next/link";
import Image from "next/image";
import {Box, Text, useColorModeValue} from "@chakra-ui/react";
import arrowR from '../../../assets/svg/right-arrow.svg'

const ButtonNav = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const svg = dashboard_local.svg ? dashboard_local.svg.map((unit) => unit) : [];
    const to = dashboard_local.to ? dashboard_local.to.map((unit) => unit) : [];
    const bg = useColorModeValue("white", "gray.700");
    const color = useColorModeValue("gray.800", "white");

    return (
        <div className="container">
            {dashboard_local.buttons && dashboard_local.buttons.map((name, index) => {
                const isActive = activeIndex === index;
                const toggleClassCheck = isActive ? "active" : "common";
                const toggleFillCheck = isActive ? 'white' : 'black';



                return(
                <Link   onClick={() => setActiveIndex(index)}
                        className={`btn ${toggleClassCheck}`}
                        href={to[index]}
                        key={index}>

                    <Box  className={'btn_content' } color={color} >
                        <Image src={svg[index]} className="img__big margin" alt="SVG"   style={{ fill: toggleFillCheck, stroke: toggleFillCheck }}  />
                        <Text>{name}</Text>
                    </Box>
                    <Image src ={arrowR} alt={'arrow'} width={15}/>
                </Link>
            )})}
        </div>
    );
};

export default ButtonNav;
