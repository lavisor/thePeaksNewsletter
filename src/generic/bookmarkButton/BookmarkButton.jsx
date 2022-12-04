import "./BookmarkButton.scss";

function BookmarkButton({callback , buttonContent , icontype , showicon}) {
    return(
        <div className="bookmarks-button" onClick={callback}>
            <i className="fa-solid fa-bookmark"></i> <span>{buttonContent}</span>
        </div>
    )
}

export default BookmarkButton