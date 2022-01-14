import { of, take, tap } from "rxjs";

const numbers$ = of(1,2,3,4,5)

numbers$
  .pipe(
    tap(console.log),
    take(3)
  )
  .subscribe({
    next: value => console.log('next',value),
    complete: () => console.log('Complete')
  })