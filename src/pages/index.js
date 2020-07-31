import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"

import "../styles/modern-normalize.css"
import TextMidReveal from '../components/textMidReveal'
import TopReveal from '../components/topReveal'
import JumpTop from '../components/jumpTop'
import TapButton from '../components/tapButton'
import PanButton from '../components/panButton'
import SeriesOfUsestate from '../components/seriesOfUsestate'
import ConditionalRender from '../components/conditionalRender'
import BatteryButton from '../components/batteryButton'

const IndexPage = () => (
  <Layout>
    <TextMidReveal />
    <TopReveal />
    <JumpTop />
    <TapButton />
    <PanButton />
    <SeriesOfUsestate />
    <ConditionalRender />
    <BatteryButton />
  </Layout>
)

export default IndexPage
