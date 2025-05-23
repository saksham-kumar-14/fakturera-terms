import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import './styles/app.css'

function App() {

  return (
    <div className='container'>
      <title>123 Fakturera</title>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
