
const ProductCard = ({product, handleRemove, handleAddCart}) => {
  
    
    const {image, name, price, stock, id} = product;
    return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <p className="product-stock">In Stock: {stock}</p>
        
        <div className="button-group">
          {/* You will add your onClick handlers to these buttons */}
          <button className="btn add-btn" onClick={() => handleAddCart(id)}>Add to Cart</button>
          <button className="btn remove-btn" onClick={() => handleRemove(id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

export {ProductCard}