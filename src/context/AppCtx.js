import { createContext, useContext, useState } from 'react';

const initialState = {
    showDesktopSearchBar: false,
    setShowDesktopSearchBar: () => {},
    showMobileSearchBar: false,
    setShowMobileSearchBar: () => {},
    showSearchBarHandler: () => {},
};

const AppCtx = createContext(initialState);

const AppContextProvider = ({ children }) => {
    const [showDesktopSearchBar, setShowDesktopSearchBar] = useState(false);
    const [showMobileSearchBar, setShowMobileSearchBar] = useState(false);

    const showSearchBarHandler = () => {
        window.innerWidth > 992
            ? setShowDesktopSearchBar((prev) => !prev)
            : setShowMobileSearchBar((prev) => !prev);
    };

    const context = {
        showDesktopSearchBar,
        setShowDesktopSearchBar,
        showMobileSearchBar,
        setShowMobileSearchBar,
        showSearchBarHandler,
    };

    return <AppCtx.Provider value={context}>{children}</AppCtx.Provider>;
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppCtx);
