import React from "react";
import ButtonNav from './ButtonNav/ButtonNav';
import logo from "../../assets/png/Group 49.png";
import "../NavBar/ButtonNav/ButtonNav.scss";
import Image from "next/image";
import {Avatar, Box, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue} from "@chakra-ui/react";
import arrow from '../../assets/svg/arrow-up.svg'
import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import './Layout.scss'
import MiniButtonNav from "@/app/components/NavBar/ButtonNav/MiniButtonNav";
import arrowR from "@/app/assets/svg/right-arrow.svg";

const MiniLayout = () => {
    const bg = useColorModeValue("gray.400", "gray.700");
    const bg2 = useColorModeValue("gray.300", "gray.800");
    const color = useColorModeValue("black", "white");

    return (

            <Box className="main-frame" bg={bg} color={color}>
                <Box className="layout_container" bg={bg} color={color}>
                    <Box className="img__container">
                        <Image src={logo} alt="logo"/>
                    </Box>
                    <MiniButtonNav/>

                    <Menu>
                        <MenuButton p={5}>
                            <Box >
                                <Avatar src='https://bit.ly/dan-abramov' name="avatar"/>
                            </Box>

                        </MenuButton>
                        <MenuList>
                            <MenuItem>Settings</MenuItem>
                            <a href={'auth'}>
                                <MenuItem>Log out </MenuItem>
                            </a>
                            <Text>DEV MODE KILLAHTEAM V1</Text>
                        </MenuList>
                    </Menu>
                    <ThemeToggleButton/>

                </Box>
            </Box>


    );
};

export default MiniLayout;