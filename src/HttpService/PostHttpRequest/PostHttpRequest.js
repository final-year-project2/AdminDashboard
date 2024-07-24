import axios from "axios"
import { useEffect, useState } from "react"
const PostData = (url,params)=>{
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const AbortCont = new AbortController()
        setIsPending(true)

        axios.post(url,{signal:AbortCont.signal},params)
        .then(response=>{
            console.log(response)
            // setIsPending(false)
            // setData(response.data)
            // setError(null)
        })
        .catch((error)=>{
            if(error.name === 'AbortError'){
                console.log('post aborted')
            }
            else{
                setIsPending(false)
                setError(error.message)}
            })
        return ()=>AbortCont.abort()
    },[url])

    return({data,isPending,error})
}

export default PostData