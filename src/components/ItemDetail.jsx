import { useContext } from "react"
import { CartContext } from "./contex/CartContext"
import ItemCount from "./ItemCount"


const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center">
                    <img src={item.imagen} alt={item.nombre} width="35%" />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.nombre}</h1>
                        <h5>{item.powerDisipation} Watts</h5>
                        <p>{item.descripcion}</p>
                        <p><b>u$d {item.precio}</b></p>
                        <ItemCount stock={item.stock} onAdd={onAdd} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail