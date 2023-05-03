// export const fetchProducts = async () => {
//   const resp = await fetch('https://script.google.com/macros/s/AKfycbxfk6J37j46KdS11IqEOzZuBsoM2HWrOrT643aQRnh-UYGRMQ1XftJHkb-B1YsT-5vT/exec')
//   const data = resp.json()
//   return data
// }

//UTILIZANDO BACKEND MONGO ATLAS (CORRER BACKEND PARA PROBAR)

export const fetchProducts = async () => {
  const resp = await fetch('http://localhost:9000/api/v1/products')
  const data = resp.json()
  return data
}