import { useBookmarks } from "../../hooks/useBookmarks";
import { useState } from "react";
import Articlecard from "../../generic/articlecard/Articlecard";
import Error from "../../generic/error/Error";
import CommonHeader from "../../generic/commonHeader/CommonHeader";
import Loader from "../../generic/loader/Loader";
import "./BookmarkComponent.scss";

function BookmarkComponent(){
        const [ sortBy , setSortBy ] = useState("newest");
        const { bookmarkResult , isLoading, isError } = useBookmarks(sortBy);
        const headerTitle="All bookmarks";
        window.scrollTo(0, 0);
        const articleList = bookmarkResult?.map((article, index) => {
            return <div className={(index+1)%3 == 0 ? "card-reveal article-card-container-large":"card-reveal article-card-container-large margin-card-fix" }><Articlecard size="large" articleDetail={article} showDesc={false}/></div>
        })
        
        const syncSortBy = (sortStr) => {
            setSortBy(sortStr);
        }

        return (
            <div className="bookmark-container">
               <div className="bookmark-header">
                    <CommonHeader title={headerTitle} showBookmarkBtn={false} filterResults={syncSortBy}/>
               </div>
               { !isLoading &&  !isError.showError &&  articleList.length > 0 &&
               <div className="bookmark-results-list">
                    {articleList}
               </div>
              }

              { !isLoading && !isError.showError && articleList.length < 1 &&
                <Error message="There are no bookmarked articles."/>
              }
    
              { isLoading && <Loader />}
            </div>
        )
}

export default BookmarkComponent