  const BMSAPI = 'http://localhost:3000/Books'
  const bookAvailable = document.getElementById('bks_available')
  const bookToOrder = document.getElementById('order')
  const subscribers = document.getElementById('subs')

  fetch(BMSAPI)
  .then((res) => res.json())
  .then (renderData);


  function renderData(data){
 //testing in console

    renderBook(data[0].title)
    renderBook(data[1].title)
    renderBook(data[2].title)

    renderSubs(data[3].name)

    renderOrders(data[1].title)
    
  } 

function renderBook(title){
  const li = document.createElement('li')
  li.textContent = `${title}`
  console.log(li) //testing
  bks_available.append(li)
}

function renderSubs(name){
const li = document.createElement('li')
  li.textContent= name
  console.log(li) //Testing in the console
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

  console.log('li')
}

// DOM manipulation 

document.addEventListener('DOMContentLoaded', () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
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

// function handleAddBook(e){
//   e.preventDefault()
//   let bookObj ={
//     title:e.target.b_title.value,
//     Quantity:e.target.b_quantity.value
//   }
//   AddBook(bookObj)
//   adding(bookObj)
// }

// function adding(bookObj){
//   fetch('http://localhost:3000/Books', {
//     method: 'POST',
//     headers: {
//       'contet-Type': 'application/json'
//     },
//     body:JSON.stringify(bookObj)
//   })
//   .then(res => res.json())
//   .then(title => console.log(title))
// }