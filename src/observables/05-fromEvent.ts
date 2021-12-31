import { fromEvent } from 'rxjs'

// Eventos del DOM
// Evento cargado en el document
const src1$ = fromEvent<MouseEvent>(document, 'click')
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup')

const observer = {
  next: value => console.log('next', value)
}

src1$.subscribe( ({ x, y }) => console.log({ x, y }) )
src2$.subscribe( e => console.log(e.key) )