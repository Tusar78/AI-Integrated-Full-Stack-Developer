import { Suspense } from "react";
import "./App.css";
import Countries from "./Countries/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all"
).then((response) => {
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
})


function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
