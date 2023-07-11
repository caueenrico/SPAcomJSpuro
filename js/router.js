export class Router {
  routes = {}

  add(routeName, page){
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    //aqui estou empurrando para la para url
    window.history.pushState({}, "", event.target.href) //target é o alvo, no caso quem disparou o evento, e nesse caso eu estou aproveitando o href
  
    this.handle()
  }

  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    console.log('antes do fetch')
  
    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#app').innerHTML = html)
  
    console.log(`pathname: ${pathname}`)
  }

  
}