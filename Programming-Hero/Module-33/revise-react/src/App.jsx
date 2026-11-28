import React from "react";

const App = () => {
  const [cart, setCart] = React.useState([
    {
      id: 1,
      name: "Webflow Template",
      quantity: 1,
    },
    {
      id: 2,
      name: "UI Kit",
      quantity: 2,
    },
  ]);

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity > 0 ? product.quantity - 1 : product.quantity }
          : product,
      ),
    );
  };

  return (
    <>
      {cart.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid red", margin: "10px" }}
        >
          <h2>Name : {product.name}</h2>
          <p>Quantity : {product.quantity}</p>
          <button onClick={() => handleIncrease(product.id)}>
            Increase Quantity
          </button>
          <br />
          <button onClick={() => handleDecrease(product.id)}>
            Decrease Quantity
          </button>
        </div>
      ))}
    </>
  );
};

export default App;
