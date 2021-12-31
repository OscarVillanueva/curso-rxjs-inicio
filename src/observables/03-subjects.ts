import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<number> = {
  next: value => console.log('next: ', value),
  error: err => console.warn('error: ', err),
  complete: () => console.info('completed')
}

// Se ejecuta hasta que existe una subscription
const interval$ = new Observable<number>( subs => {

  const id = setInterval(() => {
    
    subs.next( Math.random() )

  }, 1000)
    
  return () => {
    clearInterval(id)
    console.log('intervalo destruido')
  }

})

/**
 * 1.- Casteo múltiple
 * 2.- También es un observer
 * 3.- Maneja igual next, error y complete
 */
const subject$ = new Subject<number>()

// El subject lo suscribimos al interval
const subcription = interval$.subscribe( subject$ )

// const sub = interval$.subscribe( rnd => console.log('subs1', rnd) )
// const sub2 = interval$.subscribe( rnd => console.log('subs2', rnd) )

// Nos subscribimos al subject para obtener los dos el mismo valor
const sub = subject$.subscribe( observer )
const sub2 = subject$.subscribe( observer )

setTimeout(() => {
  
  // Podemos insertar data al observer principal por medio del next
  // Cuando la data es producida por el observable en sí mismo
  // es considerado un 'Cold Observable'. Pero cuando la data es producida FUERA del 
  // observable es llamada 'Hot Observable'
  subject$.next(10)

  // Cuando terminamos el subject solo se destruye el subject y no el observer principal
  subject$.complete()

  subcription.unsubscribe()

}, 3500)
