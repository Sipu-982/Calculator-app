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

    const handleSqrt= ()=>{
        try {
            setInput(Math.sqrt(eval(input)).toString())
        } catch (error) {
            console.error(error);
            
        }
    }
    const handleRemove = () => {
  setInput((prev) => prev.slice(0, -1));
};


    const handleReset= ()=>{
        setInput('')
    }
  return (
   <div className='w-full multi-bg min-h-[100vh] flex justify-center items-center'>
     <div className="cal-bg max-w-[600px] p-4 min-h-[250px] rounded shadow-xl">
        <div className="w-full cal-bg border text-indigo-900 font-bold border-gray-500 rounded-[5px] h-15 text-2xl mr-4 mb-4 mt-4 flex justify-end items-center text-right p-4">
            {input || "0"}
        </div>
        <div className="flex gap-7">
        <div className="grid grid-cols-3 gap-8">
                        <button onClick={handleReset} className='w-16 h-16 text-2xl text-white rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer bg-[#fb5b2f]'>AC</button>
            <button onClick={handleRemove} className='w-16 h-16 text-white text-2xl transition-all duration-500 hover:opacity-50 rounded-full shado cursor-pointer bg-[#04022b]'>x</button>
            <button onClick={()=>handleClick("%")} className='w-16 h-16 op-bg font-bold text-white shadow cursor-pointer transition-all duration-500 hover:opacity-50 text-2xl'>%</button>
    
            {["7","8","9","4","5","6","1","2","3"].map((count)=>{
                return(
                <button className='w-16 h-16 rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer font-bold text-2xl text-neutral-900 button-bg' key={count} onClick={()=>handleClick(count)}>
                {count}
                </button>
                );
            })}
                            <button className='w-16 h-16 rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer font-bold text-2xl text-neutral-900 button-bg' onClick={()=>handleClick(".")}>.</button>
                            <button className='w-16 h-16 rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer font-bold text-2xl text-neutral-900 button-bg' onClick={()=>handleClick("0")}>0</button>
                            <button className='w-16 h-16 rounded-full shadow transition-all duration-500 hover:opacity-50 cursor-pointer font-bold text-2xl text-neutral-900 button-bg' onClick={()=>handleSqrt()}>√</button>

                </div>
        <div className="grid  grid-cols-1 gap-5">
            {["+","-","*","/"].map((op)=>{
                return(
                    <button className='w-16 h-16 op-bg text-white shadow cursor-pointer transition-all duration-500 hover:opacity-50 text-2xl' key={op} onClick={()=>handleClick(op)}>{op}</button>
                )
            })}
         <button className='w-16 h-16 op-bg font-bold text-white shadow cursor-pointer transition-all duration-500 hover:opacity-50 text-2xl'  onClick={()=>handleTotal()}>=</button>

        </div>
      </div>
     </div>
    </div>
  )
}

export default Calculator