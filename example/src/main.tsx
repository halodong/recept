import {
  render,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useLayoutEffect,
} from '../../src'
import EffectDemo from './components/useEffect'
// import React, {
//   useEffect,
//   useState,
//   useMemo,
//   useRef,
//   useCallback,
//   useLayoutEffect,
// } from 'react'
// import { render } from 'react-dom'

export {
  render,
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useLayoutEffect,
}

function App(props) {
  const [open, setIndex] = useState(true)

  return (
    <div>
      <button onClick={() => setIndex(!open)}>
        当前：{open ? '开' : '关'}
      </button>
      {open && (
        <>
          <EffectDemo />
          <h1>test</h1>
        </>
      )}
      <footer>recept</footer>
    </div>
  )
}
render(<App />, document.getElementById('root')!)
