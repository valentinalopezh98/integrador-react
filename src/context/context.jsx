import { createContext, useState } from "react";


export const Contexto = createContext();

export const ContextoProvider = ({children}) => {

    const INITIAL_STATE = {
        showMenu: false,
        showCart: false
    }
    const [contextState, setContextState] = useState(INITIAL_STATE);

    const toggleMenu = () => {
        setContextState(prevState => ({
            ...prevState,
            showMenu: !prevState.showMenu
        }));
    }

    const toggleCart = () => {
        setContextState(prevState => ({
          ...prevState,
          showCart: !prevState.showCart
        }));
      };

    const toggleOverlay = () => {
        if (contextState.showCart){
            setContextState(prevState => ({
                ...prevState,
                showCart: false
            }))
        }
        if (contextState.showMenu){
            setContextState(prevState => ({
                ...prevState,
                showMenu: false
            }))
        }
    }

    return (
        <Contexto.Provider value={{contextState, toggleMenu, toggleCart, toggleOverlay}}>
            {children}
        </Contexto.Provider>
    )
}