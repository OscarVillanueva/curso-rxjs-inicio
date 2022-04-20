import { fromEvent, combineLatest, Observable, map } from 'rxjs';

// Combine latest - combina la última emisión que tengan los observables
// obs1$: a - b ----------- c - d - e |->
// obs2$: - 1 - 2 - 3 - 4 |------------->
//       combineLatest(obs1$, obs2$)
//       a1 - b1 - b2 - b3 - b4 - c4 - d4 - e4

// const keyUp$ = fromEvent( document, 'keyup')
// const click$ = fromEvent( document, 'click')

// combineLatest(
//   keyUp$.pipe( pluck('type') ),
//   click$.pipe( pluck('type') )
// ).subscribe(console.log)

const input1 = document.createElement('input')
const input2 = document.createElement('input')

input1.placeholder = 'email@email.com'
input2.placeholder = '*******'

input2.type = 'password'

document.body.append(input1, input2)

// helper
const getInputStream = (element: HTMLElement) : Observable<string> => {
  return fromEvent<KeyboardEvent>(element, 'keyup')
    .pipe( 
      map<KeyboardEvent, string>(event => {
        const target = event.target as HTMLInputElement
        return target.value
      })
    )
}

combineLatest({
  a: getInputStream(input1),
  b: getInputStream(input2),
}).subscribe( console.log )