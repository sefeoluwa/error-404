import Vector from "../assets/Vector.png"
import big from "../assets/big.png"

const Settings = () => {
  return (
    <>
    <img src={Vector} alt="settings icon" className="first-type"/>
   
   <div className="top-vector">
        <div className="second-container">
         <img src={big} alt="settings icon" className="second-type"/>
        </div>
       <div className="third-container">
         <img src={Vector} alt="settings icon" className="third-type"/>
       </div>
   </div>
    </>
  )
}

export default Settings