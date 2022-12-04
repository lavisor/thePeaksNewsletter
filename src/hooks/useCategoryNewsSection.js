import { useEffect , useState } from "react";
import  { getCategoryNewsSection }  from "../services/serviceHelper";

const  useCategoryNewsSection=(sortByStr, categoryType)=>{
    const [ categoryNewsList , setCategoryNewsList ] = useState([]);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ isError , setError ] = useState({showError: false, message: ""});

    useEffect(() => {
        setIsLoading(true);
        getCategoryNewsSection(sortByStr, categoryType).then(response => response.json()).then(data => {
            if(data.response.status == "ok"){
                setCategoryNewsList(data.response.results)
            } else {
                setError({ showError: true, message: "Some error!" }) 
            }
            setIsLoading(false);
        })

    } , [])
    return { categoryNewsList , isLoading , isError}
}

export  { useCategoryNewsSection }