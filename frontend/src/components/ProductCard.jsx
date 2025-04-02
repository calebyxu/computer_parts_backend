import graphCard from '/img/6600-xt.avif'

function ProductCard({id, name, price, image, openModel}) {
    return (
        <div class="item" id={id} onClick={openModel}>
            <h3>{name}</h3>
            <img src={image} alt="image"/>
        </div>
    )
}

export default ProductCard