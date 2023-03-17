import { useContext, useState } from "react";
import { CartContext } from './contex/CartContext';
import trash from "./images/trash3.svg";
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [orderId, setOrderId] = useState("");
    const { cart, clear, removeItem, cartTotal, cartSum } = useContext(CartContext)

    const generateOrder = () => {
        const buyer = { name: name, email: email, phone: Phone };
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = { buyer: buyer, items: cart, date: date, total: cartTotal() }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        })
    }
    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="nombre" onInput={(e) => {
                                    setName(e.target.value);
                                }} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">email</label>
                                <input type="text" className="form-control" id="email" onInput={(e) => {
                                    setEmail(e.target.value);
                                }} />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="Phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="Phone" onInput={(e) => {
                                    setPhone(e.target.value);
                                }} />

                            </div>


                            <button type="button" className="btn btn-primary" onClick={generateOrder} >Generate order</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <div className="alert alert-warning text-center" role="alert">
                            No product on cart
                        </div>
                    </div>
                </div>
            </div>



        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center" >Products</h1>
                    <table className="table">
                        <tr>
                            <td>&nbsp;</td>
                            <td>Product</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>&nbsp;</td>
                            <td><button type="button" className="btn btn-danger bg-danger" onClick={() => { clear() }} >Delete All</button> </td>

                        </tr>
                        {
                            cart.map(item => (
                                <tr key={item.index}>
                                    <td className="text-start"><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                    <td>{item.nombre}</td>
                                    <td>{item.quantity} x u$d{item.precio} </td>
                                    <td>u$d{item.precio * item.quantity}</td>
                                    <td className="text-end"><Link onClick={() => { removeItem(item.index) }} title="Delete"><img src={trash} alt={"Eliminar producto"} width={28} /></Link></td>
                                </tr>

                            ))
                        }
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>Total: <b>u$d {cartSum()}</b></td>

                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {orderId ? <div class="alert alert-primary" role="alert">
                       <h3>Thanks for buying</h3>
                       <p>This is your buy ID: <b>{orderId}</b></p>
                    </div> : ""}

                </div>
            </div>
        </div>
    )
}

export default Cart;