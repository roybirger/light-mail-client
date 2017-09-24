
import {ARTICLE_ADD_ACTION, ARTICLE_REMOVE_ACTION} from './articleListActions'


export const articleListReducer = (state = [], action) => {
    
    switch(action.type) {
        case ARTICLE_ADD_ACTION: {
            state.articles = state.articles.concat(action.data.articles);
            break;
        }
        case ARTICLE_REMOVE_ACTION: {
            state.articles.splice(state.articles.indexOf(action.data.articleId),1);
            break;
        }
        default: {
            if (typeof state.articles === 'undefined') state.articles = [];
            break;
        }
    }

    return state;
}
