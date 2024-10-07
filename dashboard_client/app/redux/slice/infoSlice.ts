import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определите интерфейс для состояния пользователя
interface User {
    name: string;
    email: string;
    id: string;
    isActivated: boolean;
}

// Определите интерфейс для состояния аутентификации
interface AuthState {
    user: User | null; // Измените, чтобы хранить весь объект user
}

const initialState: AuthState = {
    user: null, // Измените начальное состояние
};

const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {
        setInfo(state, action: PayloadAction<User>) { // Измените тип на User
            state.user = action.payload; // Записывайте весь объект user
        }
    },
});

// Экспортируйте действия и редюсер
export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;
