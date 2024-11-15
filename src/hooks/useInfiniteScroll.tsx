import { useEffect, useCallback, useRef } from "react"

const useInfiniteScroll = (fetchMore: () => void, hasMore: boolean, endCursor: string | null) => {
  const fetchedPositions = useRef<string[]>([])

  const handleScroll = useCallback(() => {
    if (!hasMore || (endCursor && fetchedPositions.current.includes(endCursor))) return
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      if (endCursor) fetchedPositions.current.push(endCursor)
      fetchMore()
    }
  }, [fetchMore, hasMore, endCursor])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])
}

export default useInfiniteScroll
