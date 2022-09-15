  const BMSAPI = 'http://localhost:3000/Books'
  const bookAvailable = document.getElementById('bks_available')
  const bookToOrder = document.getElementById('order')
  const subscribers = document.getElementById('subs')

  fetch(BMSAPI)
  .then((res) => res.json())
  .then (renderGram);

  function renderGram(data){
    console.log(data[2].title)
    console.log(data[2].Description)
    console.log(data[2].Quantity)
  } 
// DOM manipulation 

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e)=> {
    e.preventDefault()
    AddBook(e.target.b_title.value)
    form.reset()
})


})
// Adding books to the library
function AddBook(title){
  let btn = document.createElement('button')
  let l = document.createElement('li')
  btn.addEventListener('click', DeleteBook)
  btn.textContent = 'x'
  l.textContent = title
  l.appendChild(btn)
  document.querySelector('#bks_available').appendChild(l)
}
// rmoving books from library
function DeleteBook(e){
  e.target.parentNode.remove()
}
