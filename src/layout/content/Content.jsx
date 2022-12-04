import { Route , Routes} from "react-router-dom";
import ArticleComponent from "../../pages/article/ArticleComponent";
import HomeComponent from "../../pages/home/HomeComponent";
import SearchComponent from "../../pages/search/SearchComponent";
import BookmarkComponent from "../../pages/bookmark/BookmarkComponent";
import "./Content.scss";

function Content(){

    return(
        <div className="">
            <Routes>
                <Route  path="/" element={<HomeComponent />}/>
                <Route path="/search/:searchterm" element={<SearchComponent/>} />
                <Route path="/bookmark" element={<BookmarkComponent/>} />
                <Route path="/article/*" element={<ArticleComponent/>} />
            </Routes>
        </div>
    )
}

export default Content