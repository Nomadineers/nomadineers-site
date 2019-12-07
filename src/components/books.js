import React from "react"
import PropTypes from "prop-types"

const Books = ({ children }) => (
  <div class="books-list">
    {children}
  </div>
)

Books.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Books
