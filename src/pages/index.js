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
import BallCarousel from '../components/ballCarousel'
import MoonCarousel from '../components/moonCarousel'
import Cycle01 from '../components/cycle01'
import Cycle02 from '../components/cycle02'

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
    <BallCarousel />
    <MoonCarousel />
    <Cycle01 />
    <Cycle02 />
  </Layout>
)

export default IndexPage
