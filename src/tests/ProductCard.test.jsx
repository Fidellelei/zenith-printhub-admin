import { render, screen } from "@testing-library/react"
import ProductCard from "../components/ProductCard"

const mockProduct = {
  id: 1,
  name: "Business Cards",
  description: "Premium cards",
  category: "Cards",
  price: 15,
  stock: 20,
  image: "https://example.com/image.jpg"
}

test("renders product card", () => {
  render(
    <ProductCard
      product={mockProduct}
      onDelete={() => {}}
      onUpdate={() => {}}
    />
  )

  expect(screen.getByText(/Business Cards/i)).toBeInTheDocument()
})