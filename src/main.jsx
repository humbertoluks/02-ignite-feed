import React from 'react' // coração do react
import ReactDOM from 'react-dom/client' // renderiza o react no navegador
import App from './App.jsx' // importa o componente App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>,
)
