import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

    <section>
      <a name="information"></a>
      <h2>📢お知らせ</h2>
      <div class="information-box">
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
      </div>
    </section>

    <section>
      <a name="whatis"></a>
      <h2>🐑Nomadineersとは</h2>
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
      <h2>📕同人誌『旅するエンジニア』シリーズ</h2>
      <p>
        旅をテーマにしたNomadineers達のエッセイ集です。
      </p>
      <div class="books-list">
        <div class="books-list__item">
          <h4 class="books-list__title">旅するエンジニア1</h4>
          <a href="https://nomadineers.booth.pm/items/1419740" target="_blank" title="旅するエンジニア1">
            <img src="img/tabi1.jpg" alt="旅するエンジニア1" title="旅するエンジニア1" class="books-list__img" />
          </a>
          <div class="books-list__description">
            <div class="books-list__price">電子書籍 ￥1,000</div>
            <a href="https://nomadineers.booth.pm/items/1419740" target="_blank" class="u-button--standard" title="旅するエンジニア1">Boothで購入する</a>
          </div>
        </div>
        <div class="books-list__item">
          <h4 class="books-list__title">旅するエンジニア2</h4>
          <a href="https://nomadineers.booth.pm/items/1319971" target="_blank" title="旅するエンジニア2">
            <img src="img/tabi2.jpg" alt="旅するエンジニア2" title="旅するエンジニア2" class="books-list__img" />
          </a>
          <div class="books-list__description">
            <div class="books-list__price">電子書籍 ￥1,000</div>
            <a href="https://nomadineers.booth.pm/items/1319971" target="_blank" class="u-button--standard" title="旅するエンジニア2">Boothで購入する</a>
          </div>
        </div>
        <div class="books-list__item">
          <h4 class="books-list__title">旅するエンジニア3</h4>
          <a href="https://nomadineers.booth.pm/items/1573735" target="_blank" title="旅するエンジニア3">
            <img src="img/tabi3.jpg" alt="旅するエンジニア3" title="旅するエンジニア3" class="books-list__img" />
          </a>
          <div class="books-list__description">
            <div class="books-list__price">電子書籍 ￥1,000</div>
            <a href="https://nomadineers.booth.pm/items/1573735" target="_blank" class="u-button--standard" title="旅するエンジニア3">Boothで購入する</a>
          </div>
        </div>
      </div>
    </section>

    <section>
      <a name="podcast"></a>
      <h2>📻Podcast『Nomadineers』</h2>
      <p>
        同人誌『旅するエンジニア』シリーズの執筆者などをゲストに向かえつつ、
        旅の様子やフリーランスエンジニアとしての生き方などについて紹介するPodcastです。
        不定期更新。どなたでも無料で聞くことができます。
      </p>
      <div class="podcast">
        <a href="https://anchor.fm/nomadineers" target="_blank" title="Nomadineers Podcast">
          <img src="img/podcast.jpg" alt="podcast" title="Nomadineers Podcast" />
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
      <h2>🐦SNS</h2>
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
      <h2>📮お問い合わせ</h2>
      <div class="contact-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeGlibsGDl1Ri2i1qXX7s42MXcBZVMCrUMZPZJoosCcC96xvQ/viewform?embedded=true"
          width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
      </div>
    </section>
  </Layout>
)

export default IndexPage
