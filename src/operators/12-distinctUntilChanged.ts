import { distinctUntilChanged, from, of } from "rxjs";

of(1,1,1,3,3,2,2,4,4,5,3,1)
  .pipe(
    distinctUntilChanged()
  )
  .subscribe(console.log)

interface Person {
  name: string
}

const people: Person[] = [
  { name: 'Javier' },
  { name: 'Javier' },
  { name: 'X' },
  { name: 'Roberto' },
  { name: 'Andrea' },
  { name: 'X' },
  { name: 'X' },
  { name: 'Javier' },
  { name: 'Lucía' },
]

from(people)
  .pipe(
    distinctUntilChanged( (prev, current) => prev.name === current.name )
  )
  .subscribe( console.log )