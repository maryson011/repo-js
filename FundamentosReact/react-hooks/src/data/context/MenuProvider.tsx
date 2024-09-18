import { createContext } from "react";
import secoes from "../constants/secoesMenu";

const ContextoMenu = createContext({} as any)

export function MenuProvider(props: any) {
    return (<ContextoMenu.Provider value={{secoes}}>
        {props.children}
    </ContextoMenu.Provider>)
}

export default ContextoMenu