import React from 'react';
import Todos from './pages/todo';
import About from "./pages/about";
import { Switch, HashRouter, BrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/BasicLayout';

const App = () => {
    const routerList = (
        <Switch>
            <DefaultLayout exact path="/" component={Todos} />
            <DefaultLayout path="/index" component={Todos} />
            <DefaultLayout path="/about" component={About} />
        </Switch>
    );
    return (
        process.env.NODE_ENV==='dev' ? 
            <BrowserRouter>{routerList}</BrowserRouter> : 
            <HashRouter>{routerList}</HashRouter>

    )

}
export default App;