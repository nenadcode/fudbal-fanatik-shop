import { http } from '../services/http'

function getBrands() {
  return http.get('/brands')
}

function getBrand(id) {
  return http.get(`/brands/${id}`)
}

function getProductsRoutes() {
  return http.get('/products-routes')
}

export default {
  getBrands,
  getBrand,
  getProductsRoutes
}