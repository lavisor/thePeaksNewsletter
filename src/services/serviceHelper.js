

    const apiKey = "a65c1ed7-a419-467c-a665-d4224c584020";
    const getSection = (sortBy) => {
        let sectionPromise = fetch("https://content.guardianapis.com/search?section=news&show-fields=headline,trailText,thumbnail&show-refinements&order-by="+sortBy+"&=all&api-key="+ apiKey);
        console.log("https://content.guardianapis.com/search?section=news&show-fields=headline,trailText,thumbnail&show-refinements&order-by="+sortBy+"&=all&api-key="+ apiKey);
        return sectionPromise;
    }

    const getCategoryNewsSection = (sortByStr, categoryType) => {
        let categoryNewsPromise = fetch("https://content.guardianapis.com/search?section="+categoryType+"&show-fields=headline,trailText,thumbnail&show-refinements=all&page-size=6&page=1&order-by="+sortByStr+"&api-key="+apiKey);
        return categoryNewsPromise;
    }

    const getSearchResults = (searchTerm, sortStr, pageNumber) => {
        let pageSize = 15;
        let url = "https://content.guardianapis.com/search?q="+searchTerm+"&page-size="+pageSize+"&page="+pageNumber+"&show-fields=headline,trailText,thumbnail&order-by="+sortStr+"&api-key="+ apiKey;
        let searchResults = fetch(url);
        return searchResults;
    }

    const getArticleDetails = (articleId) => {
        let url = "https://content.guardianapis.com/"+articleId + "?show-fields=headline,trailText,thumbnail,body&api-key="+ apiKey;
        let articleResult = fetch(url);
        return articleResult;
    }

    export { getSection  , getCategoryNewsSection , getSearchResults , getArticleDetails };
