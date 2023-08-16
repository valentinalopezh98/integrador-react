import { createContext, useState } from "react";


export const Contexto = createContext();

export const ContextoProvider = ({children}) => {

    const [contextState, setContextState] = useState({showMenu: false});

    const toggleMenu = () => {
        setContextState(prevState => ({
            ...prevState,
            showMenu: !prevState.showMenu
        }));
    }

    return (
        <Contexto.Provider value={{contextState, toggleMenu}}>
            {children}
        </Contexto.Provider>
    )
}