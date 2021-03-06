export type Key = string | number
export type Dispatch<T> = (value: T, resume?: boolean) => void
export type SetStateAction<S> = S | ((prevState: S) => S)
export type Reducer<S, A> = (prevState: S, action: A) => S
export interface SReactElement<P = any, T = string | Function> {
  type: T
  props: P
  key?: number | string
  ref?: any
}

export interface queue {
  pending: null | hook
  lastRenderedReducer?: any
  lastRenderedState?: any
}

export interface IEffect {
  tag: any
  create: any
  destroy: any
  deps: null | any[]
}
export interface hook {
  action: any
  memoizedState: any
  queue: queue | null
  next: hook | null
}
export interface Ref<T = any> {
  current: T
}
export interface SReactFiber<P = any> {
  key?: number | string
  ref?: any
  index?: number
  type?: string | Function
  tag: number
  props?: any
  return?: SReactFiber<P>
  sibling?: SReactFiber<P>
  child?: SReactFiber<P>
  alternate?: SReactFiber<P> // old
  effectTag?: symbol | null
  stateNode?: Node | null
  siblingNode?: Node | null // Used to locate child nodes of function components
  hook?: any // hook head node
  effect?: IEffect[] | null
}
export type ITaskCallback = ((time: boolean) => boolean) | null
export interface ITask {
  callback?: ITaskCallback
  fiber: SReactFiber
}

export type TReconcileChildFibers = (current: SReactFiber | null, wip: SReactFiber, newChild: any) => void
