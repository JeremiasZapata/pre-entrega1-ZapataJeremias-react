import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementarStock = () => {
        if (items < itemStock){
            setItems(items + 1);
        }
    }
    const decrementarStock = () => {
        if (items > 1){
            setItems(items - 1);
        }
    }
    const addToCart = () => {
        if (itemStock >= items){
            setItemStock(itemStock - items)
            setItems(1)
            console.log("Added: " + items + " products to chart");
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);

    }, [stock])



    return (
        <div className="container">
            <div className="row my-1">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-primary" >{items}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to={"/cart"}className="btn btn-primary">End buy</Link> : 
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={addToCart}>Add to chart</button>
                    </div>}
                    
                </div>
            </div>
        </div>
    )
}

export default ItemCount