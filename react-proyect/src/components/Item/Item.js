import "../Item/Item.css";


const Item = ({id, stock, name,img,price})=>{
    return(
        <div className="Contenedor">
            <div>
                <header>
                    <img src={img} alt={name}/>
                </header>
               <aection>
               <h2>{name}</h2>
               <p>precio:${price}</p>
               <p>Stock disponible:{stock}</p>
               </aection>
               <footer>
                    <link to={`/item/${id}`}>
                        Ver detalle
                    </link>
               </footer>
                

            </div>
        </div>
    )
}
export default Item;