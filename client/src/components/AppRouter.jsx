import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'

export const AppRouter = observer(() => {
    const { user } = useContext(Context)
    return (
        <Switch>
            {user.isAuth &&
                authRoutes.map(({ path, component }) => <Route path={path} component={component} key={path} exact />)}

            {publicRoutes.map(({ path, component }) => (
                <Route path={path} component={component} key={path} exact />
            ))}
        </Switch>
    )
})
