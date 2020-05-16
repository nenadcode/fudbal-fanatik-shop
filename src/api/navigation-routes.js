import { http } from '../services/http'

function getBrands() {
  return http.get('/brands')
}

function getBrand(id) {
  return http.get(`/brands/${id}`)
}

function getCategories() {
  return http.get('/categories')
}

function getCategory(id) {
  return http.get(`/categories/${id}`)
}

function getProduct(id) {
  return http.get(`/product/${id}`)
}

export default {
  getBrands,
  getBrand,
  getCategories,
  getCategory,
  getProduct
}
