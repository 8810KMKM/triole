import React from 'react'
import PropTypes from 'prop-types'

const SelectedShop = ({ selectedShop }) => (
  <p><a href={selectedShop.url}>{selectedShop.name}</a></p>
)

SelectedShop.propTypes = {
  selectedShop:　PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
}

export default SelectedShop
