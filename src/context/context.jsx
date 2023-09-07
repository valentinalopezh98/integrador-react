import { createContext, useState } from "react";


export const Contexto = createContext();

export const ContextoProvider = ({children}) => {

    const INITIAL_STATE = {
        showmenu: false,
        showcart: false
    }
    const [contextState, setContextState] = useState(INITIAL_STATE);

    const toggleMenu = () => {
        setContextState(prevState => ({
            ...prevState,
            showmenu: !prevState.showmenu,
            showcart: false
        }));
    }

    const toggleCart = () => {
        setContextState(prevState => ({
          ...prevState,
          showcart: !prevState.showcart,
          showmenu: false
        }));
      };

    const toggleOverlay = () => {
        if (contextState.showcart){
            setContextState(prevState => ({
                ...prevState,
                showcart: false
            }))
        }
        if (contextState.showmenu){
            setContextState(prevState => ({
                ...prevState,
                showmenu: false
            }))
        }
    }

    return (
        <Contexto.Provider value={{contextState, toggleMenu, toggleCart, toggleOverlay}}>
            {children}
        </Contexto.Provider>
    )
}