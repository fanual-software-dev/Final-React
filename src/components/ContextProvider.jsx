import React, { createContext, useReducer } from 'react'

export const Context = createContext()

const reducerFunc = (state,action)=>{

    switch(action.type){

        case 'GET_MOVIES':
            return {movies: action.payload}
        
        default:
            return {state}
    }
}

const ContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducerFunc,{
        movies:null
    })
    
  return (
    <Context.Provider value={{...state,dispatch}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
