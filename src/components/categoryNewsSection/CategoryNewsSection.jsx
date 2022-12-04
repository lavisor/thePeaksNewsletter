import { useCategoryNewsSection } from "../../hooks/useCategoryNewsSection";
import { Fragment } from "react";
import Articlecard from "../../generic/articlecard/Articlecard";
import "./CategoryNewsSection.scss";

function CategoryNewsSection({sortByStr , categoryType}){
    const { categoryNewsList , isLoading , isError  } = useCategoryNewsSection(sortByStr, categoryType);
    console.log("Category News List: ", categoryNewsList);
    const articleList = categoryNewsList?.map((article, index) => {
        return <div className="article-card-container-large"><Articlecard size="large" articleDetail={article} showDesc={false}/></div>
    })
    
    return (
        <Fragment>
        {
            categoryNewsList.length > 0 && 
            <div className="category-news-container">
                <div className="category-header">
                <span> {categoryType} </span>  
                </div>
                <div className="category-contents">
                    {articleList}
                </div>
            </div>
        }
        </Fragment>
    )
}

export default CategoryNewsSection