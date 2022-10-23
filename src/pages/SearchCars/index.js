import { useEffect, useState } from "react"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
// func
import { getCars } from "../../hooks/api"
// comp
import Navigation from "../../components/LandingPage/Navigation"
import Hero from "../../components/LandingPage/Hero"
import Footer from "../../components/LandingPage/Footer"
import SearchBar from "../../components/SearchCarResult/SearchBar"
import SearchCarResult from "../../components/SearchCarResult"

const SearchCars = () => {
  const [page, setPage] = useState(1)
  const [carName, setCarName] = useState("")
  const [carCategory, setCarCategory] = useState("")

  const handleCarName = (e) => {
    setCarName(e.target.value)
  }

  const handleCarCategory = (e) => {
    setCarCategory(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  // fetch query
  const { data, isLoading, isPreviousData } = useQuery(
    ["cars", carName, carCategory, page],
    () => getCars(carName, carCategory, page),
    {
      keepPreviousData: true,
    }
  )

  const props = {
    handleCarName,
    handleCarCategory,
    carCategory,
    handleSearch,
    carName,
    isLoading,
    data,
    isPreviousData,
  }

  return (
    <div>
      <Navigation />
      <Hero />
      <SearchBar {...props} />
      <SearchCarResult {...props} />
      <Footer />
    </div>
  )
}

export default SearchCars
