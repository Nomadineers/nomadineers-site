import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import { Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import MessageBox from "../components/message_box"
import Books from "../components/books"
import Book from "../components/book"
import Emoji from "../components/emoji"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      tabi1Image: file(relativePath: { eq: "tabi1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      tabi2Image: file(relativePath: { eq: "tabi2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      tabi3Image: file(relativePath: { eq: "tabi3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      },
      podcastImage: file(relativePath: { eq: "podcast.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)

  return (<Layout>
    <SEO title="Home" />

    <section>
      <a name="information"></a>
      <h2><Emoji emoji="📢" ariaLabel="Speaker" />お知らせ</h2>
      <MessageBox>
        <p>
          Nomadineersでは同人誌『旅するエンジニア』の執筆者、Podcastの出演者を募集しております。<br/>
          下記のような方はお気軽に<a href="#contact">お問い合わせフォーム</a>よりご応募ください。
        </p>
        <ul>
          <li>国内・国外問わず旅行の好きなエンジニア</li>
          <li>地方や海外などで活躍中のエンジニア</li>
          <li>多様な働き方をしているエンジニア</li>
          <li>その他、Nomadineersの活動に当てはまりそうな方</li>
        </ul>
      </MessageBox>
    </section>

    <section>
      <a name="whatis"></a>
      <h2><Emoji emoji="🐑" ariaLabel="Sheep" />Nomadineersとは</h2>
      <p>
        Nomadineers とは遊牧民を意味する nomad と engineers を組み合わせた造語です。
        <a href="https://ja.wikipedia.org/wiki/%E3%83%8E%E3%83%9E%E3%83%89%E3%83%AF%E3%83%BC%E3%82%AB%E3%83%BC">ノマドワーカー</a>をエンジニアに限定した言葉です。
        旅先やカフェなどのオフィス以外の場所で仕事をするエンジニアを指します。
      </p>
      <p>
        本コミュニティは多様な働き方をするエンジニアの情報発信を主な目的としています。
        Nomadineersに限らず、地方や海外で起業する方、人と違う環境で働いている方、フリーランスなどの情報を幅広く発信していきます。
      </p>
    </section>

    <section>
      <a name="traveled-engineers"></a>
      <h2><Emoji emoji="📕" ariaLabel="Book" />同人誌『旅するエンジニア』シリーズ</h2>
      <p>
        旅をテーマにしたNomadineers達のエッセイ集です。
      </p>
      <Books>
        <Book
          title="旅するエンジニア1"
          selling_url="https://nomadineers.booth.pm/items/1419740"
          image_fluid={data.tabi1Image.childImageSharp.fluid}
        ></Book>
        <Book
          title="旅するエンジニア2"
          selling_url="https://nomadineers.booth.pm/items/1319971"
          image_fluid={data.tabi2Image.childImageSharp.fluid}
        ></Book>
        <Book
          title="旅するエンジニア3"
          selling_url="https://nomadineers.booth.pm/items/1573735"
          image_fluid={data.tabi3Image.childImageSharp.fluid}
        ></Book>
      </Books>
    </section>

    <section>
      <a name="podcast"></a>
      <h2><Emoji emoji="📻" ariaLabel="Podcast" />Podcast『Nomadineers』</h2>
      <p>
        同人誌『旅するエンジニア』シリーズの執筆者などをゲストに向かえつつ、
        旅の様子やフリーランスエンジニアとしての生き方などについて紹介するPodcastです。
        不定期更新。どなたでも無料で聞くことができます。
      </p>
      <div class="podcast">
        <a href="https://anchor.fm/nomadineers" target="_blank" title="Nomadineers Podcast">
          {/* 画像が小さくなる。多分responsive対応を自動でやってる */}
          <Img fluid={data.podcastImage.childImageSharp.fluid} alt="Nomadineers Podcast" title="Nomadineers Podcast" class="books-list__img" />
        </a>
        <br />
        <p>
          <a href="https://anchor.fm/nomadineers" target="_blank" title="Nomadineers Podcast" class="u-button--standard">
            Anchorで聞く
          </a>
        </p>
      </div>
    </section>

    <section>
      <a name="sns">
      </a>
      <h2><Emoji emoji="🐦" ariaLabel="Bird" />SNS</h2>
      <ul>
        <li>
          <a href="https://twitter.com/nomadineers">Twitter / Nomadineers</a>
        </li>
        <li>
          <a href="https://www.facebook.com/nomadineers/">Facebook Page / Nomadineers</a>
        </li>
      </ul>
    </section>

    <section>
      <a name="contact"></a>
      <h2><Emoji emoji="📮" ariaLabel="Post" />お問い合わせ</h2>
      <div class="contact-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeGlibsGDl1Ri2i1qXX7s42MXcBZVMCrUMZPZJoosCcC96xvQ/viewform?embedded=true"
          width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </section>
  </Layout>)
}

export default IndexPage
