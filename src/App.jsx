import React from 'react';

import createStore from './store/createStore'

import Login from './login/loginComponent'
import ArticleList from './articleList/articleListComponent'

const store = createStore()

const App = () => <div>
    <ArticleList store={store}></ArticleList>
    {/*<Login store={store}></Login>*/}
</div>;

export default App;