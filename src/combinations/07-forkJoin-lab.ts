import { delay, forkJoin, interval, of, take, catchError } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// ForkJoin envía las ultimas emisiones juntas hasta que todos los observables se terminan
// obs1$: a - b ----------- c - d - e |->
// obs2$: - 1 - 2 - 3 - 4 |------------->
// obs2$: ---- x --------- y ----- z -|---->
//       forkJoin(obs1$, obs2$)
//      ------------------------------[e,4,z] |->

const githubAPI = 'https://api.github.com/users'
const githubUser = 'OscarVillanueva'

forkJoin({
  user: ajax.getJSON(`${githubAPI}/${githubUser}`),
  repos: ajax.getJSON(`${githubAPI}/${githubUser}/repos`),
  gists: ajax.getJSON(`${githubAPI}/${githubUser}/gists`),
})
.pipe(
  catchError( err => of(err.message))
)
.subscribe( console.log )