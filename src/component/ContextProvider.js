import { createContext, useContext, useReducer } from "react";

const context = createContext();

function ContextProvider({children,reducer,initialVal}){
    return(
        <context.Provider value={useReducer(reducer,initialVal)}>
            {children}
        </context.Provider>
    )
};

export const useCustomHook = ()=>{
    return useContext(context);
}

export default ContextProvider;