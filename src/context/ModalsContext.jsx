import { useState, createContext } from "react";

export const modalsContext = createContext()
const { Provider } = modalsContext

export const ModalsContext =({children}) => {

    const [openC, setopenC] = useState(false)
    const [openF, setopenF] = useState(false)

    const openCart = () => {
        setopenC(!openC)
    }

    const openFilter = () => {
        setopenF(!openF)
    }

    const modalS = {
        openC,
        openCart,
        openF,
        openFilter
    }



    return <Provider value={modalS}>{children}</Provider>
}

export default ModalsContext