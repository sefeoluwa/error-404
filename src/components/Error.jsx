import React from "react";
import { Vector, Gummy } from "../assets"


const Error = () => {
    return (
        <>
       <div>
        <h1>OOPS!!!</h1>
        <h2>404 error</h2>
        <p>The page you are looking for can not be found.</p>
        <button>Back to home</button>
       </div>

       <div className="">
        <img src={Gummy} alt="" />
       </div>
        </>
    )
}


export default Error