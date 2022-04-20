import { startWith } from "rxjs"
import { ajax } from "rxjs/ajax"

// Referencias
const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')
loadingDiv.innerText = 'Cargando . . .'

const body = document.querySelector('body')

// Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
  .pipe(
    startWith(true)
  )
  .subscribe(response => {
    if (response === true) body.appendChild(loadingDiv) 
    else loadingDiv.remove()
  })
