  const BMSAPI = 'http://localhost:3000/Books'

  fetch(BMSAPI)
  .then((res) => res.json())
  .then (renderGram);

  function renderGram(data){
    console.log(data);
  }