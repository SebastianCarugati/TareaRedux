import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';


export const PATHS = {

    private:[
        //va a tener lo de productos
        {
            path: '/home',
            exact: true,
            element: <Home/>
        }
    ],
    noLoggedIn: [
        {
            path: '/login',
            exact: true,
            element: <Login/>
        }
    ]
}
