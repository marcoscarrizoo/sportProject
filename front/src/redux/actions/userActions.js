import axios from 'axios'

export const LOGIN_WITH_USER = 'LOGIN_WiTH_USER'
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGIN_ERROR =  'LOGIN_ERROR'


export let doUserLogin = () => (dispatch, getState) => {
    dispatch({
        type: LOGIN_SUCESS
    })

}

export let newUser = (form) => async(dispatch) => {
    try{
        const data = await axios.post('http://localhost:3001/user/create', form)
        console.log('dataaaa',data)

    }
    catch(e) {
        console.log(e)
    }
}
   
    


