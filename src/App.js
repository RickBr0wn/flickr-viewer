import React from 'react'
import axios from 'axios'

function App() {
  const [imageUrls, setImageUrls] = React.useState('')

  React.useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.KEY}&tags=nyc&per_page=10&page=1&format=json&nojsoncallback=1`
      await axios(url)
        .then(res => {
          const imageUrls = res.data.photos.photo.map(
            urlData =>
              `https://farm${urlData.farm}.staticflickr.com/${urlData.server}/${urlData.id}_${urlData.secret}.jpg`
          )
          setImageUrls(imageUrls)
        })
        .catch(err => err)
    }
    fetchData()
  }, [])

  return <div>app</div>
}

export default App
