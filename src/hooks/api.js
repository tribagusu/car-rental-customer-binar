export const getCars = async (carName, carCategory, page) => {
  const res = await fetch(
    `https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${carName}&category=${carCategory}&page=${page}&pageSize=1000`
  )
  return res.json()
}

export const getCar = async (id) => {
  const res = await fetch(
    `https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`
  )
  return res.json()
}
