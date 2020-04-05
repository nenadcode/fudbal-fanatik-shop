import { http } from '../services/http'

function getClubsRoutes() {
  return http.get('/clubs-routes')
}

function getProductsRoutes() {
  return http.get('/products-routes')
}

export default {
  getClubsRoutes,
  getProductsRoutes
}