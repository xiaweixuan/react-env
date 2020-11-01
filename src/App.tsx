import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import DefaultLayout from './layouts/BasicLayout';
import store from './module/store';
import route from './router';

export interface AppProps {}

const App: React.FC<AppProps>  = () => {
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