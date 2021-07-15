import axios from "axios";
import { url } from "../../App";

export const DELETE_PRODUCT = "DELETE_PRODUCT"



export const postCategory = (form) => async (dispatch) => {
  try {
    const info = await axios.post(
      url + "/category/create",
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
      url + "/product/addProducts",
      form
    );
    console.log(info.data);
  } catch (e) {
    console.log(e);
  }
};
export const updateCategory = (idCategory, info) => async (dispatch) => {
  try {
    const data = await axios.put(url + '/category/update/' + idCategory, info)
    console.log(data)
  }
  catch (e) {
    console.log(e)
  }
}

export const deleteCategory = (name) => async (dispatch) => {
  try {
    const info = await axios.delete(
      url + "/category/delete/" + name
    );
    console.log(info);
  } catch (e) {
    console.log(e);
  }
};


export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      await axios.delete(url + "/product/delete/" + id)
      dispatch({ type: DELETE_PRODUCT, payload: id })
    } catch (error) {
      console.log(error)
    }
  }
}

export function editProduct(info, id) {
  return async function () {
    try {
      await axios.put(url + "/product/update/" + id, info)
    } catch (error) {
      console.log(error)
    }
  }
}
