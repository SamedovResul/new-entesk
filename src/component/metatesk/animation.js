import {useSpring,animated } from 'react-spring'

function LoopTrue() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 10 },
    config: {
      duration: 1000,
      delay:20
    }
  })

  return (
    <animated.div className="animated-div"
      style={{
        width: 80,
        height: 80,
        backgroundColor: '#46e891',
        borderRadius: 16,
        ...styles,
      }}
    />
  )
}

export default LoopTrue