import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();
        const document = doc(db, "items", id);
        getDoc(document, id).then(element => {
            setItem({id:element.id, ...element.data()});
        })
        setLoading(false);
    },[id]);

  return (
    <div className="container">
        {loading ? <Loading/> : <ItemDetail item={item} />}
    </div>
    
  )
}

export default ItemDetailContainer