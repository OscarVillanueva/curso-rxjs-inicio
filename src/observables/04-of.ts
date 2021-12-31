import { of } from 'rxjs'

// Of emite de manera sincrona los argumentos que se le pasen por parámetro
// const obs$ = of(1,2,3,4,5,6)
const obs$ = of([1,2], {a: 1, b: 2}, () => {}, true, Promise.resolve(true))

console.log(`Inicio del obs`)

obs$.subscribe({ 
  next: next => console.log('next', next),
  error: null,
  complete: () => console.log('Terminamos')
})

console.log(`Fin del obs`)