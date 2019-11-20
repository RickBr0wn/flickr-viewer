import React from 'react'
import PropTypes from 'prop-types'

import Arrow from './Arrow'
import SecondaryImages from './SecondaryImages'
import MainImage from './MainImage'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT_INDEX':
      return Object.assign({}, state, {
        index: state.index + 1,
      })
    case 'DECREMENT_INDEX':
      return Object.assign({}, state, {
        index: state.index - 1,
      })
    default:
      return state
  }
}

const Carousel = ({ imageData }) => {
  const [{ index }, dispatch] = React.useReducer(reducer, {
    index: 0,
  })

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {index === 0 ? null : (
        <Arrow
          direction="left"
          clickFn={() => dispatch({ type: 'DECREMENT_INDEX' })}
        />
      )}

      <div style={{ display: 'flex' }}>
        <SecondaryImages
          url={imageData[index - 1] ? imageData[index - 1].url : null}
        />
        <MainImage url={imageData[index].url} owner={imageData[index].owner} />
        <SecondaryImages url={imageData[index + 1].url} />
      </div>

      <Arrow
        direction="right"
        clickFn={() => dispatch({ type: 'INCREMENT_INDEX' })}
      />
    </div>
  )
}

Carousel.propTypes = {
  imageData: PropTypes.array.isRequired,
}

export default Carousel
