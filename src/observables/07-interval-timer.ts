import { interval, Observer, timer } from 'rxjs'

const observer: Observer<any> = {
  next: next => console.log(next),
  complete: () => console.log('complete'),
  error: err => console.log(err)
}

const todayInFive = new Date()
todayInFive.setSeconds( todayInFive.getSeconds() + 5 )

// Cada segundo has una emisión
const interval$ = interval(1000)

// Después de 2s has una emisión
// const timer$ = timer(2000)

// Creamos un interval que inicia después de 2s
// const timer$ = timer(2000, 1000)

// Manda la emisión a esta fecha
const timer$ = timer(todayInFive)

console.log('Inicio')
timer$.subscribe(observer)
// interval$.subscribe(observer)
console.log('Fin')