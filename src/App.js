import React from 'react';
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/BasicLayout';
import store from './module/store';
import route from './router';


const App = () => {
    const routerList = <DefaultLayout>{renderRoutes(route)}</DefaultLayout>;
    return (
        <Provider store={store}>
            {
                process.env.NODE_ENV === 'development' ?
                    <BrowserRouter>{routerList}</BrowserRouter> :
                    <HashRouter>{routerList}</HashRouter>
            }
        </Provider>
    )

}
export default App;