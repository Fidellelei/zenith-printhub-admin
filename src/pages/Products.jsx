import { useState } from "react"
import useProducts from "../hooks/useProducts"

function Products() {
  const { products, setProducts, loading } = useProducts()

  const [search, setSearch] = useState("")
  const [editingId, setEditingId] = useState(null)
  const [newPrice, setNewPrice] = useState("")
  const [message, setMessage] = useState("")

  function deleteProduct(id) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE"
    })

    setProducts(products.filter(p => p.id !== id))

    setMessage("Product deleted successfully!")

    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  function savePrice(id) {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: Number(newPrice)
      })
    })

    setProducts(
      products.map(p =>
        p.id === id
          ? { ...p, price: Number(newPrice) }
          : p
      )
    )

    setEditingId(null)

    setMessage("Price updated successfully!")

    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const totalProducts = products.length

  const totalValue = products.reduce(
    (sum, product) => sum + product.price,
    0
  )

  if (loading) {
    return <h2 className="loading">Loading products...</h2>
  }

  return (
    <div className="container">
      <h1 className="title">Products Dashboard</h1>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      <div className="stats">
        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{totalProducts}</p>
        </div>

        <div className="stat-card">
          <h3>Total Inventory Value</h3>
          <p>${totalValue}</p>
        </div>
      </div>

      <input
        className="search"
        placeholder="Search printing products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map(product => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />

            <div className="card-content">
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              {editingId === product.id ? (
                <>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) =>
                      setNewPrice(e.target.value)
                    }
                  />

                  <button
                    onClick={() => savePrice(product.id)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <div className="price">
                    ${product.price}
                  </div>

                  <div className="buttons">
                    <button
                      onClick={() => {
                        setEditingId(product.id)
                        setNewPrice(product.price)
                      }}
                    >
                      Edit
                    </button>

                    <button
                      onClick={() =>
                        deleteProduct(product.id)
                      }
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products