class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.charactersURL = baseUrl + "/characters"
  }

  getFullList () {    
    return axios.get(this.charactersURL)
  }

  getOneRegister (id) {
    return axios.get(this.charactersURL + "/" + id)
  }

  createOneRegister (newCharacterData) {
    return axios.post(this.charactersURL, newCharacterData)
  }

  updateOneRegister (id, updatedCharacterData) { 
    return axios.put(this.charactersURL + "/" + id, updatedCharacterData) // puuuut!!
  }

  deleteOneRegister (id) { 
    return axios.delete(this.charactersURL + "/" + id) // deleteeee!!
  }
}
