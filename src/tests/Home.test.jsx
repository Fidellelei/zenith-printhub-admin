import { render, screen } from "@testing-library/react"
import Home from "../pages/Home"

test("renders homepage title", () => {
  render(<Home />)

  expect(
    screen.getByText(/Welcome to PrintHub Studio/i)
  ).toBeInTheDocument()
})