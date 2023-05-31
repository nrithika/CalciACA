import React from 'react'
import { NumberContext } from '../context/Context';
import { useContext ,useEffect } from 'react';
import './Calculate.scss'

export default function Calculate() {
  const { num1, setNum1,  num2, setNum2 , operation, setCalculated , result, setResult , setTorch} = useContext(NumberContext);



  function Calculate( ) {
    if ( operation === "Addition" )
    {
      setResult( num1 + num2) ;
    }
    else if ( operation === "Subtraction")
    {
      setResult(num1 - num2)  ;
    }
    else if ( operation === "Multiplication")
    {
      setResult(num1*num2)  ;
    }
    else if ( operation === "Division")
    {
      setResult(num1/num2)  ;
    }
    else if ( operation === "ToThePower")
    {
      setResult(num1 ** num2)  ;
    }
    else if ( operation === "Logarithm")
    {
      setResult(Math.log(num1)/Math.log(num2))  ;
    }
    else if ( operation === "Sine")
    {
      setResult(Math.sin(num1 * (Math.PI/180))) ;
    }
    else if ( operation === "Cosine")
    {
      setResult(Math.cos(num1 * (Math.PI / 180)));
    }
    else if ( operation === "tan")
    {
      setResult(Math.tan(num1 * (Math.PI / 180)));
    }
    
    
    
    setNum1(result);
    setNum2(0);
    setTorch(1);
    setCalculated(true) ;
  }
  useEffect(() => {
    setNum1(result);
  }, [result , setNum1 ]);


  return(
    <div className='Calculate'>
      <button onClick={ () => Calculate()}>=</button> 
    </div>
  );
}
