import { fromEvent, interval, skip, takeUntil } from "rxjs"

const button = document.createElement('button')
button.innerText = 'Detener timer'

document.querySelector('body').append(button)

const counter$ = interval(1000)
// const clickBtn$ = fromEvent(button, 'click')
const clickBtn$ = fromEvent(button, 'click').pipe( skip(1) )

counter$
  .pipe(
    takeUntil( clickBtn$ )
  )
  .subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
  })