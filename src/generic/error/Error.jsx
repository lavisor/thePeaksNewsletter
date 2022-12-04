import "./Error.scss";

function Error({statusCode, message}){
    return(
        <div className="error-container">
            <div className="error-icon-container">
                <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div className="error-message-container">
                {message}
            </div>
        </div>
    )
}

export default Error