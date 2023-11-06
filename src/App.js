import React,{useEffect, useState} from "react"
import axios from "axios"
function FetchData() {
  const[data, setData] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])
  return(
    <div>
    {
    data.map((user,index) => {
      return<ol key={index}>
        <li>{user.name}</li>
      </ol>
    }) 
  }
   </div> 
  
  )}
export default FetchData