import { useEffect, useCallback, useState } from 'react'

function useScroll ({ scrollRange = 20 } = {}) {
  const [isScroll, setScroll] = useState(false)

  const handleScrollEvent = useCallback(() => {
    if (window.scrollY > scrollRange) return setScroll(true)
    return setScroll(false)
  }, [scrollRange])

  useEffect(() => {
    document.addEventListener('scroll', handleScrollEvent)

    return () => document.removeEventListener('scroll', handleScrollEvent)
  }, [handleScrollEvent])
  return isScroll
}

export default useScroll
