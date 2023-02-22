import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import arrayProductos from "./JASON/productos.json"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(arrayProductos.find(prod => prod.index === 6));
            }, 2000);
        });
        promesa.then((respuesta) => {
            setItem(respuesta);
        })
    }, []);

  return (
    <ItemDetail item={item} />
  )
}

export default ItemDetailContainer