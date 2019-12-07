import React from "react"
import PropTypes from "prop-types"

const MessageBox = ({ children }) => (
  <div class="information-box">
    {children}
  </div>
)

MessageBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MessageBox
