
let formCiudadano = document.getElementById('formCiudadano')
let inputDNI = document.getElementById('inputDNI')
let inputFecNacimiento = document.getElementById('inputFecNacimiento')
let nextStepbutton = document.getElementById('nextStepbutton')
let firstForm = false
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
      console.log(response)
      console.log('response.status: ', response.status)
      if (response.status === 200) {
        document.getElementById('formExtend').classList.remove('d-none')
        nextStepbutton.classList.add('d-none')
        firstForm = true
      } else {
        firstForm = false
        console.log('Return error')
        document.getElementById('formExtend').classList.add('d-none')
        nextStepbutton.classList.remove('d-none')
      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})

let cursosElegidos = []


function toCursos() {
  location.href = '#cursos';
}




function sumarCurso(curso) {

  cursosElegidos.push(curso)
  
 document.getElementById('elegido1').innerHTML = '1: ' + cursosElegidos[0]
  
  if (cursosElegidos[1] !== undefined) {

    document.getElementById('elegido2').innerHTML = '2: ' + cursosElegidos[1]
  }
  if (cursosElegidos[2] !== undefined) {

    document.getElementById('elegido3').innerHTML = '3: ' + cursosElegidos[2]
  }
  document.getElementById('divVaciarLista').classList.remove('d-none')
  if (cursosElegidos.length > 2 && firstForm) {
    document.getElementById('toStep3Error').classList.add('d-none')
    document.getElementById('toStep3').classList.remove('d-none')
  }
}

function quitarCurso() {
  cursosElegidos = [];
  document.getElementById('elegido1').innerHTML = '';
  document.getElementById('elegido2').innerHTML = '';
  document.getElementById('elegido3').innerHTML = '';
  document.getElementById('divVaciarLista').classList.add('d-none');
}

let preg1rta1 = document.getElementById('preg1rta1')
let preg1rta2 = document.getElementById('preg1rta2')
let preg1rta3 = document.getElementById('preg1rta3')
let preg1rta4 = document.getElementById('preg1rta4')
let preg1rta5 = document.getElementById('preg1rta5')

let preg2rta1 = document.getElementById('preg2rta1')
let preg2rta2 = document.getElementById('preg2rta2')
let preg2rta3 = document.getElementById('preg2rta3')
let preg2rta4 = document.getElementById('preg2rta4')
let preg2rta5 = document.getElementById('preg2rta5')



let pregunta1 = false
let pregunta2 = false

preg1rta1.addEventListener('click', () => {
  pregunta1 = true
  if (pregunta2) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg1rta2.addEventListener('click', () => {
  pregunta1 = true
  if (pregunta2) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg1rta3.addEventListener('click', () => {
  pregunta1 = true
  if (pregunta2) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg1rta4.addEventListener('click', () => {
  pregunta1 = true
  if (pregunta2) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg1rta5.addEventListener('click', () => {
  pregunta1 = true
  if (pregunta2) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})

preg2rta1.addEventListener('click', () => {
  pregunta2 = true
  if (pregunta1) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg2rta2.addEventListener('click', () => {
  pregunta2 = true
  if (pregunta1) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg2rta3.addEventListener('click', () => {
  pregunta2 = true
  if (pregunta1) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg2rta4.addEventListener('click', () => {
  pregunta2 = true
  if (pregunta1) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})
preg2rta5.addEventListener('click', () => {
  pregunta2 = true
  if (pregunta1) {
    document.getElementById('inscribirmeButton').classList.remove('inscribirme-disabled');
  }
})


function inscribirme(){
  if (pregunta1 && pregunta2) {
    document.getElementById('solicitudEnviada').classList.remove('d-none');
  }
}