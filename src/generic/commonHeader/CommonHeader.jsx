import BookmarkButton from "../bookmarkButton/BookmarkButton";
import SelectBox from "../selectBox/SelectBox";
import "./CommonHeader.scss";

function CommonHeader({title , showBookmarkBtn , filterResults}){
    const options=[{label: "Newest first" , value: "newest"} ,{label: "Oldest first" , value: "oldest"} ];

    return(
        <div className="common-header">
            <div className="title">{title} </div>
            <div className="user-actions-container">
               { showBookmarkBtn && <BookmarkButton /> } 
                <SelectBox options={options} changeHandler={filterResults}/>
            </div>
        </div>
    )
}

export default CommonHeader