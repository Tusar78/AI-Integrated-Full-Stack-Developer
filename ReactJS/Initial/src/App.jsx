import { use, useState } from "react";
import "./App.css";

function Counter() {
  let [count, setCount] = useState(0);
  // console.log(count);

  const handleCounter = (option) => {
    if (option === "increase") {
      setCount((count) => count + 1);
      setCount((count) => count + 1);
      setCount((count) => count + 1);
      console.log(count);
    } else if (option === "decrease") {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <h2>{count}</h2>

      <div className="btn-list">
        <button className="btn" onClick={() => handleCounter("increase")}>
          Increase
        </button>
        <button
          className="btn"
          disabled={count < 1}
          onClick={() => handleCounter("decrease")}
        >
          Decrease
        </button>
        <button className="btn" onClick={() => handleCounter("reset")}>
          Reset
        </button>
      </div>
    </>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    console.log("Before:", counter);

    setCounter((prevCounter) => prevCounter + 3);

    console.log("After:", counter);
  };

  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleClick}>Increase</button>
    </>
  );
};

export default App;
