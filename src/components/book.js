import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Book = ({ title, selling_url, image_fluid }) => {
  return (
    <div class="books-list__item">
      <h3 class="books-list__title">{title}</h3>
      <a href={selling_url} target="_blank" title={title}>
        <Img fluid={image_fluid} alt={title} title={title} class="books-list__img" />
      </a>
      <div class="books-list__description">
        <div class="books-list__price">電子書籍 ￥1,000</div>
        <a href={selling_url} target="_blank" class="u-button--standard" title={title}>Boothで購入する</a>
      </div>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string,
  selling_url: PropTypes.string,
  image_path: PropTypes.string
}

Book.defaultProps = {
  title: ``,
  selling_url: ``,
  image_path: ``
}

export default Book
