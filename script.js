const getPlanetData = (planetIds) => {
  return Promise.all(planetIds.map((planetId) => {  
    return axios.get(`https://hw.skillcrucial.com/api/sw/planets/${planetId}/?format=json`)
	.then((planet) => planet.data)
	})
  )
};

getPlanetData([3, 5]).then((data) => {
		console.log (data)
		document.write(JSON.stringify(data)) 
});

/* const task6 = (planetId) => {
  const url = `https://hw.skillcrucial.com/api/sw/planets/${planetId}/?format=json`
  return axios(url).then((result) => {
    const planet = result.data
	console.log(result.data)
    const planetFilms = planet.films
	console.log(planetFilms)
    const filmsArr = planetFilms.map((item) => {
      return axios(item).then((res) => res.data).then((res) => console.log(res))
    })
    return Promise.all(filmsArr)
      .then((films) => {
        return { ...planet, films }
      })
  })
}

console.log(task6(3).then(res => console.log(res))) 
*/
