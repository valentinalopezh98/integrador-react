import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { ContextoProvider } from './context/context.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store.js'
import { store } from "./redux/store.js"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ContextoProvider>
          <App />
          <GlobalStyles/>
        </ContextoProvider>
      </PersistGate>
    </Provider>
  
  </React.StrictMode>,
)
