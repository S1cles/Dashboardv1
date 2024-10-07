"use client"; // Указывает, что этот компонент является клиентским

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setTokens } from '../../redux/slice/authSlice'; // Импортируйте действие для установки токенов
import {
    Box,
    Button,
    Flex,
    Input,
    InputGroup,
    InputRightAddon,
    Stack,
    Switch,
    Text
} from "@chakra-ui/react";
import axios from "axios";
import {setInfo} from "@/app/redux/slice/infoSlice";

const AuthPage = () => {
    // Состояния для управления формой
    const [newUser, setNewUser] = useState(true);
    const [msg, setMsg] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const creator = "http://localhost:5000/api/registration";
    const loginator = "http://localhost:5000/api/login";
    const router = useRouter(); // Инициализируйте useRouter
    const dispatch = useDispatch(); // Переместил dispatch в верхнюю часть компонента

    // Обработчик переключения между регистрацией и входом
    const newUserHandler = () => setNewUser(!newUser);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const url = newUser ? creator : loginator;
            const formData = { name, email, password };

            // Проверка на совпадение паролей
            if (newUser && password !== confirmPassword) {
                setMsg("Passwords do not match");
                return;
            }

            // Отправка данных на сервер
            const response = await axios.post(url, newUser ? formData : { email, password });

            if (response.status === 200) {
                const { accessToken, refreshToken, user } = response.data;

                dispatch(setTokens({ accessToken, refreshToken }));
                dispatch(setInfo(user));
                setMsg(newUser ? "Account created successfully" : "Login successful");
                router.push('/pages/dashboard'); // Перенаправление на дашборд
            } else {
                console.error('Ошибка на сервере:', response);
                setMsg(response.data.msg || "Произошла ошибка при авторизации."); // Ответ с сервера при ошибке
            }
        } catch (error: any) {
            console.error('Error: ', error);
            if (error.response) {
                console.log('Error response: ', error.response);
                setMsg(error.response.data.msg || `Server responded with status: ${error.response.status}`);
            } else if (error.request) {
                console.log('Error request: ', error.request);
                setMsg("No response from server. Please check the network.");
            } else {
                console.log('Error message: ', error.message);
                setMsg("An error occurred. Please try again.");
            }
        }
    };

    return (
        <Box width={'100vw'} mt={'10vh'}>
            <Flex justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} m={10}>
                    <Text fontSize='2xl'>{"Registration"}</Text>
                    <Switch onChange={newUserHandler} size='md' />
                    <Text fontSize='2xl'>{ "Login" }</Text>
                </Stack>

                <form onSubmit={onSubmit}>
                    <Stack spacing={4}>
                        {newUser && (
                            <InputGroup>
                                <Input
                                    type='text'
                                    placeholder='Enter nickname'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <InputRightAddon>Name</InputRightAddon>
                            </InputGroup>
                        )}

                        <InputGroup>
                            <Input
                                type='email'
                                placeholder='Enter e-mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputRightAddon>Email</InputRightAddon>
                        </InputGroup>

                        <InputGroup>
                            <Input
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightAddon>Password</InputRightAddon>
                        </InputGroup>

                        {newUser && (
                            <InputGroup>
                                <Input
                                    type='password'
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <InputRightAddon>Confirm Password</InputRightAddon>
                            </InputGroup>
                        )}

                        <Button m={5} type="submit">
                            {newUser ? 'Create account' : 'Sign in'}
                        </Button>

                        {msg && <Text color="red.500">{msg}</Text>}
                    </Stack>
                </form>
            </Flex>
        </Box>
    );
};

export default AuthPage;
