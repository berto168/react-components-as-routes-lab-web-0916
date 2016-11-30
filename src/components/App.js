import React from 'react'
import Actors from './Actors';
import Directors from './Directors';
import Movies from './Movies';

import NavBar from './NavBar'

const App = (props) => {
  return (
      <div>
        <NavBar />
        {props.children}
      </div>
  )
}

module.exports = App
