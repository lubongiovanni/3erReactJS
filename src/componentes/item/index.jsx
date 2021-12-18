//Acá va la card

const Item = ({item}) => {
    return (
        <div>
            <h3>{item.titulo}</h3>
            <p>{item.stock}</p>
        </div>
    )

}

export default Item;