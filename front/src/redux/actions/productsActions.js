export const GET_PRODUCT_DETAIL = "GET_PRODUCT_DETAIL";

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
