import { distinctUntilKeyChanged, from } from "rxjs";

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
    distinctUntilKeyChanged('name')
  )
  .subscribe( console.log )