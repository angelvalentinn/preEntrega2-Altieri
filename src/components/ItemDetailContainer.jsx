import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const docRef = doc(db,"productos",id)
        pedirItem(docRef)
    }, []);

    const pedirItem = async docRef => {
        let snapshot = await getDoc(docRef);
        setItem({...snapshot.data(), id:snapshot.id})
    }


    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer