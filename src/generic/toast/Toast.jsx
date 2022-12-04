import "./Toast.scss";

function Toast({type , children}){
    
    return (
    <div className={type == "positive" ? "positive toast-container" : "negative toast-container"}>
        {children}
    </div>
    )
}

export default Toast