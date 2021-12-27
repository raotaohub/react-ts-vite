import { throttle } from 'lodash'

import { useRef, useCallback, useEffect } from 'react'

export function useThrottle(cb: () => void, delay: number) {
  const options = { leading: true, trailing: false }
  const cbRef = useRef<(...args: any) => void>(cb)

  useEffect(() => {
    cbRef.current = cb
  })

  return useCallback(
    throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  )
}
