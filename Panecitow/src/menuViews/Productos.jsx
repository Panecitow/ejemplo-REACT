const productsList = [
    {
        id: 1,
        name: "Hatsune Miku V4X",
        image: "https://cdn.cdnstep.com/VE4swbItGebm039P87aO/4-1.png",
        description: "Software de síntesis de voz profesional.",
        price: "$180.00",
        tag: "Nuevo"
    },
    {
        id: 2,
        name: "Kasane Teto SV2",
        image: "https://i.pinimg.com/736x/a7/0a/73/a70a7370f41ce7de2be1d70f0a69c5e3.jpg",
        description: "Software de síntesis de voz profesional.",
        price: "$180.00",
        tag: "Nuevo"
    },
    {
        id: 3,
        name: "Akita Neru UTAU V1",
        image: "https://i.pinimg.com/736x/b4/12/43/b412430230733a29ed0a8a20f348d786.jpg",
        description: "Software hecho por fans para fans.",
        price: "GRATIS!!",
        tag: "NUEVO"
    }
];

function Productos() {
    return (
        <div className="products-container">
            
            {productsList.map((product) => (
                <article className="product-card" key={product.id}>
                    <div className="product-image">
                        <img src={product.image} alt={product.name} />
                        {product.tag && <span className="tag">{product.tag}</span>}
                    </div>
                    
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p className="description">{product.description}</p>
                        
                        <div className="price-row">
                            <span className="price">{product.price}</span>

                            <button 
                                className="add-btn" 
                                onClick={() => alert(`Agregaste a ${product.name} al carrito`)}
                            >

                                +
                            </button>
                        </div>

                    </div>

                </article>
            ))}
        </div>
    );
}

export default Productos;