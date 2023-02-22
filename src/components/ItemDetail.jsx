const ItemDetail = ({ item }) => {
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
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ItemDetail