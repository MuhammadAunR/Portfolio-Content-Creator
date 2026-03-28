import { createContext, useState } from "react"

export const ContextProvider = createContext()

const ContextWrapper = ({ children }) => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <>
            <ContextProvider.Provider value={{ toggleDrawer, openDrawer }}>
                {children}
            </ContextProvider.Provider>
        </>
    )
}

export default ContextWrapper
