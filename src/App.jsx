import Products from "./components/Products/Products";
import Button from "./components/UI/Button";

function App() {
  return (
    <div className="app">
      <Products />
      <br />
      <Button background={"primary"} size={"sm"} className={"hidden"}>
        <strong>Update</strong>
      </Button>
      <Button background={"danger"} size={"lg"}>
        <strong>Delete</strong>
      </Button>
    </div>
  );
}

export default App;
