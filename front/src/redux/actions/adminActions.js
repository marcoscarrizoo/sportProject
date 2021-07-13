import axios from "axios";

export const DELETE_PRODUCT = "DELETE_PRODUCT"



export const postCategory = (form) => async (dispatch) => {
  try {
    const info = await axios.post(
      "http://localhost:3001/category/create",
      form
    );
    console.log(info.data);
  } catch (e) {
    console.log(e);
  }
};

export const postProduct = (form) => async (dispatch) => {
  console.log("Form actions", form);
  try {
    const info = await axios.post(
      "http://localhost:3001/product/addProducts",
      form
    );
    console.log(info.data);
  } catch (e) {
    console.log(e);
  }
};
export const deleteCategory = (name) => async (dispatch) => {
  try {
    const info = await axios.delete(
      "http://localhost:3001/category/delete/" + name
    );
    console.log(info);
  } catch (e) {
    console.log(e);
  }
};


export function deleteProduct(id) {
  return async function(dispatch) {
    try {
      await axios.delete("http://localhost:3001/product/delete/" + id)
      dispatch({ type: DELETE_PRODUCT, payload: id} )
    } catch (error) {
      console.log(error)
    }
  }
}
