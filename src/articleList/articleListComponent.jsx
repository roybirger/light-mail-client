import React from 'react'

import { injectReducer } from '../store/reducers'
import { articleListReducer } from './articleListReducer'
import { articleAdd } from './articleListActions'
import { ArticleItem } from './articleItem'
import { articleFetcherService } from './articleFetcherService'

const { Component } = React

class ArticleListComp extends Component {
    
    constructor(props) {
        super(props);
        injectReducer(props.store, {key: 'articleList', reducer: articleListReducer})    
        props.store.subscribe(this.stateHandler.bind(this));
        this.articles = [];
    }

    componentWillMount() {
        articleFetcherService().getNextArticles().then(res => {
            this.props.store.dispatch(new articleAdd(res.articles));
        })
    }

    stateHandler() {
        this.articles = this.props.store.getState().articleList.articles;
        this.forceUpdate();
    }   

    render() {
        return (
            <div>
                {
                    this.articles.map(function(element) {
                        return <ArticleItem key={element.key} item={element} store={this.props.store}/>
                    },this)
                }
            </div>
        )
    }
}

export default ArticleListComp




