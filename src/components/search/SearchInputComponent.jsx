import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {debounce} from "lodash";
import "./SearchInputComponent.scss";

function SearchInputComponent(){

    const [ openInput , setOpenInput] = useState(false);
    const navigate = useNavigate();

    const keyUpFunction = debounce((event) => {
        if(event.target.value.trim().length > 0){
            console.log(event.target.value);
            navigate('/search/'+event.target.value)
        }

        if(event.target.value.trim().length == 0){
            setOpenInput(false);
        }
    }, 500)

    const performsearch = (event) =>{
        if(openInput){
            // do search
            console.log("Will search happen");
            navigate('/search/'+event.target.value);
        } else {
            setOpenInput(true);
            document.getElementById('searchbar').focus();
        }
    }

    const unfocusInput = () => {
        setOpenInput(false);
    }

    return(
    <div className="searchbar-container">
        <input id="searchbar" className={ openInput? "seach-input animate-input-show" : "seach-input animate-input-hide"} type="text" placeholder="Search all news" onKeyUp={keyUpFunction} onBlur={unfocusInput} />
        <div className={openInput? "search-icon light" : "search-icon" } onClick={performsearch}></div>
    </div>
    )
}

export default SearchInputComponent