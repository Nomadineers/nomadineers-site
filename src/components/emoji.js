import PropTypes from "prop-types"
import React from "react"

const Emoji = ({ emoji, ariaLabel }) => (
  <span role="img" aria-label={{ariaLabel}}>
    {emoji}
  </span>
)

Emoji.propTypes = {
  emoji: PropTypes.string,
  ariaLabel: PropTypes.string
}

Emoji.defaultProps = {
  emoji: ``,
  ariaLabel: ``
}

export default Emoji
