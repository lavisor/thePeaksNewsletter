import { useNavigate } from "react-router-dom";
import "./Articlecard.scss";

function Articlecard({size , articleDetail, showDesc=true }){
    let defaultImageClass = "";
    let articleTypeClass = "";
    if(articleDetail?.sectionId == "sport"){
        articleTypeClass = " sport-card-border";
    } else if(articleDetail?.sectionId == "culture"){
        articleTypeClass = " culture-card-border";
    } else if(articleDetail?.sectionId == "lifestyle"){
        articleTypeClass = " lifestyle-card-border";
    } else {
        articleTypeClass = " default-card-border";
    }
    if(!articleDetail?.fields.thumbnail){
        defaultImageClass = " default-card-image-"+size;
    }
    var articleImage = {
        backgroundImage : "url(" + articleDetail?.fields.thumbnail + ")", 
        backgroundPosition: "center", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };

    let navigate = useNavigate();
    const redirectToArticlePage = () => {
        navigate('/article/'+articleDetail.id)
    } 

    return(
        <div className={" article-card card-size-"+size+ defaultImageClass + articleTypeClass } style={ defaultImageClass == "" ? articleImage: {}} onClick={redirectToArticlePage}>
            <div className="article-heading">
                <div className="title"> {articleDetail?.webTitle} </div>
                { (size == "large" || size == "exlarge") && showDesc && <div className="description"> {articleDetail?.fields.headline} </div> } 
            </div>
        </div>
    )
}

export default Articlecard