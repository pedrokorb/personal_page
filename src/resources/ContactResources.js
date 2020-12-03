export async function getNameFromStorage() {
  if(await sessionStorage.hasOwnProperty('@name')){
    return (await sessionStorage.getItem('@name'))
  }
  return false
}

export async function setNameInStorage(name) {
  sessionStorage.setItem('@name', name)
}