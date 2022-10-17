import Navigation from "../../components/LandingPage/Navigation"
import Hero from "../../components/LandingPage/Hero"
import Footer from "../../components/LandingPage/Footer"
import SearchBar from "../../components/SearchCarResult/SearchBar"
import SearchCarResult from "../../components/SearchCarResult"

import { useEffect, useState } from "react"
import axios from "axios"

const SearchCars = () => {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [fdata, setFdata] = useState([])
  const [notFound, setNotFound] = useState(false)

  const handleChangeName = (e) => {
    setName(e.target.value)
    if (!e.target.value.length) {
      setFdata([])
      // setNotFound(true);
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const newArr = data.filter((e) => e.name === name)
    setFdata(newArr)
    // setNotFound(false);
  }

  useEffect(() => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/car")
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const props = {
    handleChangeName,
    handleSearch,
    name,
    // notFound,
  }

  return (
    <div>
      <Navigation />
      <Hero />
      <SearchBar {...props} />
      {/* {!!notFound && <h1>Data tidak ditemukan</h1>} */}
      <SearchCarResult data={!fdata.length ? data : fdata} />
      <Footer />
    </div>
  )
}

export default SearchCars
