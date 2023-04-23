export const fetchProducts = async () => {
  const resp = await fetch('https://script.google.com/macros/s/AKfycbxfk6J37j46KdS11IqEOzZuBsoM2HWrOrT643aQRnh-UYGRMQ1XftJHkb-B1YsT-5vT/exec')
  const data = resp.json()
  return data
}