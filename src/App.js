import React from 'react'
import axios from 'axios'

import Carousel from './components/Carousel'

function App() {
  const [imageData, setImageData] = React.useState('')

  const styles = {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `linear-gradient(to top,
    #9ec9de,
    #00416a
  )`,
  }

  React.useEffect(() => {
    let fetchingData = true

    const fetchData = async () => {
      if (fetchingData) {
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_KEY}&extras=url_s&tags=london&per_page=100&page=1&format=json&nojsoncallback=1`
        await axios(url)
          .then(res => {
            const imageData = res.data.photos.photo.map(
              ({ farm, server, id, secret, owner }) => ({
                url: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
                id,
                owner,
              })
            )
            setImageData(imageData)
          })
          .catch(err => err)
      }
    }

    fetchData()

    return () => (fetchingData = false)
  }, [])

  return (
    <div style={styles}>
      {imageData.length > 0 ? (
        <Carousel imageData={imageData} />
      ) : (
        <p>loading..</p>
      )}
    </div>
  )
}

export default App
