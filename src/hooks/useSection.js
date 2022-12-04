import { useEffect , useState } from "react";
import  { getSection }  from "../services/serviceHelper";

const  useSection=(sortBy)=>{
    const [ sectionList , setSectionList ] = useState([]);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ isError , setError ] = useState({showError: false, message: ""});
    useEffect(() => {
        setIsLoading(true);
        getSection(sortBy).then(response => response.json()).then(data => {
            if(data.response.status == "ok"){
                setSectionList(data.response.results)
            } else {
                setError({ showError: true, message: "Some error!" }) 
            }
            setIsLoading(false);
        })

    } , [sortBy])
    return { sectionList , isLoading , isError }
}

export  { useSection }