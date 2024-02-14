import arr from "./resource/Countrydata.json"
import { useState } from "react";

function App(){
  
  const [result,setresult]=useState([])

  const enterinput=(e)=>{
  const input=e.target.value.toLowerCase()
  const letsfilter=arr.filter(i => i.name.toLowerCase().startsWith(input))
  setresult(letsfilter)
  }

  const findkeys=(e)=>{
if(e.key==="Escape"){setresult([])
console.log("Escape")}

}
return(
  <div>
    <h4>Search</h4>
    <input type="text" onKeyDown={findkeys} onChange={enterinput}/>
    <button>Search</button>
    {result.map((r,i)=>(<div key={i}>{r.name}</div>))}
  </div>
)
}
export default App