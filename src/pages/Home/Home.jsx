import React from 'react'
import Hero from "../../components/Hero/Hero"
import SocialContainer from "../../components/SocialContainer/SocialContainer"
import { AboutUs } from "../../components/AboutUs/AboutUs"
import Featured from "../../components/Featured/Featured"

export const Home = () => {
  return (
    <>
        <Hero/>
        <SocialContainer/>
        <AboutUs/>
        <Featured/>
    </>
  )
}
