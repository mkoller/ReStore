import { useEffect, useState } from "react";

function App() {
  const [products, setProducts]  = useState([
    {name: 'product1', price: 100.00},
    {name: 'product2', price: 200.00},
  ]);

  useEffect(()=> { //react hook
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data)) // sets the state
  }, []) //empty array as dependency to prevent an infinite request, only executes twice for strict mode

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {name: 'product' + (prevState.length +1), price: (prevState.length *100) +100}])
  }

  return (
    <div>
      <h1> Re-Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
