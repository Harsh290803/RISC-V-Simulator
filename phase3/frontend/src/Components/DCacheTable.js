import { useEffect, useState } from "react";
import MemoryData from "./dataCache.json";

function DCacheTable(){
  const [next, setNext] = useState(0)
  const [hoverdIndex, setHoverdIndex] = useState(null)
const [value1, setValue1] = useState(null)
const [value2, setValue2] = useState(null)
const [value3, setValue3] = useState(null)
const [value4, setValue4] = useState(null)

const handleNext = () => {
  setNext(next+1)
}

const handlePrev = () => {
  if (next >= 1) {
    setNext(next-1)
  }
}

const handleMouseEnter = (index, value) => {
  setHoverdIndex(index);
  if(value == 1){
    setValue1(true)
    setValue2(false)
    setValue3(false)
    setValue4(false)
  }
  else if(value == 2){
    setValue1(false)
    setValue2(true)
    setValue3(false)
    setValue4(false)
  }
  else if(value == 3){
    setValue1(false)
    setValue2(false)
    setValue3(true)
    setValue4(false)
  }
  else {
    setValue1(false)
    setValue2(false)
    setValue3(false)
    setValue4(true)
  }
};

const handleMouseLeave = (value) => {
  setHoverdIndex(null);
  setValue1(false)
  setValue2(false)
  setValue3(false)
  setValue4(false)
};

// get table column
 const column = Object.keys(MemoryData[0]);
 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th key={data} style={{width:'20%', textAlign:'center', backgroundColor:'white'}}>{data}</th>
     })
 }
// get table row data
const tdData =() =>{
   
     return MemoryData.map((data, index)=>{
      if(index < 300*next) return
      if(index > 300*(next+1)) return
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td className={data[v]==""?"":"bg-white"} style={{width:'20%', textAlign:'center'}}>{data[v]}</td>
                   })
                }
                {/* <td onMouseEnter={() => handleMouseEnter(index,1)} onMouseLeave={() => handleMouseLeave(1)} style={{width:'20%', textAlign:'center', backgroundColor : hoverdIndex == index && value1 ? "#DCCAE9" : "white" }}>{data['memory']}</td> */}
                {/* <td onMouseEnter={() => handleMouseEnter(index,2)} onMouseLeave={() => handleMouseLeave(2)} style={{width:'20%', textAlign:'center', backgroundColor : hoverdIndex == index && value2 ? "#DCCAE9" : "white"}}>{data['hex']}</td> */}
                {/* <td onMouseEnter={() => handleMouseEnter(index,3)} onMouseLeave={() => handleMouseLeave(3)} style={{width:'20%', textAlign:'center', backgroundColor : hoverdIndex == index && value3 ? "#DCCAE9" : "white"}}>{data['binary']}</td> */}
                {/* <td onMouseEnter={() => handleMouseEnter(index,4)} onMouseLeave={() => handleMouseLeave(4)} style={{width:'20%', textAlign:'center', backgroundColor : hoverdIndex == index && value4 ? "#DCCAE9" : "white  "}}>{data['decimal']}</td> */}
           </tr>

       )
     })
}
  return (
    <>
      <table className="table">
        <thead>
         <tr>{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </table>
       <center>
       <button onClick={handlePrev} className="w-24 mx-2 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-purple-900">Prev</button>
       <button onClick={handleNext} className="w-24 mx-2 mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded bg-purple-900">Next</button>
      </center>
      </>
  )
}
export default DCacheTable;