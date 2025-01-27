const listParent = document.querySelector('ul')

//se invoca al elemento declarado anteriormente 
listParent.addEventListener('click',(e)=>{
//esta variable "listItem" ayuda a guardar el método closest()  
  const listItem = e.target.closest('li')
//luego validamos si el evento se dispara, entoces que agrege la clase "highlight"
    if (listItem) {
        listItem.classList.toggle('highlight')
    }
})