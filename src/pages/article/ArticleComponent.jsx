import React, { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../generic/loader/Loader";
import BookmarkButton from "../../generic/bookmarkButton/BookmarkButton";
import { useArticle } from "../../hooks/useArticles";
import Toast from "../../generic/toast/Toast";
import { formatDate } from "../../helper";
import "./ArticleComponent.scss";
import { type } from "@testing-library/user-event/dist/type";

function ArticleComponent(){
    const params = useParams();
    const articleId = params['*'];
    const { articleResult, isLoading, isError } = useArticle(articleId);
    const [ isBookmarked , setIsBookmarked ] = useState(false);
    const [ toast , setToast ] = useState({ show:false , status: "positive", message: ""});

    useEffect(()=> {
        let bookmarkedArticle = JSON.parse(window.localStorage.getItem("bookmarks"));
        console.log("bookmark");
        if(bookmarkedArticle?.filter(article => article.id == articleId).length > 0 ){
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [])

    const bookmarkArticle = (event) => {
        event.preventDefault();
        let bookmarkedArticle = JSON.parse(window.localStorage.getItem("bookmarks"));
        bookmarkedArticle = bookmarkedArticle ? bookmarkedArticle : []; 
        bookmarkedArticle.push(articleResult);
        window.localStorage.setItem("bookmarks" , JSON.stringify(bookmarkedArticle));
        showToast("positive", "Saved to bookmarks");
        setIsBookmarked(true);
    }

    const removeBookmark = (event) => {
        event.preventDefault();
        let bookmarkedArticle = JSON.parse(window.localStorage.getItem("bookmarks"));
        bookmarkedArticle = bookmarkedArticle.filter( article => article.id != articleId);
        window.localStorage.setItem("bookmarks" ,  JSON.stringify(bookmarkedArticle));
        showToast("negative", "Removed from bookmark");
        setIsBookmarked(false);
    }

    const showToast = (status, message) => {
        console.log(status)
        setToast({ show:true , status: status , message: message});
    
        setTimeout(()=> {
            setToast({ show:false , status: status ,  message: message});
        }, 1000)
    }

    var articleImage = {
        backgroundImage : "url(" + articleResult?.fields?.thumbnail + ")", 
        backgroundPosition: "center", 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };

    const dynamicBookmarksIcon = () =>{

        if(toast.status == "positive"){
            return (
                <span><i class="fa-solid fa-bookmark"></i></span>
            ) ;
        } else {
            return(
                <span><i class="fa-regular fa-bookmark"></i></span>
            )
        }
    }
    
    console.log("articleResult: ", articleResult);
    return (
        <div className="article-container">
         { isLoading && <Loader /> }  
         { !isLoading && !isError.showError && 
         <div className="article-main-content">
            <div className="article-body">
               {isBookmarked && <BookmarkButton callback={removeBookmark} buttonContent="REMOVE BOOKMARK" /> } 
               {!isBookmarked && <BookmarkButton callback={bookmarkArticle} buttonContent="ADD BOOKMARK" /> } 
                <div className="date-container">
                    {formatDate(articleResult?.webPublicationDate)}
                </div>
                <div className="headline">
                    {articleResult?.fields?.headline}
                </div>

                { articleResult?.fields?.thumbnail && 
                
                <div className="article-thumbnail hero-image-left">
                    <div className="thumbnail" style={articleImage}></div>
                    <div className="description"> A woman walks along a flooded road amidst a storm in the Masiphumelele informal settlement in Cape Town Photograph: Nic Bothma/EPA</div>
                </div>
                
                }
                <div className="trailtext">
                    {articleResult?.fields?.trailText}
                </div>
                <hr />
                <div className="body" dangerouslySetInnerHTML={{ __html: articleResult?.fields?.body } } >
                
                </div>
            </div> 
            {
                articleResult?.fields?.thumbnail && 
                <div className="article-thumbnail hero-image-right">
                    <div className="thumbnail" style={articleImage}></div>
                    <div className="description"> A woman walks along a flooded road amidst a storm in the Masiphumelele informal settlement in Cape Town Photograph: Nic Bothma/EPA</div>
                </div>
            }

            { toast.show && 
                <Toast type={toast.status}> 
                    <span><i className={toast.status == "positive" ? "fa-solid fa-bookmark": ""}></i></span> 
                    <span><i className={toast.status == "negative" ? "fa-regular fa-bookmark": ""}></i></span> 
                    <span className="toast-message">{toast.message}</span>
                </Toast>
            }

         </div>
         }
        </div>
    )
}

export default ArticleComponent