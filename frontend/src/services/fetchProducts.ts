import { urlRailways } from "@/config"

export const fetchProducts = async () => {
  const resp = await fetch(`http://${urlRailways}/api/v1/products`)
  const data = resp.json()
  return data
}