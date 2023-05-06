import { urlRailways } from "@/config"

export const fetchProducts = async (id: number) => {
  const resp = await fetch(`http://${urlRailways}/api/v1/products/${id}`)
  const data = resp.json()
  return data
}