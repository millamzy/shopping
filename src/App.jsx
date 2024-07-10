import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './Pages/Home/Home';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} /> */}
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
  )
}

export default App
