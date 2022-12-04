import { useSearchContent } from "../../hooks/useSearchContent";
import { useState } from "react";
import CommonHeader from "../../generic/commonHeader/CommonHeader";
import "./SearchComponent.scss";
import Articlecard from "../../generic/articlecard/Articlecard";
import Loader from "../../generic/loader/Loader";
import Error from "../../generic/error/Error";
import { useParams } from "react-router-dom";

function SearchComponent(){
    const params = useParams();
    const [ sortStr , setSortStr] = useState("newest");
    const [ currentArticleList , setCurrentArticleList] = useState([]);
    const [ currentPage , setCurrentPage] = useState(1);
    const syncSortBy = (sortStr) => {
        setSortStr(sortStr);
    }
    const { searchResult, isLoading, isError } = useSearchContent(params.searchterm , sortStr, currentPage);
    
    const checkIfArticlePresent = (source, newList) => {
        if(source?.filter( x=> x.id == newList[0].id).length > 0){
            return true;
        } 
        return false;
    }

    // if(!checkIfArticlePresent(currentArticleList, searchResult)){
    //     setCurrentArticleList( (prevVal) => {
    //         return prevVal.push(...searchResult);
    //     })
    // }
    
    const headerTitle="Search results";
    const articleList = searchResult.map((article, index) => {
        return <div key={article.id} className={(index+1)%3 == 0 ? "article-card-container-large":"article-card-container-large margin-card-fix" }><Articlecard size="large" articleDetail={article} showDesc={false}/></div>
    })
    
    // window.addEventListener("scroll" , (event)=>{
    //     if(document.getElementsByClassName("App")[0].clientHeight  - window.scrollY < 1000){
    //         setCurrentPage((previousVal) => {
    //             return previousVal + 1;
    //         })
    //     }
    // })

    return (
        <div className="search-container">
           <div className="search-header">
                <CommonHeader title={headerTitle} filterResults={syncSortBy}/>
           </div>
           { !isLoading &&  !isError.showError && articleList?.length > 0 &&
           <div className="search-results-list">
                {articleList}
           </div>
          }

          { isLoading && <Loader />}

          { !isLoading && articleList?.length < 1 && 

            <Error message="The searchterm you entered did not return any values. Please search with a differen keyword."/>
          } 
        </div>
    )
}

export default SearchComponent