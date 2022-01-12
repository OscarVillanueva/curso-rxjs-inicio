import { interval, reduce, take, tap } from "rxjs";

interval(1000)
  .pipe(
    take(3), // termina el observer después de 3 emisiones
    tap( console.log ),
    reduce( (acc, value) => acc + value, 0  )
  )
  .subscribe({
    next: value => console.log('next', value),
    complete: () => console.log('complete')
  })