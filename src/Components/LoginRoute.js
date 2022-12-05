import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {UserContext} from '../Store/Store'



function LoginRoute({component:Component,...rest}) {
    const [initialState] = useContext(UserContext);

    return (
        console.log('Route ',rest),
        <Route {...rest} render={(props)=>(
            initialState.isAuth !== true ?  <Component {...props}/> : < Redirect to='/' />
        )}/>
    )
}

export default LoginRoute
