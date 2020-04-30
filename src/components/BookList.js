import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {

   // Method 1

   static contextType = ThemeContext
   render() {

      const { isLightTheme, light, dark } = this.context;
      const theme = isLightTheme ? light : dark;

      return (
         <div className="book-list" style={{ color: theme.syntax, background: theme.bg}}>
            <ul>
               <li style={{ background: theme.ui }}>book 1</li>
               <li style={{ background: theme.ui }}>book 2</li>
               <li style={{ background: theme.ui }}>book 3</li>
            </ul>
         </div>
      )
   }
}

export default BookList
