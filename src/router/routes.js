// We are also using Webpack code splitting here so that each route's associated
// component code is loaded on-demand only when the route is visited.
// When do you use on-demand load? When the view is not one of the important one. When a route is important? You decide
import Home from 'views/Home' // include in the main bundle
import Private from 'views/Private' // include in the main bundle

export default [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: () => System.import('views/Login') },
  { path: '/private', component: Private, meta: { auth: true } }
]
