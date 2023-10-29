import React, { useReducer } from 'react'
import ThemeContext from './ContextApi'

const initialState = { darkMode: false };

const ReducerFunction = (state, action) => {
    switch (action.type) {
        case "toggle" :
            return { darkMode : !state.darkMode }

        default : {
            return state;
        }
    }
}

const ContextState = (props) => {
    const [state, dispatch] = useReducer(ReducerFunction, initialState);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ContextState