import Products from "./components/Products/Products";

function App() {
  return (
    <div className="app">
      <Products />
    </div>
  );
}

export default App;

/* 
1- Ekranda değişikliği göstermek istiyorsak ilgili componentin state'ini değiştirmemiz gerekiyor.
2- Componentin re-render işlemi için state ve props değişmesi lazım.
*/
