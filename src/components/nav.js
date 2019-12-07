// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import Emoji from "./emoji"

const Nav = () => (
  <nav>
    {/* TODO 自動生成したい */}
    <div class="vertical-menu">
      <a href="#information">
        <Emoji emoji="📢" ariaLabel="Speaker" />
        お知らせ
      </a>
      <a href="#whatis">
        <Emoji emoji="🐑" ariaLabel="Sheep" />
        Nomadineersとは
      </a>
      <a href="#traveled-engineers">
        <Emoji emoji="📕" ariaLabel="Book" />
        旅するエンジニア
      </a>
      <a href="#podcast">
        <Emoji emoji="📻" ariaLabel="Podcast" />
        Podcast
      </a>
      <a href="#sns">
        <Emoji emoji="🐦" ariaLabel="Bird" />
        SNS
      </a>
      <a href="#contact">
        <Emoji emoji="📮" ariaLabel="Post" />
        お問い合わせ
      </a>
    </div>
  </nav>
)

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }
//
// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
