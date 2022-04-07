import { fromEvent, Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from "rxjs/ajax";
import { tap, map, mergeMap, catchError } from 'rxjs/operators';

type Token = {
  token: string
}

// Helper
const handleLogin = (userPass): Observable<string> => 
  ajax.post<Token>('https://reqres.in/api/login?delay1', userPass)
    .pipe( 
      map<AjaxResponse<Token>, string>( ({response}) => response.token),
      catchError((err) => of('error'))
    )

// Creamos el html
const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPassword = document.createElement('input') 
const bntSubmit = document.createElement('button')

// Configuramos el html
inputEmail.type = 'email'
inputEmail.placeholder = 'email'
inputEmail.value = 'eve.holt@reqres.in'

inputPassword.type = 'password'
inputPassword.placeholder = 'password'
inputPassword.value = 'cityslicka'

bntSubmit.textContent = 'Ingresar'
bntSubmit.type = 'submit'

form.append( inputEmail, inputPassword, bntSubmit )
document.querySelector('body').appendChild(form)

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe( 
    tap( e => e.preventDefault() ),
    map( e => ({
      email: e.target[0].value,
      password: e.target[1].value
    })),
    mergeMap( handleLogin )
  )
submitForm$.subscribe( console.log )