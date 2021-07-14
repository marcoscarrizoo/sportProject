export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";

export const ORDER_PRODUCTS = "ORDER_PRODUCTS";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
//import {BASE_URL_API} from '../../';
// const {BASE_URL_API} = process.env;
// const url = BASE_URL_API || "http://localhost:3001";
const BASE_URL_API = require('../../index')

export function getProductDetail(id) {
  return function (dispatch) {
    fetch("http://localhost:3001/product/" + id)
    .then((res) => res.json())
    .then((detail) =>
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: detail,
    })
    );
  };
}

export function getProducts(query) {
  return function (dispatch) {
    fetch("http://localhost:3001/product")
      .then((res) => res.json())
      .then((products) =>
        dispatch({
          type: GET_PRODUCTS,
          payload: products,
        })
      );
  };
}
    
    export const searchProducts = (input) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:3001/product?string=${input}`);
    const resJson = await res.json();
    dispatch({
      type: GET_PRODUCTS,
      payload: resJson,
    });
  };
};

export function getCategories() {
  console.log('BASE_URL_API',BASE_URL_API);
  return function (dispatch) {
    fetch("http://localhost:3001/category")
    .then((res) => res.json())
    .then((categories) =>
        dispatch({
          type: GET_CATEGORIES,
          payload: categories,
        })
        );
      };
    }
    
export function orderProducts(payload) {
  return { type: ORDER_PRODUCTS, payload };
}

export function filterProducts(category) {
  return function(dispatch) {
    fetch('http://localhost:3001/product')
        .then(res => res.json())
        .then(payload => dispatch({
            type: FILTER_PRODUCTS,
            payload,
            category
        }))
    }
}
