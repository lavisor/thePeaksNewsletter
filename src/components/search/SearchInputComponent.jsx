import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {debounce} from "lodash";
import "./SearchInputComponent.scss";

function SearchInputComponent(){

    const [ openInput , setOpenInput] = useState(false);
    const navigate = useNavigate();

    const keyUpFunction = debounce((event) => {
        if(event.target.value.trim().length > 0){
            navigate('/search/'+event.target.value)
        }

        if(event.target.value.trim().length == 0){
            setOpenInput(false);
        }
    }, 800)

    const performsearch = (event) =>{
        if(openInput){
            // do search
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