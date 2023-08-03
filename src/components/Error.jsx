import { Gummy } from "../assets"


const Error = () => {
    return (
        <>
       <div className="main">
        <h1 className="oops">OOPS!!!</h1>
        <h2 className="error">404 error</h2>
        <p className="para">The page you are looking for can not be found.</p>
        <button className="button">Back to home</button>
       </div>

       <div className="">
        <img src={Gummy} alt="" />
       </div>
        </>
    )
}


export default Error