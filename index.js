  const BMSAPI = 'http://localhost:3000/Books'
  const bookAvailable = document.getElementById('bks_available')
  const bookToOrder = document.getElementById('order')
  const subscribers = document.getElementById('subs')

  fetch(BMSAPI)
  .then((res) => res.json())
  .then (renderData);


  function renderData(data){

    renderBook(data[0].title)
    renderBook(data[1].title)
    renderBook(data[2].title)

    renderSubs(data[3].name)
    renderSubs(data[4].name)

    renderOrders(data[1].title)
    
  } 

function renderBook(title){
  const li = document.createElement('li')
  li.textContent = `${title}`
  bks_available.append(li)
}

function renderSubs(name){
const li = document.createElement('li')
  li.textContent= name
  subs.append(li)
}

//Checking for orders
function renderOrders(data){
  let li = document.createElement('li')
  if (data.Quantity <= 5){
    return data.title
  }
  li.innerText = data
  order.append(li)
}

// DOM manipulation 

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    AddBook(e.target.b_title.value)
    form.reset()

})
//An alert button for Offers
document.querySelector('button').addEventListener('click', function(){
  alert('SORRY! NO OFFERS TILL DECEMBER!')
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
// removing books from library
function DeleteBook(e){
  e.target.parentNode.remove()
}