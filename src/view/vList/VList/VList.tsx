import { Button } from 'antd'
import React, { useMemo, useRef, useState } from 'react'
import { ITEM_HEIGHT, PRE_LOAD_COUNT, SCROLL_VIEW_HEIGHT } from '../constant'
import { useThrottle } from '@hooks/useThrottle'

const VList = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const elRef = useRef<HTMLDivElement | null>(null)
  const [sourceData, setSourceData] = useState<number[]>([])
  const [showRange, setShowPageRange] = useState({ start: 0, end: 1 })

  /** @name 滚动容器高度（ITEM固定高） */
  const scrollViewHeight = useMemo(() => {
    return sourceData.length * ITEM_HEIGHT
  }, [sourceData])

  const [range, setRange] = React.useState<{ start: number; end: number }>({ start: 0, end: 15 })

  const computeRange = useThrottle(() => {
    const ele = elRef.current

    if (ele) {
      const offset = Math.floor(ele.scrollTop / ITEM_HEIGHT)
      const viewItemSize: number = Math.ceil(ele.clientHeight / ITEM_HEIGHT)
      const startSize: number = offset - PRE_LOAD_COUNT
      const endSize: number = offset + PRE_LOAD_COUNT + viewItemSize
      setRange(() => ({
        start: startSize < 0 ? 0 : startSize,
        end: endSize > sourceData.length ? sourceData.length : endSize
      }))
      // console.log('offset', offset, 'ele.clientHeight', ele.clientHeight)
    }
  }, 500)

  const vlist = useMemo(() => {
    const list = sourceData.slice(range.start, range.end)
    console.log('list:', list, range.start, range.end, range.start - range.end)
    return list
  }, [sourceData, range])

  const topOffset = useMemo(() => {
    return range.start * ITEM_HEIGHT
  }, [range.start])

  return (
    <>
      <Button
        type='primary'
        onClick={() => {
          const initnalList: number[] = Array.from(Array(10000).keys())
          setSourceData(initnalList)
        }}
      >
        Start
      </Button>
      <div style={{ display: 'flex' }}>
        <div className='flex-1'>当前DOM元素长度：{sourceData.length}</div>
        <div className='flex-1'>当前DOM元素长度：{vlist.length}</div>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          ref={containerRef}
          style={{
            height: SCROLL_VIEW_HEIGHT,
            overflow: 'auto',
            margin: '10px',
            flex: '1'
          }}
        >
          <ul
            style={{
              width: '100%',
              height: scrollViewHeight
            }}
          >
            {sourceData.map(e => (
              <li
                style={{
                  height: ITEM_HEIGHT - 5,
                  marginBottom: '5px'
                }}
                className='showElement'
                key={e}
              >
                {e}
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={elRef}
          style={{
            height: '100vh',
            overflow: 'auto',
            margin: '10px',
            flex: '1'
          }}
          onScroll={computeRange}
        >
          <ul
            style={{
              height: scrollViewHeight - topOffset,
              transform: `translateY(${topOffset}px)`
            }}
          >
            {vlist.map(v => (
              <li
                style={{
                  height: ITEM_HEIGHT - 5,
                  marginBottom: '5px'
                }}
                className='showElement'
                key={v}
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default React.memo(VList)
