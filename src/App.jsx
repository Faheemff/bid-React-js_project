// import React from 'react'

import { useState } from "react"

// import { useGSAP } from "@gsap/react"
// import gsap from "gsap"

const App = () => {
  const [textshow, textHidden] =  useState(false);

  const toggle = ()=> {
    textHidden(textshow);
  }
  return (
    <main>
      <div className='boxx'>
        <div>{toggle}</div>
        <button type="button" onClick={()=> setCont(count + 1)} >incress</button>
      </div>
    </main>
  )
}

export default App