import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

const RouterView = (props) => {
  return <Switch>
    {props.routes.map((route, idx) => {
      const { component: Component, redirect, wrapper: Wrapper, routes, path, ...props } = route;
      if (redirect) {
        return <Redirect exact key={idx} from={path} to={redirect} />
      } else {
        return <Route
          {...props}
          path={path}
          key={idx}
          exact={routes ? false : true}
          render={props => {
            const com = <Component {...props} >{
              routes && <RouterView routes={routes} />
            }</Component>
            return Wrapper ? <Wrapper>{com}</Wrapper> : com
            // return <Component {...props} >{
            //   routes && <RouterView routes={routes} />
            // }</Component>
          }}
        />
      }
    })}
  </Switch>
}

export default RouterView;

