import { urlRailways } from "@/config"

export const fetchCategories = async () => {
  const resp = await fetch(`http://${urlRailways}/api/v1/categories`)
  const data = resp.json()
  return data
}