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
import Cycle03 from '../components/cycle03'
import Cycle04 from '../components/cycle04'
import Cycle05 from '../components/cycle05'
import UseAnimation01 from '../components/useanimation01'

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
    <Cycle03 />
    <Cycle04 />
    <Cycle05 />
    <UseAnimation01 />
  </Layout>
)

export default IndexPage
