import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Business Cards",
      description: "Premium matte cards",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07"
    },
    {
      id: 2,
      name: "Flyers",
      description: "Marketing flyers",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa"
    },
    {
      id: 3,
      name: "Vinyl Banner",
      description: "Outdoor advertising banner",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    }
  ])

  const [loading, setLoading] = useState(false)

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        loading
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}