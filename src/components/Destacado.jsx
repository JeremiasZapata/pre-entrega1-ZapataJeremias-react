import React from 'react'
import destacada from "./images/destacada.png"
import destacada2 from "./images/gamingcentre.png"
import destacada3 from "./images/destacada3.png"
import destacada4 from "./images/destacada4.png"

const Destacado = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col text-center">
                <img src={destacada} alt={"Imagen destacada"} className={"img-fluid"}/>
            </div>
            <div className="col text-center">
                <img src={destacada2} alt={"Imagen destacada2"} className={"img-fluid"}/>
            </div>
        </div>
        <div className="row">
            <div className="col text-center">
                <img src={destacada3} alt={"Imagen destacada"} className={"img-fluid"}/>
            </div>
            <div className="col text-center">
                <img src={destacada4} alt={"Imagen destacada2"} className={"img-fluid"}/>
            </div>
        </div>
    </div>
  )
}

export default Destacado