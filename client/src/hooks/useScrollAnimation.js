import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useStaggerAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = container.querySelectorAll('.reveal-item')
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * (options.staggerDelay ?? 120)}ms`
            child.classList.add('is-visible')
          })
          observer.unobserve(container)
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20px 0px' }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return ref
}
