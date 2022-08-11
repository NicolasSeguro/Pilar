
let formCiudadano = document.getElementById('formCiudadano')
let inputDNI = document.getElementById('inputDNI')
let inputFecNacimiento = document.getElementById('inputFecNacimiento')
let nextStepbutton = document.getElementById('nextStepbutton')

nextStepbutton.addEventListener('click', (event)=>{
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "DNI": inputDNI.value,
    "FechaNacimiento": inputFecNacimiento.value
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.ciudadanos360.com/Educacion/ValidarCiudadano", requestOptions)
    .then(response => {
      console.log('response.status: ', response.status)
      if (response.status === 200) {
        location.href = '#cursos';
      } else {
        console.log('Return error')
      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})


// 

