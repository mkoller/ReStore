import { useEffect, useState } from "react";
import { Product } from "../models/product";

function App() {
  const [products, setProducts]  = useState<Product []>([]);

  useEffect(()=> { //react hook useEffect that fetches the products
    fetch('http://localhost:5000/api/products') // fetches the API endpoont
      .then(response => response.json())
      .then(data => setProducts(data)) // sets the products from the setState
  }, []) //empty array as dependency to prevent an infinite request, only executes twice for strict mode

  function addProduct() {
    setProducts(prevState => [...prevState, 
      {
      id: prevState.length +101,  
      name: 'product' + (prevState.length +1), 
      price: (prevState.length *100) +100,
      brand: 'some brand',
      description: 'some description',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }

  return ( //returns products in application
    <div>
      <h1> Re-Store</h1>
      <ul>
        {products.map((product) => ( // knows its a products array
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default App;
