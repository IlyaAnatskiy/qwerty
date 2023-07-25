import React from 'react'

import Canvas from './Canvas'
import { Section3 } from './Section3'

function App() {
  const [disabledCanvas, setDisabldCanvas] = React.useState(false)
  return (
    <div id="app">
      <Canvas hide={disabledCanvas} />

      <div className="wrapper">
        <div className="content">
          <section id="section1">
            <div className="container">
              <h1>Section 1</h1>
            </div>
          </section>
          <section id="section2">
            <div className="container">
              <h1>Section 2</h1>
            </div>
          </section>
          <Section3 setDisabldCanvas={setDisabldCanvas} />
          <section id="section4">
            <div className="container">
              <h1>Section 4</h1>
            </div>
          </section>
          <section id="section5">
            <div className="container">
              <h1>Section 4</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
