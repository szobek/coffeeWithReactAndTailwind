import { Routes, Route } from 'react-router-dom'
import './App.css'
import CoffeeList from './components/CoffeeList/CoffeeList.component'
import SelectedCoffee from './components/SelectedCoffee/SelectedCoffee.component'
import Navbar from './components/Navbar/Navbar.component'
import { useEffect, useState } from 'react';
import { Coffee } from './models/CoffeeModel'

function App() {
  const [coffees, setData] = useState<Coffee[]>([]);

  useEffect(() => {
    getDataFromDb()
  },[])
  async function getDataFromDb() {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    } catch (err: any) {
      setData(err.message);
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CoffeeList coffees={coffees} />} />
        <Route path="/coffee/:id" element={<SelectedCoffee coffees={coffees} />} />
      </Routes>


    </>
  )
}

export default App
