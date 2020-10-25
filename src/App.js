import React from 'react';
import { Provider } from 'react-redux'
import Todos from './pages/todo/index';
import About from "./pages/about/index";
import { Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/BasicLayout';
import store from './module/store';

const App = () => {
    const routerList = (
        <Switch>
            <DefaultLayout exact path="/" component={Todos} />
            <DefaultLayout path="/index" component={Todos} />
            <DefaultLayout path="/about" component={About} />
        </Switch>
    );
    return (
        <Provider store={store}>
            {
                process.env.NODE_ENV === 'dev' ?
                    <BrowserRouter>{routerList}</BrowserRouter> :
                    <HashRouter>{routerList}</HashRouter>
            }
        </Provider>
    )

}
export default App;