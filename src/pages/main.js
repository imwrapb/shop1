import React, { useState } from 'react'
import Cart from "./cart/cart"
import Home from './home/home';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Data from "../data/products.json";
import { category } from "../category"

const Main = () => {
  const [data, setData] = useState(Data)
  const [card, setCard] = useState([])
  const [searchResults, setSearchResults] = useState([]);

  const categoryClick = (elem) => {
    console.log("elem>>>", elem);
    if (elem === 'all') {
      setData([...Data])
    } else {
      const filterData = Data.filter((item) => item.category === elem)
      setData([...filterData])
    }
  }

  const addToCard = (id) => {
    console.log("addToCard>>>", id);
    const data = Data.find((item) => item.id === id)
    setCard([...card, data])
    alert("add to card")
  }

  const deleteCard = (id) => {
    console.log("delete", id);
    const conf = window.confirm("delete")
    if (conf) {
      setCard([...card.filter((item) => item.id !== id)])
    }
  }

  const handleSearch = (query) => {
    const filteredData = Data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    setSearchResults(filteredData);
  }
 

  console.log("card>>>", card);
  return (
    <div>
      <Navbar onSearch={handleSearch}
      
       />
      <Routes>
        <Route path="/" element={<Home
          data={searchResults.length > 0 ? searchResults : data}
          category={category}
          categoryClick={categoryClick}
          addToCard={addToCard}
        />} />
        <Route path="/cart" element={<Cart
          card={card}
          deleteCard={deleteCard}
        />} />
      </Routes>


    </div>
  )
}
export default Main