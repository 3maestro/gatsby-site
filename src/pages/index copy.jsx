import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="함바죠">
      <p>저기 있잖아... 공감 안해주고 T 해서 미안해 ...ㅠㅠ 🤐🙏🙏🙏</p>
      <p>너꺼 홈페이지 만들어줄껭 ㅎㅎㅎ 함 바죠!!!</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/h01.jpg"
      />
    </Layout>
  )
}

export const Head = () => <title>혜리미닷</title>

export default IndexPage