import { fromEvent, debounceTime, map, Observable, skip } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, switchMap, mergeMap, filter } from 'rxjs/operators';
import { GithubUser, GithubUsers } from '../interfaces/index';

// References
const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

// Helpers
const showUsers = (users: GithubUser[]) : void=> {
  
  orderList.innerHTML = ''

  users.forEach( user => {

    const li = document.createElement('li')
    const img = document.createElement('img')
    const anchor = document.createElement('a')

    img.src = user.avatar_url

    anchor.href = user.html_url
    anchor.text = 'Ver página'
    anchor.target = '_blank'

    li.append(img)
    li.append( user.login + ' ' )
    li.append( anchor )

    orderList.append(li)

  })

}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
  debounceTime(500),
  map<KeyboardEvent, string>(({ target }) => target['value']),
  mergeMap<string, Observable<GithubUsers>>(
    text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  map<GithubUsers, GithubUser[]>(({ items }) => items)
)

const url = 'https://httpbin.org/delay/1?arg=';

// switchMap lo que hace es si hay observables anterior los cancela o solo mantiene
// la ultima subscription
input$.pipe(
  map<KeyboardEvent, string>(({ target }) => target['value']),
  filter(value => value.trim() !== ''),
  switchMap( text => ajax.getJSON(url + text) )
).subscribe( console.log )