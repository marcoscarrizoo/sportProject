import axios from 'axios'


export const postCategory = (form) => async (dispatch) => {
try {
    const info = await axios.post('http://localhost:3001/category/create', form)
    console.log(info.data)
}
catch(e) {
    console.log(e)
}
}

