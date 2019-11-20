import React from 'react'
import PropTypes from 'prop-types'

const SecondaryImages = ({ url }) =>
  url ? (
    <img src={url} alt="flickr" className="secondary-images border" />
  ) : (
    <div className="secondary-images" />
  )

SecondaryImages.propTypes = {
  url: PropTypes.string,
}

export default SecondaryImages
