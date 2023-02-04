export const getGifs = async(category) => {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=7X5DZMaBiXCouGYXdvNkTViy72bWiE4v&q=${category}&limit=5`;
  const resp = await fetch( url );
  const { data = [] } = await resp.json()
 

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))

  return gifs;
}
