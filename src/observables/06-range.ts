import { asyncScheduler, of, range } from 'rxjs'

// const src$ = of(1,2,3,4,5)
// 1 es valor inicial y el 5 es el número de emisiones no del 1 al 5, y va acumulando
// Sync
// const src$ = range(1,5)
// Async
const src$ = range(1,5, asyncScheduler)

console.log('inicio')
src$.subscribe( console.log )
console.log('fin')