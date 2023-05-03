// export const fetchCategories = async () => {
//   const resp = await fetch('https://script.google.com/macros/s/AKfycbyhCcIAqDJQZUU2OVYB2cO75un3pJ9LKevREOmOAM97LhTUb1tIsd_fgA4HuWev1Tp1/exec')
//   const data = resp.json()
//   return data
// }

//UTILIZANDO BACKEND MONGO ATLAS (CORRER BACKEND PARA PROBAR)

export const fetchCategories = async () => {
  const resp = await fetch('http://localhost:9000/api/v1/categories')
  const data = resp.json()
  return data
}