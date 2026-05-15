import { useState, useRef, useId } from "react"

function ProductCard({ product, onDelete, onUpdate }) {
  const [newPrice, setNewPrice] = useState(product.price)

  const inputRef = useRef()

  const inputId = useId()

  function handleUpdate() {
    onUpdate(product.id, Number(newPrice))
    inputRef.current.focus()
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>
        <strong>Category:</strong> {product.category}
      </p>

      <p>
        <strong>Price:</strong> ${product.price}
      </p>

      <p>
        <strong>Stock:</strong> {product.stock}
      </p>

      <label htmlFor={inputId}>Update Price</label>

      <input
        id={inputId}
        ref={inputRef}
        type="number"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />

      <button onClick={handleUpdate}>Update Price</button>

      <button className="delete-btn" onClick={() => onDelete(product.id)}>
        Delete
      </button>
    </div>
  )
}

export default ProductCard