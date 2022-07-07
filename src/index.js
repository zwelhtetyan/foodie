import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import AppContextProvider from './context/AppCtx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContextProvider>
                <ChakraProvider>
                    <App />
                </ChakraProvider>
            </AppContextProvider>
        </Provider>
    </React.StrictMode>
);
