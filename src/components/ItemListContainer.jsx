import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";



const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams();


    //con esta parte cargo el json en firestore

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");
        
    //     arrayProductos.forEach(item => {
    //         addDoc(itemsCollection, item);
    //     })
    //     console.log("Se agregaron los productos")
    // }, []);

    useEffect(() =>{
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})))
        })
    },[id])

    

  return (
            <div className="container-fluid my-5">
                
                    <ItemList items={items}/>
                
                    
            </div>


    
  )
}

export default ItemListContainer