import React from 'react'
import PropTypes from 'prop-types'

const Arrow = ({ direction, clickFn, glyph }) => (
  <div
    style={{ fontSize: '32px', cursor: 'pointer' }}
    className={`slide-arrow ${direction}`}
    onClick={clickFn}>
    {direction === 'left' ? <>&#9664;</> : <>&#9654;</>}
  </div>
)

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  clickFn: PropTypes.func.isRequired,
  glyph: PropTypes.string.isRequired,
}

export default Arrow
