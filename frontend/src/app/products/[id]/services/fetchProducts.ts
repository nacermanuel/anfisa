export const fetchProducts = async (id: number) => {
  const resp = await fetch(`https://script.google.com/macros/s/AKfycbz3bnkKA_L-dcTfNs28aeiyTHPC9cJo5NEgpG_i-A5hobXe8NAMynqfmWHFgXqo-nfr/exec?id=${id}`)
  const data = resp.json()
  return data
}