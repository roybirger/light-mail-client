import { createStore as createReduxStore } from 'redux'
import makeRootReducer from './reducers'


const createStore = (initialState = {}) => {
  
  const store = createReduxStore(
    makeRootReducer(),
    initialState
  )

  store.asyncReducers = {}
  

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore