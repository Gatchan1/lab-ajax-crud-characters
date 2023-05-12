const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then((charactersList) => console.log(charactersList.data))
    .catch((err) => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const ID = document.querySelector("#fetchOneId").value
    // console.log(ID)
    charactersAPI.getOneRegister(ID)
    .then((element) => console.log(element.data)) // diloooooo!!
    .catch((err) => console.log(err))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const ID = document.querySelector("#deleteOneId").value
    charactersAPI.deleteOneRegister(ID)
    .then(()=>{
      console.log("Element succesfully deleted!")
    })
    .catch((err) => console.log(err))
  });

  //Al loro, estos dos siguientes son event listeners de tipo submit, y no de tipo click! Los parámetros se guardan EN LA URL, A NO SER QUE EVITEMOS EL PAGE RELOAD a través del event.preventDefault()
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const id = document.querySelector("#updateId").value
    const name = document.querySelector("#updateName").value
    const occupation = document.querySelector("#updateOccupation").value
    const weapon = document.querySelector("#UpdateWeapon").value
    const cartoon = document.querySelector("#updateCartoon").checked // ojo, que este no es value
    const updatedCharacterInfo = {name, occupation, weapon, cartoon}
    charactersAPI.updateOneRegister(id, updatedCharacterInfo)
    .then(()=>{
      console.log("Element succesfully updated!")
    })
    .catch((err) => console.log(err))

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const name = document.querySelector("#newName").value
    const occupation = document.querySelector("#newOccupation").value
    const weapon = document.querySelector("#newWeapon").value
    const cartoon = document.querySelector("#newCartoon").checked // ojo, que este no es value
    newCharacterInfo = {name, occupation, weapon, cartoon}
    // console.log("Create this character: ", newCharacterInfo)
    charactersAPI.createOneRegister(newCharacterInfo)
    .then(()=>{
      console.log("Element succesfully created!")
    })
    .catch((err) => console.log(err))

  });
});
