import { delay, forkJoin, interval, of, take } from 'rxjs';

// ForkJoin envía las ultimas emisiones juntas hasta que todos los observables se terminan
// obs1$: a - b ----------- c - d - e |->
// obs2$: - 1 - 2 - 3 - 4 |------------->
// obs2$: ---- x --------- y ----- z -|---->
//       forkJoin(obs1$, obs2$)
//      ------------------------------[e,4,z] |->


const numbers$ = of(1,2,3,4) 
const interval$ = interval(1000).pipe( take(3) )
const letters$ = of('a', 'b', 'c').pipe( delay(3500) )

// Salida como arreglo
// forkJoin(
//   numbers$,
//   interval$,
//   letters$
// ).subscribe( resp => {
//   console.log('números: ', resp[0])
//   console.log('intervalo: ', resp[1])
//   console.log('letras: ', resp[2])
// })

// Salida como objeto
// forkJoin({
//   numbers$,
//   interval$,
//   letters$
// }).subscribe( resp => {
//   console.log(resp)
// })

// Salida como objeto
forkJoin({
  num: numbers$,
  int: interval$,
  let: letters$
}).subscribe( resp => {
  console.log(resp)
})