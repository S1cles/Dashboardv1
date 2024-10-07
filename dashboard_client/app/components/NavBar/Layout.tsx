import React from "react";
import ButtonNav from './ButtonNav/ButtonNav';
import logo from "../../assets/svg/logo.svg";
import "../NavBar/ButtonNav/ButtonNav.scss";
import Image from "next/image";
import {Avatar, Box, Menu, MenuButton, MenuItem, MenuList, Text, useColorModeValue} from "@chakra-ui/react";
import arrow from '../../assets/svg/arrow-up.svg'
import ThemeToggleButton from "@/app/components/ThemeToggleButton";
import './Layout.scss'
// import Link from "next/link";
import {useDispatch} from "react-redux";
import {clearTokens} from "@/app/redux/slice/authSlice";
import {setInfo} from "@/app/redux/slice/infoSlice";
const Layout = () => {
    const bg = useColorModeValue("gray.400", "gray.700");
    const bg2 = useColorModeValue("gray.300", "gray.800");
    const color = useColorModeValue("black", "white");
    const dispatch = useDispatch();
    return (

            // <Box className="main-frame" bg={bg} color={color}>
                <Box className="layout_container" bg={bg} color={color}>
                    <Box className="img__container">
                        <Image src={logo} alt="logo"/> <span>v1</span>
                    </Box>
                    <ButtonNav/>

                    <Menu>
                        <MenuButton className="account_block" bg={bg2} color={color}>

                                <Box className="account_left_side">
                                    <Avatar src='https://bit.ly/dan-abramov' name="avatar"/>
                                </Box>
                                <Box className="account_text">
                                    <Text>Evano</Text>

                                </Box>
                            <Image src={arrow} alt="arrow"/>


                        </MenuButton>
                        <MenuList>
                            <MenuItem>Settings</MenuItem>
                            <a href={'auth'} onClick={() => dispatch(clearTokens())}>
                                <MenuItem>Log out </MenuItem>
                            </a>
                            <Text>DEV MODE KILLAHTEAM V1</Text>
                        </MenuList>
                    </Menu>
                    <ThemeToggleButton/>

                </Box>
            // </Box>


    );
};

export default Layout;