import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import arrayProductos from "./JASON/productos.json";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItems(respuesta);
        });

    }, [id]);

  return (
            <div className="container-fluid my-5">
                
                    <ItemList items={items}/>
                
                    <ItemCount stock={10}/>
            </div>


    
  )
}

export default ItemListContainer