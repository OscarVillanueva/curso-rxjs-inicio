import { ajax } from "rxjs/ajax";

// Get
// url, headers

// Post, PUT
// url, body, headers

// DElete
// url, headers

// ajax.post('https://httpbin.org/delay/1', 
//   {
//     id: 1,
//     name: 'Javier'
//   }, {
//     token: '123141'
//   }
// )
// .subscribe( console.log )

ajax({
  url: 'https://httpbin.org/delay/1',
  method: 'POST',
  headers: { 
    token: '1234'
  },
  body: {
    id: 1,
    name: 'Javier'
  }
}).subscribe( console.log )
