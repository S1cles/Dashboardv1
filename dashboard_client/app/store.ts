// store.ts
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './redux/slice/authSlice';
import infoReducer from './redux/slice/infoSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    info: infoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
        // auth: authReducer,info: infoReducer

});


const persistor = persistStore(store);
// const persistConfig = {
//     key: 'root', // ключ для хранилища
//     storage, // используем localStorage
// };
//
// // Объединяем редюсеры
// const rootReducer = combineReducers({
//     auth: authReducer,
//     info: infoReducer,
//     // Добавьте другие редюсеры, если у вас есть
// });
//
// // Создаем сохраненный редюсер
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// const store = configureStore({
//     reducer: persistedReducer,
//     // Вы можете добавить другие настройки, такие как middleware и devTools
// });
//
export { store, persistor };
// export default store;
// const persistor = persistStore(store); // Создаем persistor

// Экспортируем store и persistor
// export { store }; //persistor

// store.ts

// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // Используем localStorage
// import { combineReducers } from 'redux'; // Импортируем combineReducers для объединения редюсеров
//
// // Импортируйте ваши редюсеры
// import authReducer from './redux/slice/authSlice';
// import infoReducer from './redux/slice/infoSlice';
//
// // Конфигурация для Redux Persist
// const persistConfig = {
//     key: 'root', // ключ для хранилища
//     storage, // используем localStorage
// };
//
// // Объединяем редюсеры
// const rootReducer = combineReducers({
//     auth: authReducer,
//     info: infoReducer,
//     // Добавьте другие редюсеры, если у вас есть
// });
//
// // Создаем сохраненный редюсер
// const persistedReducer = persistReducer(persistConfig, rootReducer);
//
// // Создаем Redux store
// const store = configureStore({
//     reducer: persistedReducer,
//     // Вы можете добавить другие настройки, такие как middleware и devTools
// });
//
// // Создаем persistor
// const persistor = persistStore(store); // Создаем persistor
//
// // Экспортируем store и persistor
// export { store, persistor };
