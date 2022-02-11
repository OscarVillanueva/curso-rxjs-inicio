import { fromEvent, debounceTime, map, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, mergeAll } from 'rxjs/operators';
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
  map<string, Observable<GithubUsers>>(
    text => ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
  ),
  mergeAll<Observable<GithubUsers>>(),
  map<GithubUsers, GithubUser[]>(({ items }) => items)
).subscribe(showUsers)