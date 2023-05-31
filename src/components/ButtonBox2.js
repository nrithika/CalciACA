import React, { useContext  } from "react";
import { NumberContext } from "../context/Context";
import "./ButtonBox2.scss";

function ButtonBox2() {
  const {
    num1,
    setNum1,
    num2,
    setNum2,
    setOperation,
    setCalculated,
    setResult ,
    torch ,
    setTorch
  } = useContext(NumberContext);





  // handling numbers 
  const handleNumbers = (value) => {
    setCalculated(false)
    !torch 
    ? setNum1(num1*10 + value)
    : setNum2(num2*10 + value)
  }
  const backspaceNumbers = (value) => {
    setCalculated(false)
    !torch 
    ? setNum1((num1-num1%10)/10)
    : setNum2((num2-num2%10)/10)
  }
  const clearNumbers = () => {
    setNum1(0)
    setNum2(0)
    setOperation(null)
    setCalculated(0)
    setTorch(0)
    setResult(0)

  }

  return (
    <div className="ButtonBox2">
      {/* handling numbers */}

      <div className="row1">
        <div><button className="tomato" onClick={() => clearNumbers()}>AC</button></div>
        <div><button onClick={() => backspaceNumbers()}>DEL</button></div>
        <div>
          <button
            onClick={() => {
              setOperation("Addition");
              setTorch(1);
            }}
          >
            &#43;
          </button>
        </div>
      </div>

      <div className="row">
        <div><button onClick={() => handleNumbers(1)}>1</button></div>
        <div><button onClick={() => handleNumbers(2)}>2</button></div>
        <div><button onClick={() => handleNumbers(3)}>3</button></div>
        <div>
          <button
            onClick={() => {
              setOperation("Subtraction");
              setTorch(1);
            }}
          >
            &#8722;
          </button>
        </div>
      </div>

      <div className="row">
        <div><button onClick={() => handleNumbers(4)}>4</button></div>
        <div><button onClick={() => handleNumbers(5)}>5</button></div>
        <div><button onClick={() => handleNumbers(6)}>6</button></div>
        <div>
          <button
            onClick={() => {
              setOperation("Multiplication");
              setTorch(1);
            }}
          >
            &#215;
          </button>
        </div>
      </div>

      <div className="row">
        <div><button onClick={() => handleNumbers(7)}>7</button></div>
        <div><button onClick={() => handleNumbers(8)}>8</button></div>
        <div><button onClick={() => handleNumbers(9)}>9</button></div>
        <div>
          <button
            onClick={() => {
              setOperation("Division");
              setTorch(1);
            }}
          >
            &#247;
          </button>
        </div>
      </div>

      <div className="row">
        <div><button onClick={() => handleNumbers(0)}>0</button></div>
        <div>
          <button
            onClick={() => {
              setOperation("ToThePower");
              setTorch(1);
            }}
          >
            &#8743;
          </button>
        </div>
      </div>

      <div className="row">
        <div>
          <button
            onClick={() => {
              setTorch(0);
              setOperation("Sine");
            }}
            >
            sin
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTorch(0);
              setOperation("Cosine");
            }}
            >
            cos
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setTorch(0);
              setOperation("tan");
            }}
          >
            tan
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setOperation("Logarithm");
              setTorch(!torch);
            }}
          >
            log
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}

export default ButtonBox2;
