import TopStory from "../../components/topstory/TopStory";
import { useState } from "react";
import CategoryNewsSection from "../../components/categoryNewsSection/CategoryNewsSection";
import "./HomeComponent.scss";

function HomeComponent(){
    const [ sortBy , setSortBy] = useState("newest");

    const sortByCallback = (sortByString) => {
        setSortBy(sortByString);
    }

    return (
        <div className="home-container">
            <TopStory sortByCallback={sortByCallback}/>
            <CategoryNewsSection sortByStr={sortBy} categoryType="sport"/>
            <CategoryNewsSection sortByStr={sortBy} categoryType="culture"/>
            <CategoryNewsSection sortByStr={sortBy} categoryType="lifestyle"/>
        </div>
    )
}

export default HomeComponent