const getRestaurants = () => {
  return fetch(
    'https://developers.zomato.com/api/v2.1/search?entity_id=52&entity_type=city&apikey=' +
      process.env.ZOMATO_API_KEY
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
    .catch()
}

const searchRestaurants = (query) => {
  return fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=52&entity_type=city&q=${query}&apikey=` +
      process.env.ZOMATO_API_KEY
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
    .catch()
}

const getCuisines = () => {
  return fetch(
    'https://developers.zomato.com/api/v2.1/cuisines?city_id=52&apikey=' +
      process.env.ZOMATO_API_KEY
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
    .catch()
}

const getEstablishments = () => {
  return fetch(
    'https://developers.zomato.com/api/v2.1/establishments?city_id=52&apikey=' +
      process.env.ZOMATO_API_KEY
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
    .catch()
}

const getRestaurantsCuisines = (cuisineArr) => {
  return fetch(
    'https://developers.zomato.com/api/v2.1/search?entity_id=52&entity_type=city&start=&cuisines=' +
      cuisineArr.join('%2C%20') +
      '&apikey=' +
      process.env.ZOMATO_API_KEY
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
    .catch()
}

const getRestaurantsEstablishment = (id) => {
  return fetch(
    'https://developers.zomato.com/api/v2.1/search?entity_id=52&entity_type=city&cuisines=' +
      id +
      '&apikey=' +
      process.env.ZOMATO_API_KEY
  )
    .then((res) => res.json())
    .then((result) => {
      return result
    })
    .catch()
}

export default {
  getRestaurants,
  searchRestaurants,
  getCuisines,
  getEstablishments,
  getRestaurantsCuisines,
  getRestaurantsEstablishment,
}
