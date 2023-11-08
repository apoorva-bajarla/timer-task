import React,{useState} from "react";
import "./App.css"
import {Header}from "./Header"
import{Company}from"./Company"
import { CompanyCard } from "./Companycard"


const App= ()=>{
    const [CompanyList,updateCompanyList]=useState([
{companyUrl:"https://tse3.mm.bing.net/th?id=OIP.XWM7kToC-J76ys2lXsALPgHaE7&pid=Api&P=0&h=180",
companyName:"Tata Consultancy",id:"1"},
{companyUrl:"https://tse3.mm.bing.net/th?id=OIP.zj65TQ6bpp-HZml30RWtUAHaE8&pid=Api&P=0&h=180",
companyName:"Infosys",id:"2"},
{companyUrl:"https://tse4.mm.bing.net/th?id=OIP.TF_K3fz6YPpJwyOeGbwHewHaEm&pid=Api&P=0&h=180",
companyName:"HCL Technologie",id:"3"},
{companyUrl:"https://tse1.mm.bing.net/th?id=OIP.1y4Teu95O7aMN9OvOFhp9wHaFj&pid=Api&P=0&h=180",
companyName:"Wipro",id:"4"},
{companyUrl:"https://tse3.mm.bing.net/th?id=OIP.FmvwLVTdkBA7oyNRMYMM1gHaEc&pid=Api&P=0&h=180",
companyName:"Tech Mahindra",id:"5"}
])
return(
    <>
    
    <Header/>
    <Company/>
    {CompanyList.map( (item,i)=>{
        console.log(item)
return<CompanyCard Name={item.companyName}Img={item.companyUrl} Link={item.id} />
    })}
    </>
)
}
export default App;