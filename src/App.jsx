import { useState } from "react";

function App() {
  const [name, setName] = useState("Emin Başbayan");

  // let name = "Emin Başbayan";

  function handleNameChange() {
    // name = "Ali";
    setName("Ali");
  }

  return (
    <div className="app">
      <p>{name}</p>
      <button onClick={handleNameChange}>Click!</button>
    </div>
  );
}

export default App;

/* 
1- Ekranda değişikliği göstermek istiyorsak ilgili componentin state'ini değiştirmemiz gerekiyor.
2- Componentin re-render işlemi için state ve props değişmesi lazım.
*/
