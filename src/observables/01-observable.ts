// Observables y subscriptores
import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: err => console.error('error: ', err),
  complete: () => console.info('completed')
}

// Creamos un observador
const obs$ = new Observable<string>(subs => {

  subs.next('hola')

  // forzar un error
  // const a = undefined
  // a.name = 'Javier'

  subs.complete()

  // Lo que este después del complete ya no se escucha o ve
  subs.next('ya no me viste')
  

})

// Nos suscribimos al stream
// obs$.subscribe(
//   value => console.log('next: ', value),
//   error => console.warn('error: ', error),
//   () => console.info('Completed')
// )
obs$.subscribe( observer )