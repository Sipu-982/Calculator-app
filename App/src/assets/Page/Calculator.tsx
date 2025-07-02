import  { useState } from 'react'
import './Cal.css'

const Calculator = () => {

    const [input,setInput]= useState<string|''>('')

    const handleClick = (value:string)=>{
      setInput(input+value)
    }

    const handleTotal = ()=>{
        try {
           const countTotal = eval(input) 
           setInput(countTotal.toString())
        } catch (error) {
            console.error(error);
        }
    }

    const handleReset= ()=>{
        setInput('')
    }
  return (
   <div className='w-full multi-bg min-h-[100vh] flex justify-center items-center'>
     <div className="cal-bg max-[500px] p-4 min-h-[250px] rounded shadow-xl">
        <div className="w-full cal-bg border text-gray-200 border-gray-500 rounded-[5px] h-15 text-2xl mr-4 mb-4 mt-4 flex justify-end items-center text-right p-4">
            {input || "0"}
        </div>
        <div className="flex gap-7">
        <div className="grid grid-cols-3 gap-5">
            {["1","2","3","4","5","6","7","8","9"].map((count)=>{
                return(
                <button className='w-16 h-16 rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer text-2xl text-white button-bg' key={count} onClick={()=>handleClick(count)}>
                {count}
                </button>
                );
            })}
            <button onClick={handleTotal} className='w-16 h-16 text-white text-2xl transition-all duration-500 hover:opacity-50 rounded-full shado cursor-pointer bg-[#04022b]'>=</button>
            <button onClick={()=>handleClick("0")} className='w-16 text-white text-2xl rounded-full transition-all duration-500 hover:opacity-50 cursor-pointer shadow h-16 button-bg'>0</button>
            <button onClick={handleReset} className='w-16 h-16 text-2xl text-white rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer bg-[rgb(20,1,41,0.9)]'>C</button>
        </div>
        <div className="grid  grid-cols-1 gap-5">
            {["+","-","*","/"].map((op)=>{
                return(
                    <button className='w-16 h-16 op-bg text-white shadow cursor-pointer transition-all duration-500 hover:opacity-50 text-2xl' key={op} onClick={()=>handleClick(op)}>{op}</button>
                )
            })}
        </div>
      </div>
     </div>
    </div>
  )
}

export default Calculator