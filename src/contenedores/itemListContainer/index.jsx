//Llamada a la api o la promesa
//Manejo de estados
//Traer un item list --> Lo que va a mapear item y devolver una lista

import React, { useEffect, useState } from "react";
import MockItems from "../../mock/mockitems";
import ItemList from "../../componentes/itemList";

const ItemListContainer = () => {

    //Estado para simular que lo traemos desde una api --> Array de Objetos
    //Y se va a poder usar por varios usuarios al mismo tiempo
    const [items, setItems] = useState([]);

    //Promesa
    useEffect(()=> {
        const itemPromesa = new Promise ((res,rej) => {
            setTimeout(function () {
                res(MockItems);
            }, 2000);
            
        });
        itemPromesa.then((res) => setItems(res))
    }, [items])
    //Solo se renderiza si hay cambio en item con [item]

    return (
        <ItemList items={items}/>
    )    
}

export default ItemListContainer;