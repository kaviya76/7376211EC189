const ProductCard = (props) => {

    return (
        <>
        <div className="product-card">
            <div className="product-img">{props.img}</div>
            <div className="product-title">{props.name}</div>
            <div className="product-price">{props.price}</div>
            <div className="product-price">{props.rating}</div>
            <div className="product-price">{props.discount}</div>
            <div className="product-price">{props.availability}</div>

        </div>
        </>
    )
}
export default ProductCard

