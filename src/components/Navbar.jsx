import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h2>PrintHub Studio</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
      </div>
    </nav>
  )
}

export default Navbar