import { animated } from 'react-spring/hooks'
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    background: lightblue;
  }
`

const Main = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 50px;
  & > h1 {
    justify-self: center;
    width: 150px;
    text-align: center;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto,
      segoe ui, arial, sans-serif;
    color: white;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 20px 0 20px 0;
    border-bottom: 4px solid white;
  }
`

const EggWhite = styled(animated.div)`
  justify-self: center;
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 30px;
  padding: 30px;
  background: white;
  overflow-y: scroll;
  border-radius: 5px;
  cursor: pointer;
  will-change: width, height;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.05);
`

const EggYellow = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: '';
    background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`

const Spice = styled(animated.div)`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  background-position: center center;
  will-change: transform, opacity;
`

export { Global, Main, EggWhite, EggYellow, Spice }
