import React from 'react';
import {createContext , useState } from 'react'


const NumberContext = createContext() ;

const NumberProvider = ({children}) => {

  const [ num1 , setNum1] = useState(0) ;
  const [ num2 , setNum2 ] = useState(0) ;
  const [ operation , setOperation ] = useState("") ;
  const [ calculated , setCalculated ] = useState(false) ;
  const [ torch , setTorch ] = useState(0) ;
  const [ result, setResult ] = useState(0) ;
  const [ content , setContent] = useState("") ;

  return (
    <NumberContext.Provider value={{
      num1 , 
      setNum1 , 
      num2 ,
      setNum2 , 
      operation ,
      setOperation ,
      calculated ,
      setCalculated ,
      torch , 
      setTorch ,
      result ,
      setResult , 
      content ,
      setContent 
    }}>
      {children}
    </NumberContext.Provider>
  )
}

export { NumberContext , NumberProvider } ;
export default NumberProvider ;