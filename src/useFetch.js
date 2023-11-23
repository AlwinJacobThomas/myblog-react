import { useEffect, useState } from 'react'
//npx json-server --watch data/db.json --port 8000
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController()

    setTimeout(() => {
      //settimeout() used to slow down the process to certain amount of time
      fetch(url, { signal: abortCont.signal }) //use abort signal to pass the signal of Aborting
        .then((res) => {
          //takes time to fetch data from server -'use promise'
          if (!res.ok) {
            throw Error('Could not find the data from server')
          } //throw error for faulty server
          else {
     
            return res.json()
            
          }
        })
        .then((data) => {
          //takes time for copying data from server to frontend -'use promise'
          console.log(data)

          setData(data)
          setIsPending(false)
          setIsError(null)
        })
        .catch((err) => {
          //for catching err if DB network connection fails

          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            console.log('Message:   ' + err)
            setIsPending(false)
            setIsError(err.message)
          }
        })
    }, 1000)

    return () => {
      console.log('fetch aborted')
      abortCont.abort()
    }
  }, [url]) //url as a dependancy i.e, whenever the url changes the function re-runs to fetch data again

  return { data, isPending, error }
}

export default useFetch;
