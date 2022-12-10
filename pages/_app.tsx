// import '../styles/globals.css'
import '../styles/common.css'
import '../styles/dark-mode.css'
import Navbar from '../src/navbar'
import Footer from '../src/footer'
import type { AppProps } from 'next/app'
import React, { useState, useEffect } from 'react';
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
  return (
    <>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
