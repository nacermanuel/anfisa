// export const fetchProducts = async (id: number) => {
//   const resp = await fetch(`https://script.google.com/macros/s/AKfycbz3bnkKA_L-dcTfNs28aeiyTHPC9cJo5NEgpG_i-A5hobXe8NAMynqfmWHFgXqo-nfr/exec?id=${id}`)
//   const data = resp.json()
//   return data
// }

//UTILIZANDO BACKEND MONGO ATLAS (CORRER BACKEND PARA PROBAR)

export const fetchProducts = async (id: number) => {
  const resp = await fetch(`http://localhost:9000/api/v1/products/${id}`)
  const data = resp.json()
  return data
}