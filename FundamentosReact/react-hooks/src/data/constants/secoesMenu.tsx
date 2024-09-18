import { IconNumbers, IconUsers, IconArrowsLeftRight, IconMathGreater, IconLetterCase, IconRefreshAlert, IconSection, IconAppWindow, IconDimensions, IconLock, IconShoppingCart, IconPin } from "@tabler/icons-react";

export const secoes = [
    {
        titulo: "Essenciais",
        aberta: false,
        itens: [
            {titulo: "Contador", url: "/essenciais/contador", tag: "useState", icone: <IconNumbers/>},
            {titulo: "Votação", url: "/essenciais/votacao", tag: "useState", icone: <IconUsers/>},
            {titulo: "Consulta a API", url: "/essenciais/consultaAPI", tag: "useEffect", icone: <IconArrowsLeftRight/>},
            {titulo: "Maior", url: "/essenciais/maior", tag: "useEffect", icone: <IconMathGreater/>},
            {titulo: "Contagem Caracteres Effect", url: "/essenciais/contagemCaracteresEffect", tag: "useEffect", icone: <IconLetterCase/>},
            {titulo: "State Vas Referência", url: "/essenciais/stateVsRef", tag: "useRef", icone: <IconRefreshAlert/>},
            {titulo: "Referênciando Elemento", url: "/essenciais/refElemento", tag: "useRef", icone: <IconSection/>},
            {titulo: "Contagem Caracteres", url: "/essenciais/contagemCaracteresRef", tag: "useRef", icone: <IconLetterCase/>},
        ],
    },
    {
        titulo:"Personalizados",
        aberta: false,
        itens: [
            {titulo: "Modal", url: "/personalizados/modal", tag: "personalizados", icone: <IconAppWindow/>},
            {titulo: "Tamanho Janela", url: "/personalizados/tamanhoJanela", tag: "personalizados", icone: <IconDimensions/>},
            {titulo: "Validando Senha", url: "/personalizados/senha", tag: "personalizados", icone: <IconLock/>},
        ]
    },
    {
        titulo:"Contexto",
        aberta: false,
        itens: [
            {titulo: "Loja", url: "/contexto/loja", tag: "contexto", icone: <IconShoppingCart/>},
        ]
    },
    {
        titulo:"Outros",
        aberta: true,
        itens: [
            {titulo: "Memorizando elementos", url: "/outros/memorizacao", tag: "useMemo", icone: <IconPin/>},
        ]
    },
];

export default secoes