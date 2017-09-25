import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import createStore from './store/createStore'

import Login from './login/loginComponent'
import ArticleList from './articleList/articleListComponent'

const store = createStore()

const App = () => (
    <Router>
        <div>
            <Route path="/list" render={() => (
                <ArticleList store={store} />
            )}>
            </Route>
            <Route path="/login" render={() => (
                <Login store={store} />
            )}>
            </Route>
        </div>
    </Router>
);
export default App;