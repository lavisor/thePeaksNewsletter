import { Link } from "react-router-dom";
import { Suspense } from "react";
import SearchInputComponent from "../../components/search/SearchInputComponent";

import "./Header.scss";

function Header() {

    return(
        <div className="header-container">
            <div className="header-items">
                <Link to="/"><div className="header-logo"></div></Link>
                <Suspense fallback={null}>
                    <SearchInputComponent> </SearchInputComponent>
                </Suspense>
            </div>
        </div>
    )
}

export default Header