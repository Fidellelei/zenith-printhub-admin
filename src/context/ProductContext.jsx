import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
      loading
    }}>
      {children}
    </ProductContext.Provider>
  )
}