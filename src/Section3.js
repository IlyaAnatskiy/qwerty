import React from 'react'
import BlackNoise from './BlackNoise'
import { useIsInViewport } from './useIsInViewport'
import gif from './egg.gif'
import duck from './duck.webm'

export const Section3 = ({ setDisabldCanvas }) => {
  const ref = React.useRef(null)
  const isInViewport = useIsInViewport(ref)
  const [hover, setHover] = React.useState(false)

  React.useEffect(() => {
    if (isInViewport) {
      document.querySelector('#app').classList.add('white-bg')
      setDisabldCanvas(true)
      return
    }
    setDisabldCanvas(false)
    document.querySelector('#app').classList.remove('white-bg')
  }, [isInViewport, setDisabldCanvas])
  console.log(hover)
  return (
    <>
      <section ref={ref} id="section3">
        <div class="container">
          <BlackNoise hide={!isInViewport} />

          <h1>Section 3</h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2, position: 'relative' }}>
            <div style={{ width: 'fit-content', cursor: 'pointer' }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <h2>Hover on me</h2>
            </div>
            <img className={`${hover ? '' : 'hide'}`} style={{ height: 200, width: 200 }} src={gif} />

            {/* <video className={`${hover ? '' : 'hide'}`} loop autoPlay muted style={{ height: 200, width: 200 }}>
              <source src={duck} type="video/webm" />
              Sorry, your browser doesn't support videos.
            </video> */}
          </div>
        </div>
      </section>
    </>
  )
}
