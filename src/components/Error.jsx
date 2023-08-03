import  Gummy  from "../assets/Gummy.png"


const Error = () => {
    return (
        <>
       <div className="main">
            <div className="text-side">
                <h1 className="oops">OOPS!!!</h1>
                <h2 className="error">404 error</h2>
                <p className="para">The page you are looking for can not be found.</p>
                <div className="btn">
                    <button className="button">Back to home</button>
                </div>
           </div>

            <div className="image-side">
                <img src={Gummy} alt="sad face cartoon" className="gummy"/>
            </div>

       </div>
        </>
    )
}


export default Error