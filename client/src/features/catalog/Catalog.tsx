import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
    return (
        <>
        <ul>
            {products.map(product  => ( // knows its a products array
                <li key={product.id}>{product.name} - {product.price}</li>
            ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
      </>
    )
}