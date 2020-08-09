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

function getHomePageProducts() {
  return http.get('/home-page-products')
}

function addToCart(id) {
  return http.get(`/add-to-cart/${id}`)
}

export default {
  getBrands,
  getBrand,
  getCategories,
  getCategory,
  getProduct,
  getHomePageProducts,
  addToCart
}
