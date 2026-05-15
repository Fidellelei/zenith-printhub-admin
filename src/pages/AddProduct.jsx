import { useState } from "react"
import useProducts from "../hooks/useProducts"

function AddProduct() {
  const { products, setProducts } = useProducts()

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  })

  const [message, setMessage] = useState("")

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        price: Number(form.price)
      })
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts([...products, newProduct])

        setMessage("Product added successfully!")

        setTimeout(() => {
          setMessage("")
        }, 3000)

        setForm({
          name: "",
          description: "",
          price: "",
          image: ""
        })
      })
  }

  return (
    <div className="container">
      <h1 className="title">Add New Product</h1>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct