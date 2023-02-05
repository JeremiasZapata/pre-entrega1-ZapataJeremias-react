import React from 'react'
import logoPromo from "./images/asusPromo.png"

const PromoAsus = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="row">
                    <div className="col-md-3">
                    <img src={logoPromo} alt="Logo promocion" width={120} />
                    </div>
                    <div className="col-md-6">
                        <h2>ROG Promo</h2>
                        <p>
                            Download our App for latest news!
                        </p>
                    </div>
                </div>

            </div>
            <div className="col d-flex align-items-center justify-content-end">
                <button className="btn btn-outline-dark"> Download Now</button>
            </div>
        </div>
    </div>
  )
}

export default PromoAsus;