import { createContext, useEffect, useState } from "react";
import {secoes as s} from "../constants/secoesMenu";
import useBoolean from "../hooks/useBoolean";
import useTamenhoJanela from "../hooks/useTamanhoJanela";
import { useRouter } from "next/router";
import { MenuSecao } from "../models/MenuSecao";

const ContextoMenu = createContext({} as any)

export function MenuProvider(props: any) {
    const [mini, toggleMine, miniTrue] = useBoolean(false);
    const [secoes, setSecoes] = useState<any>(s)
    let tamanho = useTamenhoJanela()

    const router = useRouter();
    

    useEffect(()=>{
        if (tamanho === "md" || tamanho === "sm") {
            miniTrue()
        }
    }, [tamanho])

    useEffect(()=>{
        setSecoes(()=>selecionarItem(router.asPath))
    },[router.asPath])

    function alternarSecao(secaoSelecionada: MenuSecao) {
        let novasSecoes = secoes.map((secao: any) => {
            if (secao.titulo === secaoSelecionada.titulo) {
                return {...secao, aberta: !secao.aberta}
            } else {
                return secao
            }
        })
        setSecoes(() => novasSecoes)
    }

    function selecionarItem(url: string) {
        let novasSecoes = secoes.map((secao: any)=>{
            let novosItens = secao.itens.map((item: any)=>{
                return {...item, selecionado: item.url === url}
            })
            return {...secao, itens: novosItens}
        })
        return novasSecoes
    }

    return (<ContextoMenu.Provider value={{secoes, mini, toggleMine, alternarSecao}}>
        {props.children}
    </ContextoMenu.Provider>)
}

export default ContextoMenu