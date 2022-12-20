// import '../styles/globals.css'
import '../styles/common.css'
import '../styles/dark-mode.css'
import '../styles/events.css'

import Navbar from '../src/navbar'
import Footer from '../src/footer'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// let darkSwitch: HTMLInputElement = document.getElementById('darkSwitch') as HTMLInputElement;
let darkSwitch: HTMLInputElement;

/**
 * Summary: function that adds or removes the attribute 'data-theme' depending if
 * the switch is 'on' or 'off'.
 *
 * Description: initTheme is a function that uses localStorage from JavaScript DOM,
 * to store the value of the HTML switch. If the switch was already switched to
 * 'on' it will set an HTML attribute to the body named: 'data-theme' to a 'dark'
 * value. If it is the first time opening the page, or if the switch was off the
 * 'data-theme' attribute will not be set.
 * @return {void}
 */
function initTheme() {
  if(darkSwitch){
  const darkThemeSelected =
    localStorage.getItem('darkSwitch') !== null &&
    localStorage.getItem('darkSwitch') === 'dark';
  darkSwitch['checked'] = darkThemeSelected;
  darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') :
    document.body.removeAttribute('data-theme');
  }
}


/**
 * Summary: resetTheme checks if the switch is 'on' or 'off' and if it is toggled
 * on it will set the HTML attribute 'data-theme' to dark so the dark-theme CSS is
 * applied.
 * @return {void}
 */
function resetTheme() {
  if (darkSwitch.checked) {
    document.body.setAttribute('data-theme', 'dark');
    localStorage.setItem('darkSwitch', 'dark');
  } else {
    document.body.removeAttribute('data-theme');
    localStorage.removeItem('darkSwitch');
  }
}

export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    darkSwitch = document.getElementById('darkSwitch') as HTMLInputElement;
    if (darkSwitch) {
      initTheme();
      darkSwitch.addEventListener('change', () => {
        resetTheme();
      });
    }
  }, [])

  let css = `    .navbar {
    background-color: #111 !important;
  }
  nav a{
    text-decoration: none !important;
  }
  nav a:hover {
    text-decoration: none !important;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show>.nav-link {
    color: #fff !important;
    background-color: #444 !important;
  }

  // /*Mobile-friendly hoverable dropdown*/
  // @media(min-width:480px) {
  //   .dropdown:hover .dropdown-menu {
  //     display: block !important;
  //     margin-top: 0 !important;
  //     /* remove the gap so it doesn't close */
  //   }
  // }

  .dropdown-menu {
    background-color: #222 !important;
  }

  .dropdown-item:hover {
    background-color: #111 !important;
  }`
  console.log(`${process.env.NEXT_PUBLIC_IS_GITHUB}`)

  return (
    <>
      <Head>
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}
        <title>Krittika</title>
        <meta name="description" content="Astronomy club, IIT Bombay" />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>


      </Head>
    <style jsx>
      {css}
    </style>
    
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
