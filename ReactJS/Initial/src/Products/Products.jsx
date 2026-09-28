import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { productsData } from "./ProductData";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [carts, setCarts] = useState([]);
  console.log(carts);

  // Remove Product
  const handleRemove = (id) => {
    console.log(id);

    setProducts((prevProduct) => {
      return prevProduct.filter((item) => item.id !== id);
    });
  };

  // Add To Cart
  const handleAddCart = (id) => {
    setProducts((prevProduct) =>
      prevProduct.map((item) =>
        item.id === id && item.stock > 0
          ? { ...item, stock: item.stock - 1 }
          : item,
      ),
    );

    setCarts((prevCart) => {
      const product = products.find((product) => product.id === id);
      return product ? [...prevCart, product] : prevCart;
    });
  };

  // Handle Cart
  const handleCart = (id) => {
    console.log(id);

    setCarts(prevCart => prevCart.filter((cart) => cart.id !== id));

        setProducts((prevProduct) =>
      prevProduct.map((item) =>
        item.id === id && item.stock > 0
          ? { ...item, stock: item.stock + 1 }
          : item,
      ),
    );
  };

  return (
    <div className="app-container">
      {/* LEFT SIDE: PRODUCT SHOWCASE */}
      <main className="product-showcase">
        <h1 className="page-title">Tech Store</h1>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddCart={handleAddCart}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </main>

      {/* RIGHT SIDE: CART ASIDE */}
      <aside className="cart-sidebar">
        <h2>Your Cart</h2>

        {/* You will update these numbers using state */}
        <div className="cart-summary">
          <p>
            <strong>Total Items:</strong> {carts.length}
          </p>
          <p>
            <strong>Total Price:</strong>{" "}
            {carts.reduce((sum, acc) => sum + acc.price, 0)}
          </p>
        </div>

        {/* You will map over your cart state array here */}

        <div className="cart-items-list">
          {carts.length
            ? carts.map((cart) => (
                <div key={cart.id} className="cart-item">
                  <div>
                    <h2 className="cart-item-name">{cart?.name}</h2>
                    <p className="cart-item-price">{cart?.price}</p>
                  </div>
                  <button
                    className="minus"
                    onClick={() => handleCart(cart?.id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            : ""}
        </div>
      </aside>
    </div>
  );
};

export { Products };
