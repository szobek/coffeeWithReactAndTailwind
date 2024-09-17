import { Routes, Route } from 'react-router-dom'
import './App.css'
import CoffeeList from './components/CoffeeList/CoffeeList.component'
import SelectedCoffee from './components/SelectedCoffee/SelectedCoffee.component'
import Navbar from './components/Navbar/Navbar.component'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
            <Route path="/" element={<CoffeeList />} />
            <Route path="/coffee/:id" element={<SelectedCoffee />} />
         </Routes>


    </>
  )
}

export default App
