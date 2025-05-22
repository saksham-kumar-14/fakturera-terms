import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';

function App() {

  return (
    <>
      <title>123 Fakturera</title>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
