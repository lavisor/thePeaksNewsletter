import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSection }  from "../../hooks/useSection";
import BookmarkButton from "../../generic/bookmarkButton/BookmarkButton";
import SelectBox from "../../generic/selectBox/SelectBox";
import Articlecard from "../../generic/articlecard/Articlecard";
import Loader from "../../generic/loader/Loader";
import "./TopStory.scss";

function TopStory({sortByCallback}){
    const [ sortBy , setSortBy] = useState("newest");
    const options=[{label: "Newest first" , value: "newest"} ,{label: "Oldest first" , value: "oldest"} ];
    const navigate = useNavigate();
    const { sectionList , isLoading , isError } = useSection(sortBy);
    const bookmarkcallback = () => {
        navigate("/bookmark");
    }
    const filterResults = (value) => {
        setSortBy(value);
        sortByCallback(value);
    }

    return(
    <div className="topstory-container">
        <div className="topstory-header">
            <div className="title"> Top stories </div>
            <div className="user-actions-container">
                <BookmarkButton callback={bookmarkcallback} buttonContent="VIEW BOOKMARK"/>
                <SelectBox options={options} changeHandler={filterResults}/>
            </div>
        </div>
       { !isLoading && !isError.showError && 
        <div className="topstory-content">
            <div className="left-story">
                <div className="hero-article-container">
                    <div className="card-reveal article-card-container-exlarge">
                        <Articlecard size="exlarge" articleDetail={sectionList[0]} />
                    </div>
                </div>
            </div>
            <div className="right-story">
                <div className="top-medium-article">
                    <div className="card-reveal article-card-container-medium"><Articlecard size="medium" articleDetail={sectionList[1]}/></div>
                    <div className="card-reveal article-card-container-medium margin-left"><Articlecard size="medium" articleDetail={sectionList[2]}/></div>
                </div>

                <div className="bottom-small-article">
                <div className="card-reveal article-card-container-small"><Articlecard size="small" articleDetail={sectionList[3]} /></div>
                <div className="card-reveal article-card-container-small margin-left"><Articlecard size="small" articleDetail={sectionList[4]} /></div>
                </div>
            </div>
        </div>
        }
        { !isLoading && !isError.showError && 
            <div className="topstory-content-below">
                <div className="card-reveal article-card-container-large"><Articlecard size="large" articleDetail={sectionList[5]} /></div>
                <div className="card-reveal article-card-container-large"><Articlecard size="large" articleDetail={sectionList[6]} /></div>
                <div className="card-reveal article-card-container-large"><Articlecard size="large" articleDetail={sectionList[7]} /></div>
            </div>
        }

        { isLoading &&  <Loader />}
    </div>
    )
}

export default TopStory