import React , { useContext  } from 'react'
import { NumberContext } from '../context/Context';
import './Screen.scss' ;

export default function Screen() {
  const { 
    num1 ,
    num2, 
    calculated,
    torch, 
    result ,
    content , 
    setContent
  } = useContext(NumberContext);


  if( !calculated )
  {
    if(!torch )
    {
      setContent(num1);
    }
    else if (torch)
    {
      setContent(num2);
    }
  }
  else if ( calculated )
  {
    setContent(result) ;
  }
  


  // what to display
 

  return (
    <div className='Screen'>
      {content}

    </div>
  );
}
