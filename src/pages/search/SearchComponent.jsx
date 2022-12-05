import { useSearchContent } from "../../hooks/useSearchContent";
import { useState , useEffect} from "react";
import CommonHeader from "../../generic/commonHeader/CommonHeader";
import Articlecard from "../../generic/articlecard/Articlecard";
import Loader from "../../generic/loader/Loader";
import Error from "../../generic/error/Error";
import { useParams } from "react-router-dom";
import { debounce } from "lodash";
import "./SearchComponent.scss";
 
function SearchComponent(){
    const params = useParams();
    const [ sortStr , setSortStr] = useState("newest");
    const [ currentPage , setCurrentPage] = useState(1);
    const syncSortBy = (sortStr) => {
        setSortStr(sortStr);
    }

    const { searchResult, isLoading, isError } = useSearchContent(params.searchterm , sortStr, currentPage);

    const headerTitle="Search results";

    const articleList = searchResult.map((article, index) => {
        return <div key={article.id+currentPage} className={(index+1)%3 == 0 ? "card-reveal article-card-container-large":"card-reveal article-card-container-large margin-card-fix" }><Articlecard size="large" articleDetail={article} showDesc={false}/></div>
    })
    const handleScroll = debounce((event) => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setCurrentPage((previousVal) => {
            return previousVal + 1;
        });

    }, 400)

    useEffect(() => {
        window.addEventListener("scroll" , handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
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