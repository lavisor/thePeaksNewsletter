import { useEffect , useState } from "react";
import { getSearchResults } from "./../services/serviceHelper";

function useSearchContent(searchTerm , sortStr , pageNumber){

    const [ searchResult , setSearchResult] = useState([]);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ isError , setError ] = useState({showError: false, message: ""});

    useEffect(() => {
        setIsLoading(true);
        getSearchResults(searchTerm, sortStr, pageNumber).then(response => response.json()).then(data => {
            if(data.response.status == "ok"){
                setSearchResult(data.response.results)
            } else {
                setError({ showError: true, message: "Some error!" }) 
            }
            setIsLoading(false);
        })
    } , [searchTerm , sortStr , pageNumber])

    return { searchResult, isLoading, isError }
}

export { useSearchContent } 