import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const MainImage = ({ url, owner }) => {
  const [title, setTitle] = React.useState('')

  React.useEffect(() => {
    const fetchTitle = async () => {
      await axios(
        `https://www.flickr.com/services/rest/?method=flickr.people.getInfo&api_key=${process.env.REACT_APP_KEY}&user_id=${owner}&format=json&nojsoncallback=1`
      )
        .then(res => setTitle(res.data.person.username._content))
        .catch(err => console.log(err))
    }
    fetchTitle()
  }, [owner])

  return (
    <div className="card">
      <div className="img-wrapper">
        <img src={url} alt="main" className="main-image" />
        <div className="title">{title}</div>
      </div>
    </div>
  )
}

MainImage.propTypes = {
  url: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
}

export default MainImage
