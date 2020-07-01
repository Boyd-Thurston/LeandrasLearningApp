// import external modules
import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// local imports
import App from './components/App'
import reducers from './reducers'

// define store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// event listener to call render
document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

// render function
function render() {
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
}