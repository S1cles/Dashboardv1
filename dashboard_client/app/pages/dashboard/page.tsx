'use client'

import React from 'react';
import { useSelector } from 'react-redux';
import {
    Box,
    Button, CircularProgress,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import './dashboard.scss'
import alert from '../../assets/png/Vector.png'
import mtask from '../../assets/png/Group 48.png'
import Image from "next/image";
import {useDisclosure} from "@chakra-ui/react-use-disclosure";

const Page = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    // @ts-ignore
    const { accessToken, refreshToken } = useSelector(state => state.auth);
    // @ts-ignore
    const user = useSelector((state => state.info.user));
    return (

            <Box className={'dashboard_page'}>
                <Box className={'layo'}>
                    <Text fontSize='3xl'> Hello {user.name || 'null'} 👋🏼</Text>
                    <Box className={'alert_block'}>
                        <Text>Alerts</Text>
                        <Image src={alert} alt="$"/>
                    </Box>
                </Box>
                <Box p={4}>
                    <CircularProgress isIndeterminate color='green.300' />
                    <Text fontSize='xl'>Name Token: {user.name}</Text>
                    <Text fontSize='xl'>Access Token: {accessToken}</Text>
                    <Text fontSize='xl'>Refresh Token: {refreshToken}</Text>
                </Box>
                <Box className={'control'}>
                    <Box className={'filter_block'}>
                        filter
                    </Box>
                    <Box className={'spec_block'}>
                        spec_block
                    </Box>

                    <Box className={'weather_block'}>Weather</Box>
                </Box>
                <Box className={'dashboard_block'}>
                    <Text fontSize='3xl'>Dashboard</Text>
                    <Box className={'dash_out'}>
                        <Button className={'create_task_btn'} colorScheme={'blue'}> Create task</Button>
                        <Box className={'titles_block'}>
                        <Text>Title</Text>
                        <Text>Project</Text>
                        <Text>Executor</Text>
                        <Text>Date</Text>
                        <Text>Priority</Text>
                        </Box>
                        <Box className={"tasks_block"}>

                                <Button onClick={onOpen} colorScheme={'purple'}>
                                    {/*<IoMdCheckboxOutline/>*/}
                                    <Text>Title</Text>
                                    <Text>Project</Text>
                                    <Text>Executor</Text>
                                    <Text>Date</Text>
                                    <Text>Priority</Text>
                                </Button>
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalHeader>Modal Title</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        123123213
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                                            Close
                                        </Button>
                                        <Button variant='ghost'>Secondary Action</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>



                        </Box>

                    <Box className={'dashboard_control_block'}>
                        <Box width={'150px'}></Box>
                        <Button className={'more_tasks'}>
                            <Image src={mtask} alt="$"/>
                        </Button>
                        <Button className={'completed_tasks'} colorScheme={'blue'}>Completed tasks</Button>
                    </Box>
                    </Box>
                </Box>
                <Button className={'member_list'}>Member list</Button>
            </Box>



    );
};

export default Page;