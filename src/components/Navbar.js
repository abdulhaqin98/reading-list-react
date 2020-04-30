import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {

   // Method 2

   render() {

      return (
         <AuthContext.Consumer>{(authContext) => (
            <ThemeContext.Consumer>{(themeContext) => {
               const { isAuthenticated, toggleAuth } = authContext;
               const { isLightTheme, light, dark } = themeContext;
               const theme = isLightTheme ? light : dark;
               return (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                     <h1>Context App</h1>
                     <div>
                        Click on the text below to change state.
                     </div>
                        <br/>
                     <div onClick={toggleAuth}>
                        { isAuthenticated ? 'Logged In' : 'Logged out'}
                     </div>
                     <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                     </ul>
                  </nav>
               )
            }}</ThemeContext.Consumer>
         )}</AuthContext.Consumer>
      );
   }
}

export default Navbar
