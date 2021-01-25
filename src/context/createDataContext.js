import React, { useReducer } from "react"

export default (reducer, actions, initalState) => {
    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initalState)

        return <Context.Provider value={{ state }}>
            {children}
        </Context.Provider>
    }

    return { Context, Provider }
}