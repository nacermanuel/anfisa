export const fetchBrands = async () => {
  const resp = await fetch('https://script.google.com/macros/s/AKfycbxsTT6sxO7LSgKFjr5YWU2quIxEK3iBrsrPqKTpMDSC5SuXUbJNJ9-Gm4a0pHCBGlI3/exec')
  const data = resp.json()
  return data
}