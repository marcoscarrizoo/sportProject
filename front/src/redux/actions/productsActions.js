export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const ORDER_PRODUCTS = 'ORDER_PRODUCTS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';


//marcos
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
export function getProducts() {
    return function(dispatch) {
        fetch('http://localhost:3001/product')
        .then(res => res.json())
        .then(products => dispatch({
            type: GET_PRODUCTS,
            payload : products 
        }))
    }
}


export function getCategories() {
    return function(dispatch) {
        fetch('http://localhost:3001/category')
        .then(res => res.json())
        .then(categories => dispatch({
            type: GET_CATEGORIES,
            payload : categories 
        }))
    }
}


export function orderProducts(payload) {
    return { type: ORDER_PRODUCTS, payload}
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
