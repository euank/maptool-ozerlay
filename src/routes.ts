export type Route = {
  id: number,
  path: string,
  name: string,
}

export const Home: Route = {
  id: 0,
  path: '/',
  name: 'Home',
}

export const Edit: Route = {
  id: 1,
  path: '/edit',
  name: 'Edit',
}
