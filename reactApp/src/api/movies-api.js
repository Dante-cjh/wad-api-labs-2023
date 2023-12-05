export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=24e80d893fa9cb32323eaf70e2a6f5e8&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };