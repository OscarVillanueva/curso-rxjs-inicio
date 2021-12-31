import { of, from, Observer} from 'rxjs'

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable 
 */
const observer: Observer<any> = {
  next: value => console.log(value),
  error: err => console.log(err),
  complete: () => console.log('Completed')
}

const generator = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// const src$ = from([1,2,3,4,5])
// const src$ = from('Javier')
// const src$ = from( fetch('https://pokeapi.co/api/v2/pokemon/ditto') );

const iterable = generator()
const src$ = from( iterable );
src$.subscribe( observer )

// src$.subscribe( async (resp) => {
  
//   const data = await resp.json()
//   console.log(`data`, data)

// })