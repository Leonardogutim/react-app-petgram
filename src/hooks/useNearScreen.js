import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import ('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function
      (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
        // console.log('si')
          setShow(true)
          observer.disconnect()
        }
      // console.log('si')
      // console.log(entries)
      })
      observer.observe(element.current)
    })
    // console.log(element.current)

  // observer.observe(element.current)
  }, [element])

  return [show, element]
}
