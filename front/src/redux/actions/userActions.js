import axios from "axios";
import { url } from "../../App";
import { auth, loginWithGoogle } from "../../firebase";
import { FUSION_CART } from "./cartActions";

export const LOGIN = "LOGIN";
export const LOGIN_WITH_USER = "LOGIN_WiTH_USER";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_SUCESS_GOOGLE = "LOGIN_SUCESS_GOOGLE";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const USER_LOG_OUT = "USER_LOG_OUT";

//crea nuevo usuario en la base de datos con id, mail, nombre, apellido
export let newUser = (form) => async (dispatch) => {
  try {
    const data = await axios.post(url + "/user/create", form);
    // console.log("dataaaa", data);
  } catch (e) {
    // console.log(e);
  }
};

//hace el login con mail, contra, y deja guardado en el localstorage la sesion
export let doUserLogin = (user) => async (dispatch, getState) => {

  dispatch({
    type: LOGIN_SUCESS
  })
  // saveStorage(getState())

};


//cierra sesion y limpia el storage
export let doLogOut = () => (dispatch) => {
  auth.signOut();
  // console.log(auth.signOut());
  dispatch({
    type: USER_LOG_OUT,
  });

  localStorage.clear()
};


// action para recuperar la sesion iniciada
/* export let restoreSessionAction = () => (dispatch) => {
  let storage = localStorage.getItem("storage");
  storage = JSON.parse(storage);
  if (storage && storage.loggedIn === true) {
    dispatch({
      type: LOGIN_SUCESS,
      payload: storage,
    });
  }
}; */




// action para recuperar la sesion iniciada y que no se borre en el estado redux la info(esto va en la store)
export let restoreSessionAction = () => (dispatch) => {
  let storage = localStorage.getItem("storage");
  storage = JSON.parse(storage); //lo convertimos en un objeto
  if (storage && storage.user) {
    dispatch({
      type: LOGIN_SUCESS,
      payload: storage,
    });
  }
};

//funcion auxiliar que nos ayuda a guardar cosas en el local storage
export function saveStorage(storage) {
  localStorage.storage = JSON.stringify(storage);
  //tenemos que pasar texto y no objeto! por eso el stringify
}


//hace el login con google
export let doGoogleLogIn = () => (dispatch, getState) => {
  dispatch({
    type: LOGIN, //el login solo pasa el fetching a true (sirve en caso de queres mostrar un mensaje de carga ya que puede tardar unos segundos en autenticar)
  });

  // let products = JSON.parse(window.localStorage.getItem("cart"))

  // products = products.map(e => {
  //   return {
  //     productId: e.id,
  //     quantity: e.quantity,
  //   }
  // })

  return loginWithGoogle() //retorna la promesa
    .then(async (user) => {

      // let userId = user.uid                                      ------------------
      // let userId = "d1687b07-058c-414a-bb5a-77a8d897be57"
      // let info = { userId, products }

      // await axios.put(url + "/order/addOrder", info);

      dispatch({
        type: LOGIN_SUCESS,
        payload: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL,
        },
      });
      saveStorage(getState());
    })
    // .then ( async () => {
      
    //   // LO QUE RECIBE DEL BACK LO MANDA A REDUX Y AL LOCAL STORAGE   -----------------

    //   // let orderBack = await axios.get( url + "algo" + quizasIdUsuario)
    //   // let { products } = orderBack
    //   // dispatch({ type: FUSION_CART, payload: orderBack})
    //   // saveStorage(products)

    // })
    .catch((e) => {
      dispatch({
        type: LOGIN_ERROR,
        payload: e.message,
      });
    });
};


//cierra sesion de google 











// export let doGoogleLogIn = () => (dispatch, getState) => {
//   dispatch({
//     type: LOGIN, //el login solo pasa el fetching a true (sirve en caso de queres mostrar un mensaje de carga ya que puede tardar unos segundos en autenticar)
//   });

//   const products = JSON.parse(localStorage.getItem("cart")) 

//   return loginWithGoogle() //retorna la promesa
//     .then(async (user) => {

//       dispatch({
//         type: LOGIN_SUCESS,
//         payload: {
//           uid: user.uid,
//           displayName: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         },
//       });
//       saveStorage(getState());
//     })
//     .catch((e) => {
//       dispatch({
//         type: LOGIN_ERROR,
//         payload: e.message,
//       });
//     });
// };