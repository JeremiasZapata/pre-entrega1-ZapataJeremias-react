import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ThankYou = () => {
    const {id} = useParams();
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <div class="alert alert-secondary" role="alert">
                        <h1>Thans for buying</h1>
                        <h3>Your order ID is: <b>{id}</b> </h3>
                    </div>
                    <Link to={"/"} className="btn btn-dark" >Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou