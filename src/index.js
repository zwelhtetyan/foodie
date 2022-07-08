import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import AppContextProvider from './context/AppCtx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContextProvider>
                    <ChakraProvider>
                        <App />
                    </ChakraProvider>
                </AppContextProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
