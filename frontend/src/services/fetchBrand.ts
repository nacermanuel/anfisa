import { urlRailways } from "@/config"

export const fetchBrands = async () => {
  const resp = await fetch(`http://${urlRailways}/api/v1/brands`)
  const data = resp.json()
  return data
}