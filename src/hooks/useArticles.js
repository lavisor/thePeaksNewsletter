import { useEffect , useState} from "react";
import { getArticleDetails } from "./../services/serviceHelper";

function useArticle(articleId){
    const [ articleResult , setArticleResult] = useState([]);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ isError , setError ] = useState({showError: false, message: ""});

    useEffect(() => {
        setIsLoading(true);
        getArticleDetails(articleId).then(response => response.json()).then(data => {
            if(data.response.status == "ok"){
                setArticleResult(data.response.content)
            } else {
                setError({ showError: true, message: "Some error!" }) 
            }
            setIsLoading(false);
        })
    } , [])

    return { articleResult, isLoading, isError }
}

export { useArticle }