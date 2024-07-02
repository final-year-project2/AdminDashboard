import axios from "axios"
import { useEffect, useState } from "react"
const useGetData = (url)=>{
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const AbortCont = new AbortController()
        setIsPending(true)

        axios.get(url,{signal:AbortCont.signal})
        .then(response=>{
            setIsPending(false)
            setData(response.data)
            setError(null)
        })
        .catch((error)=>{
            if(error.name === 'AbortError'){
                console.log('Featch aborted')
            }
            else{
                setIsPending(false)
                setError(error.message)}
            })
        return ()=>AbortCont.abort()
    },[url])

    return({data,isPending,error})
}

export default useGetData