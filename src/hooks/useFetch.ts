import { useState, useEffect } from 'react'
const apiUrl = 'https://bocanavalores.com/backend/api'
import axios from 'axios'

function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const urlOk = apiUrl + url
        const response = await axios.get(urlOk)
        const json = await response.data
        setData(json)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])

  return { data, loading, setLoading, error, setError }
}

export default useFetch
