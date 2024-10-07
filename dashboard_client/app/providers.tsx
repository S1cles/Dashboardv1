// app/providers.tsx
'use client'

import {Center, ChakraProvider, CircularProgress} from '@chakra-ui/react'
import  {store,persistor} from './store'
import { Provider } from 'react-redux'
import {PersistGate} from "redux-persist/integration/react";
import LoadingPage from "@/app/components/Loading/LoadingPage";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ChakraProvider>
        <Provider store={store}>
            <PersistGate loading={<LoadingPage />} persistor={persistor}>
            {children}
            </PersistGate>
         </Provider>
        </ChakraProvider>
    )

}