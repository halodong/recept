import { h, render, useEffect, useState } from '../src/index'

export const asyncSetState = (fn: (val: any) => void, val: any, cb: (promiseReslove: Function) => void) => {
  return new Promise((reslove)=>{
    cb(reslove)
    fn(val)
  })
}

export const testRender = (jsx: any) => {
  return new Promise((resolve) => {
    const Wrapper = () => {
      useEffect(() => {
        resolve([...document.body.childNodes])
      }, [])
      return jsx
    }
    document.body.innerHTML = ''
    render(<Wrapper />, document.body)
  })
}

export const testUpdates = async (updates: any[]) => {
  let effect: any = () => {}
  let setContent: any

  const Component = () => {
    const [index, setIndex] = useState(0)

    setContent = setIndex
    useEffect(effect)
    return updates[index].content
  }

  const run = (index: number) => {
    updates[index].test([...document.body.childNodes])
  }

  await testRender(<Component />)

  await run(0)

  for (let i = 1; i < updates.length; i++) {
    await new Promise((resolve) => {
      effect = () => {
        run(i)
        resolve(null)
      }
      setContent(i)
    })
  }
  return
}
