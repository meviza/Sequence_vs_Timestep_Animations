import { render } from 'react-dom'
import React, { useState, useRef } from 'react'
import { useTransition, useSpring, config as conf, useChain } from 'react-spring/hooks'
import { Global, Main, EggWhite, EggYellow, Spice } from './styles'
import data from './data'

function FriedEgg({ sequence = false, config = conf.stiff }) {
  const [open, set] = useState(false)

  // 1. Spring controlls egg-white, catch ref
  const springRef = useRef()
  const { size, opacity } = useSpring({ config, size: `${open ? 100 : 60}%`, opacity: open ? 0 : 1, ref: springRef })

  // 2. Transition controlls spices, catch ref
  const transRef = useRef()
  const spices = useTransition({
    config,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    items: open ? data : [],
    unique: true,
    trail: 500 / data.length,
    ref: transRef
  })

  // 3. Define chain || useChain(refs, time-steps, time-frame=1000)
  useChain(
    // Execution order
    open ? [springRef, transRef] : [transRef, springRef],
    // Optional: time-steps, or offsets, when animations will start within the timeframe
    sequence ? undefined : [0, open ? 0.1 : 0.8]
  )

  // 4. Render view like always
  return (
    <EggWhite style={{ width: size, height: size }} onClick={() => set(open => !open)}>
      <EggYellow style={{ opacity }} />
      {spices.map(({ item, key, props }) => (
        <Spice key={key} style={{ ...props, background: item }} />
      ))}
    </EggWhite>
  )
}

render(
  <Main>
    <Global />
    <h1>Sequence</h1>
    <h1>Timestep</h1>
    <FriedEgg sequence />
    <FriedEgg />
  </Main>,
  document.getElementById('root')
)
