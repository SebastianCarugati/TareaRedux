// Valor inicial
const defaultValue = {
    token: null,
    userInfo: {} //lo obtenemos del postman del backen de Juli, del Get user
}

// Action Types  (son los que comparamos en el switch)
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const GET_USER_INFO = 'GET_USER_INFO'


//REDUCER que se exporta por default

export default function AuthReducer(state = defaultValue, { type, payload }){  
        switch(type) {
            case LOGIN: return {...state, token: payload }
            case LOGOUT: return defaultValue
            case GET_USER_INFO: return {...state, userInfo: payload }
            default: return state   
        }
    }
    

//Actions

export const LoginAction = ({ email, password, navigate }) => async (dispatch) => {

    try {
        const response = await fetch ('https://back-sandbox.herokuapp.com/api/auth/login',{

            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify ({email, password})
    
         }
    
       )
       const {token} = await response.json()
       navigate ('/home')
       dispatch ({ type: LOGIN, payload: token});


    }
     catch (error) {
      alert (error)
    }
}




//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODQ2Nzg0ZDFjY2E5MDAwNGFlYTY0MCIsImlhdCI6MTYzNjA2NzIyOH0.xXBrTV11KRqwtH79ovsO-5IrH3Ph0iY4rUwjLXny8rs"