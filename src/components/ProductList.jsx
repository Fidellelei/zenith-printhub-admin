import ProductCard from "./ProductCard"

function ProductList({ products, onDelete, onUpdate }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  )
}

export default ProductList