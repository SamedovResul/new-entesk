import React, { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
import { useTransition, a } from '@react-spring/web'
// import img  from './metaImg/animationimg/img1.png'
import shuffle from 'lodash.shuffle'
import useMedia from './animation/useMedia'
import imgData from './imgData'


  const SectionThree = () => {
    // Hook1: Tie media queries to the number of columns
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2)
    // Hook2: Measure the width of the container element
    const [ref, { width }] = useMeasure()
    // Hook3: Hold items
    const [items, set] = useState(imgData)
    // Hook4: shuffle data every 2 seconds
    useEffect(() => {
      const t = setInterval(() => set(shuffle), 2000)
      return () => clearInterval(t)
    }, [])
    // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
    const [heights, gridItems] = useMemo(() => {
      let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
      let gridItems = items.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
        const x = (width / columns) * column // x = container width / number of columns * column index,
        const y = (heights[column] += child.height / 2) - child.height / 2 // y = it's just the height of the current column
        return { ...child, x, y, width: width / columns, height: child.height / 2 }
      })
      return [heights, gridItems]
    }, [columns, items, width])
    // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
    const transitions = useTransition(gridItems, {
      key: (item) => item.css,
      from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
      enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
      update: ({ x, y, width, height }) => ({ x, y, width, height }),
      leave: { height: 0, opacity: 0 },
      config: { mass: 5, tension: 500, friction: 100 },
      trail: 25,
    })
    // Render the grid
    return (
      <section className='section-Three'>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Learn scientific concepts in immersive way
                </p>
                <p> while virtually flying in space or exploring the ocean!</p>
              </div>
              <div className="col-md-12  animate ">
              <div ref={ref} className='list' style={{ height: Math.max(...heights) }}>
                {transitions((style, item) => (
                  <a.div style={style}>
                    <div style={{ backgroundImage: `url(${item.css})` }} />
                  </a.div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
  }

export default SectionThree