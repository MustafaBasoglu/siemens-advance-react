import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <Products />
      <br />
      <Button addClass={"btn-primary"}>
        <strong>Update</strong>
      </Button>
      <br />
      <br />
      <Button addClass={"btn-danger"}>Delete</Button>
    </div>
  );
}

export default App;
