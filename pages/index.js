import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import CTA from '../components/cta'
import ContactForm1 from '../components/contact-form1'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>ClaimTheia - Loss Identification</title>
        </Head>
        <Navbar
          logoSrc="/photo-1551150441-649e0b074fe4-1500h.jpeg"
          rootClassName="navbarroot-class-name"
          link2="Features"
          link3="Pricing"
          logoAlt="ClaimTheia"
        ></Navbar>
        <Hero
          rootClassName="heroroot-class-name"
          image1Src="https://images.unsplash.com/photo-1515569067071-ec3b51335dd0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNhcnxlbnwwfHx8fDE3Mjc2MDIwMDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image2Src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxjYXJ8ZW58MHx8fHwxNzI3NjAyMDA3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image3Src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE5fHxjYXJ8ZW58MHx8fHwxNzI3NjAyMDA3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image7Src="https://images.unsplash.com/photo-1458408990864-27997f8c2984?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIyfHxjYXJ8ZW58MHx8fHwxNzI3NjAyMDA3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image8Src="https://images.unsplash.com/photo-1508974239320-0a029497e820?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fGNhcnxlbnwwfHx8fDE3Mjc2MDIwMDd8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          image9Src="https://images.unsplash.com/photo-1517153192978-b2e379ac0710?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxjYXJ8ZW58MHx8fHwxNzI3NjAyMDA3fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        ></Hero>
        <CTA action1="Scan now"></CTA>
        <ContactForm1
          content1={
            <Fragment>
              <span className="home-text1 thq-body-small">
                You will get the results in minutes!
              </span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="home-text2 thq-body-small">Submit</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text3 thq-heading-2">
                Let&apos;s start with your car!
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span htmlFor="contact-form-1-check" className="home-text4">
                Your car make
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span htmlFor="contact-form-1-check" className="home-text5">
                Your car model
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span htmlFor="contact-form-1-check" className="home-text6">
                Your car year
              </span>
            </Fragment>
          }
          text111={
            <Fragment>
              <span htmlFor="contact-form-1-check" className="home-text7">
                Picture of your car
              </span>
            </Fragment>
          }
        ></ContactForm1>
        <Features2></Features2>
        <Pricing></Pricing>
        <Contact></Contact>
        <Footer logoSrc="/photo-1551150441-649e0b074fe4-1500h.jpeg"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text1 {
            display: inline-block;
          }
          .home-text2 {
            display: inline-block;
          }
          .home-text3 {
            display: inline-block;
          }
          .home-text4 {
            display: inline-block;
            text-align: center;
          }
          .home-text5 {
            display: inline-block;
            text-align: center;
          }
          .home-text6 {
            display: inline-block;
            text-align: center;
          }
          .home-text7 {
            display: inline-block;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default Home
