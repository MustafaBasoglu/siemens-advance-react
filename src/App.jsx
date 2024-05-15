import Products from "./components/Products/Products";

function App() {
  function handleClick(name) {
    console.log(name);
  }

  return (
    <div className="app">
      <Products />
      <button onClick={() => handleClick("Emin Başbayan")}>Click!</button>
    </div>
  );
}

export default App;
