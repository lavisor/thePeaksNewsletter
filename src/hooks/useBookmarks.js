import {useState , useEffect} from "react";

function useBookmarks(sortBy){

    const [ bookmarkResult , setbookmarkResult] = useState([]);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ isError , setError ] = useState({showError: false, message: ""});

    useEffect(()=> {
        let arr = JSON.parse(localStorage.getItem("bookmarks"));
        if(arr) {
            if(sortBy == "newest"){
                arr = arr.sort((a, b) => { return new Date(a.webPublicationDate) - new Date(b.webPublicationDate)});
            } else {
                arr = arr.sort((a, b) => { return new Date(b.webPublicationDate) - new Date(a.webPublicationDate)});
            }
        } else {
            arr = [];
        }
        
        setbookmarkResult(arr);
        setIsLoading(false);
    }, [sortBy])

    return { bookmarkResult , isLoading , isError}
}

export { useBookmarks }