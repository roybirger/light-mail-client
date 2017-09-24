


export const ARTICLE_ADD_ACTION = 'ADD_ARTICLE';
export const ARTICLE_REMOVE_ACTION = 'REMOVE_ARTICLE';

export function articleAdd( articles = [] ) {
    return {
        type: ARTICLE_ADD_ACTION,
        data: {
            'articles': articles
        }
    }
}

export function articleRemove( articleId = -1 ) {
    return {
        type: ARTICLE_REMOVE_ACTION,
        data: {
            'articleId': articleId
        }
    }
}