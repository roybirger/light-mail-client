

export const articleFetcherService = () => {

    let self = {}

    self.getNextArticles = () => {
        return new Promise(resolve => {
            resolve({
                "articles": [
                                { 
                                    "key": 0, 
                                    "title": "Hello Article", 
                                    "img": "https://source.unsplash.com/random", 
                                    "contentUrl": "http://www.ynet.co.il"
                                },
                                { 
                                    "key": 1, 
                                    "title": "Hello Article2", 
                                    "img": "https://source.unsplash.com/random", 
                                    "contentUrl": "http://www.walla.co.il"
                                }
                            ]
            });
        })
    }

    return self;

}