import { render, screen } from "@testing-library/react"
import AddProduct from "../pages/AddProduct"
import { BrowserRouter } from "react-router-dom"

test("renders add product form", () => {
  render(
    <BrowserRouter>
      <AddProduct />
    </BrowserRouter>
  )

  expect(screen.getByText(/Add Product/i)).toBeInTheDocument()
})